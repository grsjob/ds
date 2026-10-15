import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Breadcrumbs, Button, LayerRow } from '../src';
const meta={title:'Компоненты/Breadcrumbs',component:Breadcrumbs,tags:['autodocs'],args:{items:[{label:'Главная',href:'#'},{label:'Офисы',href:'#'},{label:'Офис 0342'}]}} satisfies Meta<typeof Breadcrumbs>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
