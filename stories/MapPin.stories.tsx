import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { MapPin, Button, LayerRow } from '../src';
const meta={title:'Компоненты/MapPin',component:MapPin,tags:['autodocs'],args:{label:'Офис 0342',tone:'green',onClick:fn()}} satisfies Meta<typeof MapPin>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const Selected:Story={args:{selected:true}};
export const Critical:Story={args:{tone:"red"}};
export const Disabled:Story={args:{disabled:true}};
