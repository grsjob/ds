import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Tooltip, Button, LayerRow } from '../src';
const meta={title:'Компоненты/Tooltip',component:Tooltip,tags:['autodocs'],args:{children:<Button variant='secondary'>Наведи или сфокусируй</Button>,content:'Описание действия',tone:'dark'}} satisfies Meta<typeof Tooltip>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const White:Story={args:{tone:'white'}};
