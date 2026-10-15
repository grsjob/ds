import type { Meta, StoryObj } from '@storybook/react-vite';
import { AgentDesign, variants } from '../../src/figma/AgentDesign';
const meta={title:"Из макета/AI Agent · 227:2333",component:AgentDesign,tags:["autodocs"],args:{variant:"227:2334",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из AI Agent. 9 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof AgentDesign>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
const stateSamples=[{"id":"227:2334","label":"Stage 1"},{"id":"227:2374","label":"Stage 2"}] as const;
export const States:Story={render:args=><div style={{display:"flex",flexWrap:"wrap",gap:24,alignItems:"flex-start"}}>{stateSamples.map(item=><div key={item.id}><p style={{fontSize:12,color:"#8f8b9a"}}>{item.label}</p><AgentDesign {...args} variant={item.id} variantProps={undefined} interactive={false}/></div>)}</div>};
