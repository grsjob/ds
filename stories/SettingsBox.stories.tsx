import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { SettingsBox, Button, LayerRow } from '../src';
const meta={title:'ЕЦС/SettingsBox',component:SettingsBox,tags:['autodocs'],args:{title:'Слои карты',mode:'cs',children:<LayerRow label='Офисы' view='switch' checked/>,onReset:fn(),onApply:fn()}} satisfies Meta<typeof SettingsBox>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
export const Changed:Story={args:{changed:true}};
export const Analytics:Story={args:{mode:'analytics'}};
