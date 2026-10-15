import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Icon, Button, LayerRow } from '../src';
const meta={title:'Основы/Icon',component:Icon,tags:['autodocs'],args:{name:'close-16',size:24,label:'Закрыть'}} satisfies Meta<typeof Icon>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
