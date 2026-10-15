import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { FileAttachment, Button, LayerRow } from '../src';
const meta={title:'Компоненты/FileAttachment',component:FileAttachment,tags:['autodocs'],args:{name:'Параметры офиса.xlsx',sizeLabel:'128 КБ',state:'ready',onRemove:fn()}} satisfies Meta<typeof FileAttachment>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const Uploading:Story={args:{state:"uploading",progress:40}};
export const Error:Story={args:{state:"error"}};
