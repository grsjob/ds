import type { Meta, StoryObj } from '@storybook/react-vite';
import { TestTestDesign227_2108, variants } from '../../src/figma/TestTestDesign227_2108';
const meta={title:"Из макета/test test · 227:2108",component:TestTestDesign227_2108,tags:["autodocs"],args:{variant:"227:2109",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из test test. 2 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof TestTestDesign227_2108>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
