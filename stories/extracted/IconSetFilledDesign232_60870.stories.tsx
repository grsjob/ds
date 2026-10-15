import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconSetFilledDesign232_60870, variants } from '../../src/figma/IconSetFilledDesign232_60870';
const meta={title:"Из макета/icon/set/filled · 232:60870",component:IconSetFilledDesign232_60870,tags:["autodocs"],args:{variant:"232:60871",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из icon/set/filled. 18 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof IconSetFilledDesign232_60870>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
