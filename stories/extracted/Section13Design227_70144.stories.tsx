import type { Meta, StoryObj } from '@storybook/react-vite';
import { Section13Design227_70144, variants } from '../../src/figma/Section13Design227_70144';
const meta={title:"Из макета/Section 13 · 227:70144",component:Section13Design227_70144,tags:["autodocs"],args:{variant:"227:70580",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из Section 13. 2 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof Section13Design227_70144>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
