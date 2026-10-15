import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Spinner, Button, LayerRow } from '../src';
const meta={title:'Основы/Spinner',component:Spinner,tags:['autodocs'],args:{size:20,label:'Загрузка'}} satisfies Meta<typeof Spinner>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
