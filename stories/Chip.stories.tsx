import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Chip, Button, LayerRow } from '../src';
const meta={title:'Компоненты/Chip',component:Chip,tags:['autodocs'],args:{children:'Розничный',selected:false,onClick:fn()}} satisfies Meta<typeof Chip>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const Selected:Story={args:{selected:true}};
export const Disabled:Story={args:{disabled:true}};
export const Removable:Story={args:{onRemove:fn()}};
