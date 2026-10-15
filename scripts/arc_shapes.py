"""Convert Figma arc data into editable SVG sector/ring paths."""
import math

def arc_path(node):
    w=node.get('size',{}).get('x',0);h=node.get('size',{}).get('y',0)
    cx,cy=w/2,h/2;a=node.get('arcData',{});start=a.get('startingAngle',0);end=a.get('endingAngle',2*math.pi);inner=max(0,min(1,a.get('innerRadius',0)));delta=end-start
    sweep=1 if delta>=0 else 0;large=1 if abs(delta)>math.pi else 0
    def point(angle,ratio=1):return f'{cx+cx*ratio*math.cos(angle):.6g} {cy+cy*ratio*math.sin(angle):.6g}'
    if abs(delta)>=2*math.pi-0.0001:
        middle=start+(math.pi if sweep else -math.pi)
        d=f'M{point(start)} A{cx} {cy} 0 1 {sweep} {point(middle)} A{cx} {cy} 0 1 {sweep} {point(start)} Z'
        if inner:d+=f' M{point(start,inner)} A{cx*inner} {cy*inner} 0 1 {1-sweep} {point(middle,inner)} A{cx*inner} {cy*inner} 0 1 {1-sweep} {point(start,inner)} Z'
        return d
    d=f'M{point(start)} A{cx} {cy} 0 {large} {sweep} {point(end)}'
    if inner:d+=f' L{point(end,inner)} A{cx*inner} {cy*inner} 0 {large} {1-sweep} {point(start,inner)} Z'
    else:d+=f' L{cx} {cy} Z'
    return d
