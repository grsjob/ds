import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollDesign227_1176, variants } from '../../src/figma/ScrollDesign227_1176';
const meta={title:"Из макета/Scroll · 227:1176",component:ScrollDesign227_1176,tags:["autodocs"],args:{variant:"227:1177",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из Scroll. 2 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof ScrollDesign227_1176>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
