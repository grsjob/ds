import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Divider, Button, LayerRow } from '../src';
const meta={title:'Основы/Divider',component:Divider,tags:['autodocs'],args:{}} satisfies Meta<typeof Divider>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
