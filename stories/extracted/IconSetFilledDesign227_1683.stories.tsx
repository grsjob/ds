import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconSetFilledDesign227_1683, variants } from '../../src/figma/IconSetFilledDesign227_1683';
const meta={title:"Из макета/icon/set/filled · 227:1683",component:IconSetFilledDesign227_1683,tags:["autodocs"],args:{variant:"227:1684",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из icon/set/filled. 21 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof IconSetFilledDesign227_1683>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
