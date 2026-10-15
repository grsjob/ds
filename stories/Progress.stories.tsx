import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Progress, Button, LayerRow } from '../src';
const meta={title:'Компоненты/Progress',component:Progress,tags:['autodocs'],args:{value:50,label:'Обработка данных',tone:'blue'}} satisfies Meta<typeof Progress>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const Complete:Story={args:{value:100,tone:"green"}};
