import type { Meta, StoryObj } from '@storybook/react-vite';
import { MonoLogoDesign, variants } from '../../src/figma/MonoLogoDesign';
const meta={title:"Из макета/Logo/var/mono/noname · 227:2032",component:MonoLogoDesign,tags:["autodocs"],args:{variant:"227:2033",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из Logo/var/mono/noname. 3 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof MonoLogoDesign>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
