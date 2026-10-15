import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { TableSlot, Button, LayerRow } from '../src';
const meta={title:'Компоненты/TableSlot',component:TableSlot,tags:['autodocs'],args:{children:'Приоритет согласования',priority:1}} satisfies Meta<typeof TableSlot>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const Critical:Story={args:{priority:3}};
export const Skeleton:Story={args:{skeleton:true}};
