import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextDesign227_2, variants } from '../../src/figma/TextDesign227_2';
const meta={title:"Из макета/Text · 227:2",component:TextDesign227_2,tags:["autodocs"],args:{variant:"227:3",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из Text. 10 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof TextDesign227_2>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
