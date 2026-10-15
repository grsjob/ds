import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Avatar, Button, LayerRow } from '../src';
const meta={title:'Основы/Avatar',component:Avatar,tags:['autodocs'],args:{name:'Иван Петров',size:32}} satisfies Meta<typeof Avatar>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const Online:Story={args:{online:true}};
export const Editor:Story={args:{editor:true}};
