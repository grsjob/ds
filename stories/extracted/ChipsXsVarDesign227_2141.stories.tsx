import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChipsXsVarDesign227_2141, variants } from '../../src/figma/ChipsXsVarDesign227_2141';
const meta={title:"Из макета/Chips/xs/var · 227:2141",component:ChipsXsVarDesign227_2141,tags:["autodocs"],args:{variant:"227:2142",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из Chips/xs/var. 4 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof ChipsXsVarDesign227_2141>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
const stateSamples=[{"id":"227:2142","label":"off"},{"id":"227:2148","label":"on"}] as const;
export const States:Story={render:args=><div style={{display:"flex",flexWrap:"wrap",gap:24,alignItems:"flex-start"}}>{stateSamples.map(item=><div key={item.id}><p style={{fontSize:12,color:"#8f8b9a"}}>{item.label}</p><ChipsXsVarDesign227_2141 {...args} variant={item.id} variantProps={undefined} interactive={false}/></div>)}</div>};
