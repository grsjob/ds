import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconSetBaseDesign227_910, variants } from '../../src/figma/IconSetBaseDesign227_910';
const meta={title:"Из макета/icon/set/base · 227:910",component:IconSetBaseDesign227_910,tags:["autodocs"],args:{variant:"227:911",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из icon/set/base. 419 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof IconSetBaseDesign227_910>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
