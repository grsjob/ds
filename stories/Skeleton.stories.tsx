import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Skeleton, Button, LayerRow } from '../src';
const meta={title:'Основы/Skeleton',component:Skeleton,tags:['autodocs'],args:{width:240,height:20}} satisfies Meta<typeof Skeleton>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const Circle:Story={args:{width:40,height:40,circle:true}};
