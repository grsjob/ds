import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ChatComposer, Button, LayerRow } from '../src';
const meta={title:'ЕЦС/ChatComposer',component:ChatComposer,tags:['autodocs'],args:{onSend:fn(),placeholder:'Напишите сообщение'}} satisfies Meta<typeof ChatComposer>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const Disabled:Story={args:{disabled:true}};
export const Sending:Story={args:{sending:true}};
