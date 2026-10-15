"""Read Figma editable vector networks (little endian).
Format reference: https://github.com/OpenFig-org/openfig-core/blob/main/docs/vector.md
"""
import struct

def decode(data):
    pos=0
    def take(fmt):
        nonlocal pos
        size=struct.calcsize('<'+fmt)
        if pos+size>len(data):raise ValueError('Truncated vector network')
        result=struct.unpack_from('<'+fmt,data,pos);pos+=size;return result
    nv,ns,nr=take('III')
    if nv>100000 or ns>100000 or nr>10000:raise ValueError('Invalid network counts')
    vertices=[take('Iff') for _ in range(nv)]
    segments=[take('IIffIff') for _ in range(ns)]
    regions=[]
    for _ in range(nr):
        packed,nloops=take('II');loops=[]
        if nloops>ns+1:raise ValueError('Invalid loop count')
        for _ in range(nloops):
            count,=take('I')
            if count>ns:raise ValueError('Invalid loop length')
            loop=list(take('I'*count))
            if any(i>=ns for i in loop):raise ValueError('Invalid segment index')
            loops.append(loop)
        regions.append({'style':packed>>1,'rule':'nonzero' if packed&1 else 'evenodd','loops':loops})
    if pos!=len(data):raise ValueError(f'Unexpected trailing data: {len(data)-pos}')
    if any(s[1]>=nv or s[4]>=nv for s in segments):raise ValueError('Invalid vertex index')
    return vertices,segments,regions

def paths(data,sx=1,sy=1):
    vertices,segments,regions=decode(data)
    def xy(x,y):return f'{x*sx:.6g} {y*sy:.6g}'
    def trace(indices,close=False):
        remaining=set(indices);result=[]
        while remaining:
            first=min(remaining);start=segments[first][1];current=start
            a=vertices[start];result.append('M'+xy(a[1],a[2]))
            while remaining:
                found=next((i for i in sorted(remaining) if segments[i][1]==current or segments[i][4]==current),None)
                if found is None:break
                remaining.remove(found);_,av,ax,ay,bv,bx,by=segments[found]
                if av!=current:av,bv,ax,ay,bx,by=bv,av,bx,by,ax,ay
                a,b=vertices[av],vertices[bv]
                if ax==ay==bx==by==0:result.append('L'+xy(b[1],b[2]))
                else:result.append('C'+xy(a[1]+ax,a[2]+ay)+' '+xy(b[1]+bx,b[2]+by)+' '+xy(b[1],b[2]))
                current=bv
                if current==start:result.append('Z');break
            if close and current!=start:result.append('Z')
        return ' '.join(result)
    fills=[{'d':' '.join(trace(loop,True) for loop in r['loops']),'style':r['style'],'rule':r['rule']} for r in regions]
    if not fills and segments:fills=[{'d':trace(range(len(segments))),'style':0,'rule':'nonzero'}]
    return fills,trace(range(len(segments)))
