import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { MenuItem, Button, LayerRow } from '../src';
const meta={title:'Компоненты/MenuItem',component:MenuItem,tags:['autodocs'],args:{children:'Параметры офиса',description:'Сегменты и доступ',onClick:fn()}} satisfies Meta<typeof MenuItem>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const Selected:Story={args:{selected:true}};
export const Disabled:Story={args:{disabled:true}};
export const Skeleton:Story={args:{skeleton:true}};
