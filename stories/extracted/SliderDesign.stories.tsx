import type { Meta, StoryObj } from '@storybook/react-vite';
import { SliderDesign, variants } from '../../src/figma/SliderDesign';
const meta={title:"Из макета/Slider/var · 227:1969",component:SliderDesign,tags:["autodocs"],args:{variant:"227:1970",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из Slider/var. 3 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof SliderDesign>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
