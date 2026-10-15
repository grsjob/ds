import type { Meta, StoryObj } from '@storybook/react-vite';
import { UserMessageDesign227_1924, variants } from '../../src/figma/UserMessageDesign227_1924';
const meta={title:"Из макета/user message · 227:1924",component:UserMessageDesign227_1924,tags:["autodocs"],args:{variant:"227:1925",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из user message. 2 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof UserMessageDesign227_1924>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
