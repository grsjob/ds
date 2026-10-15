import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Text, Button, LayerRow } from '../src';
const meta={title:'Основы/Text',component:Text,tags:['autodocs'],args:{children:'Единая цифровая среда',size:14,weight:'regular'}} satisfies Meta<typeof Text>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const Semibold:Story={args:{weight:'semibold'}};
export const Muted:Story={args:{muted:true}};
