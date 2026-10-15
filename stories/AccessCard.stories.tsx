import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { AccessCard, Button, LayerRow } from '../src';
const meta={title:'ЕЦС/AccessCard',component:AccessCard,tags:['autodocs'],args:{title:'Доступ к офису',description:'Настройте доступ к параметрам',members:[{name:'Иван Петров'},{name:'Анна Соколова'}],onAction:fn()}} satisfies Meta<typeof AccessCard>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const Active:Story={args:{active:true}};
export const Skeleton:Story={args:{loading:true}};
