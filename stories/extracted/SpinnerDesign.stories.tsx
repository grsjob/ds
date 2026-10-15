import type { Meta, StoryObj } from '@storybook/react-vite';
import { SpinnerDesign, variants } from '../../src/figma/SpinnerDesign';
const meta={title:"Из макета/Spinner/var · 227:1706",component:SpinnerDesign,tags:["autodocs"],args:{variant:"227:1707",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из Spinner/var. 32 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof SpinnerDesign>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
const stateSamples=[{"id":"227:1731","label":"100"},{"id":"229:3195","label":"25"},{"id":"229:3207","label":"50"},{"id":"227:1707","label":"75"}] as const;
export const States:Story={render:args=><div style={{display:"flex",flexWrap:"wrap",gap:24,alignItems:"flex-start"}}>{stateSamples.map(item=><div key={item.id}><p style={{fontSize:12,color:"#8f8b9a"}}>{item.label}</p><SpinnerDesign {...args} variant={item.id} variantProps={undefined} interactive={false}/></div>)}</div>};
