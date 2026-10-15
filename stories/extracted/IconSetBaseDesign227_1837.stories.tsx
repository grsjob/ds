import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconSetBaseDesign227_1837, variants } from '../../src/figma/IconSetBaseDesign227_1837';
const meta={title:"Из макета/icon/set/base · 227:1837",component:IconSetBaseDesign227_1837,tags:["autodocs"],args:{variant:"227:1838",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из icon/set/base. 196 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof IconSetBaseDesign227_1837>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
