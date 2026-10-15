import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Message, Button, LayerRow } from '../src';
const meta={title:'ЕЦС/Message',component:Message,tags:['autodocs'],args:{author:'Иван Петров',time:'10:42',owner:'guest',children:'Параметры офиса обновлены.',onReply:fn()}} satisfies Meta<typeof Message>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const Editor:Story={args:{owner:'editor'}};
export const Reply:Story={args:{reply:'Уточните площадь помещения'}};
export const WithFile:Story={args:{attachments:[{name:'Офис.pdf',sizeLabel:'240 КБ'}]}};
