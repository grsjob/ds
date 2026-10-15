import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Disclosure, Button, LayerRow } from '../src';
const meta={title:'Компоненты/Disclosure',component:Disclosure,tags:['autodocs'],args:{title:'Дополнительные параметры',children:'Содержимое раскрываемого блока'}} satisfies Meta<typeof Disclosure>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const Expanded:Story={args:{defaultOpen:true}};
