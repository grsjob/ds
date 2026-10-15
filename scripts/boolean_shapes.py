"""SVG masks for Figma boolean groups lacking cached outline geometry."""
def render_boolean(n,serial,js,num,pathblob,raw,network_paths,base64,color,visible_paints,paint_css):
    defs=[];counter=[0]
    def shape(node,ink,root=False):
        counter[0]+=1
        t=node.get('transform',{});w=node.get('size',{}).get('x',0);h=node.get('size',{}).get('y',0)
        tr='' if root else ' transform={'+js('matrix('+' '.join(num(t.get(k,d)) for k,d in [('m00',1),('m10',0),('m01',0),('m11',1),('m02',0),('m12',0)])+')')+'}'
        ty=node.get('type');content=''
        if ty=='BOOLEAN_OPERATION':
            children=node.get('_children',[]);op=node.get('booleanOperation','UNION')
            if op=='UNION':content=''.join(shape(c,ink) for c in children)
            else:
                key='bool'+str(serial)+'_'+str(counter[0]);mid='`${uid}-'+key+'`'
                if op=='SUBTRACT':mask=''.join(shape(c,'white' if i==0 else 'black') for i,c in enumerate(children))
                else:mask=''.join(shape(c,'white') for c in children)
                defs.append('<mask id={'+mid+'} maskUnits="userSpaceOnUse" x="-10000" y="-10000" width="20000" height="20000">'+mask+'</mask>')
                content='<rect width={'+str(w)+'} height={'+str(h)+'} fill={'+js(ink)+'} mask={`url(#${uid}-'+key+')`}/>'
        elif ty=='ELLIPSE':content='<ellipse cx={'+str(w/2)+'} cy={'+str(h/2)+'} rx={'+str(w/2)+'} ry={'+str(h/2)+'} fill={'+js(ink)+'}/>'
        elif ty in ['ROUNDED_RECTANGLE','FRAME','SYMBOL','INSTANCE']:
            content='<rect width={'+str(w)+'} height={'+str(h)+'} rx={'+str(node.get('cornerRadius',0))+'} fill={'+js(ink)+'}/>'
            content+=''.join(shape(c,ink) for c in node.get('_children',[]))
        elif ty=='VECTOR':
            for field in ['fillGeometry','strokeGeometry']:
                for p in node.get(field,[]):content+='<path d={'+js(pathblob(p['commandsBlob']))+'} fill={'+js(ink)+'} fillRule="'+('evenodd' if p.get('windingRule')=='ODD' else 'nonzero')+'"/>'
            if not content and 'vectorNetworkBlob' in node.get('vectorData',{}):
                vd=node['vectorData'];sz=vd.get('normalizedSize',node.get('size',{}));fills,stroke=network_paths(base64.b64decode(raw['blobs'][vd['vectorNetworkBlob']]),w/(sz.get('x',1) or 1),h/(sz.get('y',1) or 1))
                if visible_paints(node,'fillPaints'):
                    content+=''.join('<path d={'+js(p['d'])+'} fill={'+js(ink)+'} fillRule="'+p['rule']+'"/>' for p in fills)
                if visible_paints(node,'strokePaints'):content+='<path d={'+js(stroke)+'} fill="none" stroke={'+js(ink)+'} strokeWidth={'+str(node.get('strokeWeight',1))+'}/>'
        return '<g'+tr+'>'+content+'</g>'
    ink=next((paint_css(p) for p in visible_paints(n,'fillPaints') if p.get('type')=='SOLID'),'currentColor')
    contents=shape(n,ink,True)
    w=n.get('size',{}).get('x',0);h=n.get('size',{}).get('y',0)
    return '<svg width="100%" height="100%" viewBox="0 0 '+num(w)+' '+num(h)+'" overflow="visible" aria-hidden="true"><defs>'+''.join(defs)+'</defs>'+contents+'</svg>'
