import type { Meta, StoryObj } from '@storybook/react-vite';
import { SlotHeadlineVarDesign227_1956, variants } from '../../src/figma/SlotHeadlineVarDesign227_1956';
const meta={title:"Из макета/Slot headline/var · 227:1956",component:SlotHeadlineVarDesign227_1956,tags:["autodocs"],args:{variant:"227:1957",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из Slot headline/var. 12 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof SlotHeadlineVarDesign227_1956>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
