import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Tabs, Button, LayerRow } from '../src';
const meta={title:'Компоненты/Tabs',component:Tabs,tags:['autodocs'],args:{label:'Сегменты',items:[{value:'retail',label:'Розничный',content:'Параметры розничного сегмента'},{value:'business',label:'Корпоративный',content:'Параметры корпоративного сегмента'},{value:'closed',label:'Недоступный',content:'',disabled:true}]}} satisfies Meta<typeof Tabs>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const Small:Story={args:{size:'s'}};
