import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { StatusWidget, Button, LayerRow } from '../src';
const meta={title:'ЕЦС/StatusWidget',component:StatusWidget,tags:['autodocs'],args:{positive:true,label:'Согласовано',value:'24 из 30',onAction:fn()}} satisfies Meta<typeof StatusWidget>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const Negative:Story={args:{positive:false,label:'Не согласовано',value:'6 из 30'}};
export const Skeleton:Story={args:{loading:true}};
