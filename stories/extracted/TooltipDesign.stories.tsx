import type { Meta, StoryObj } from '@storybook/react-vite';
import { TooltipDesign, variants } from '../../src/figma/TooltipDesign';
const meta={title:"Из макета/tooltip/var · 227:1287",component:TooltipDesign,tags:["autodocs"],args:{variant:"227:1288",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из tooltip/var. 4 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof TooltipDesign>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
