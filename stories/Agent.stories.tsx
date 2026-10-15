import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Agent, Button, LayerRow } from '../src';
const meta={title:'ЕЦС/Agent',component:Agent,tags:['autodocs'],args:{label:'Помощник',onClick:fn(),onClose:fn()}} satisfies Meta<typeof Agent>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const Active:Story={args:{active:true}};
