import type { Meta, StoryObj } from '@storybook/react-vite';
import { HoverTestDesign227_67632, variants } from '../../src/figma/HoverTestDesign227_67632';
const meta={title:"Из макета/Hover test · 227:67632",component:HoverTestDesign227_67632,tags:["autodocs"],args:{variant:"227:67633",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из Hover test. 2 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof HoverTestDesign227_67632>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
