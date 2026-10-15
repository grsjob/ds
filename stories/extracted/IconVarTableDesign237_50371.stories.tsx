import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconVarTableDesign237_50371, variants } from '../../src/figma/IconVarTableDesign237_50371';
const meta={title:"Из макета/icon/var/table · 237:50371",component:IconVarTableDesign237_50371,tags:["autodocs"],args:{variant:"237:50372",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из icon/var/table. 6 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof IconVarTableDesign237_50371>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
