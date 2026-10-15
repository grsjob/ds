import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Logo, Button, LayerRow } from '../src';
const meta={title:'Основы/Logo',component:Logo,tags:['autodocs'],args:{system:'ЕЦС'}} satisfies Meta<typeof Logo>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
