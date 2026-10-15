import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoadingVarDesign228_51707, variants } from '../../src/figma/LoadingVarDesign228_51707';
const meta={title:"Из макета/loading/var · 228:51707",component:LoadingVarDesign228_51707,tags:["autodocs"],args:{variant:"228:51708",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из loading/var. 8 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof LoadingVarDesign228_51707>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
const stateSamples=[{"id":"228:51709","label":"10%"},{"id":"228:51708","label":"75%"}] as const;
export const States:Story={render:args=><div style={{display:"flex",flexWrap:"wrap",gap:24,alignItems:"flex-start"}}>{stateSamples.map(item=><div key={item.id}><p style={{fontSize:12,color:"#8f8b9a"}}>{item.label}</p><LoadingVarDesign228_51707 {...args} variant={item.id} variantProps={undefined} interactive={false}/></div>)}</div>};
