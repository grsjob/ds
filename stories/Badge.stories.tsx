import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Badge, Button, LayerRow } from '../src';
const meta={title:'Основы/Badge',component:Badge,tags:['autodocs'],args:{children:'Согласовано',tone:'green',size:'s'}} satisfies Meta<typeof Badge>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const Tones:Story={render:()=> <div style={{display:'flex',gap:8}}>{(['gray','green','red','blue','orange','purple'] as const).map(tone=><Badge key={tone} tone={tone}>{tone}</Badge>)}</div>};
export const Disabled:Story={args:{disabled:true}};
