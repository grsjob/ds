import type { Meta, StoryObj } from '@storybook/react-vite';
import { InternalOnlyCanvasDesign0_2, variants } from '../../src/figma/InternalOnlyCanvasDesign0_2';
const meta={title:"Из макета/Internal Only Canvas · 0:2",component:InternalOnlyCanvasDesign0_2,tags:["autodocs"],args:{variant:"227:2100",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из Internal Only Canvas. 25 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof InternalOnlyCanvasDesign0_2>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
