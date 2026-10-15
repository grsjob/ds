import type { Meta, StoryObj } from '@storybook/react-vite';
import { LayerRowDesign, variants } from '../../src/figma/LayerRowDesign';
const meta={title:"Из макета/list_cast/layer/var · 227:71935",component:LayerRowDesign,tags:["autodocs"],args:{variant:"227:71936",interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:"Прямой перенос TSX + CSS Modules из list_cast/layer/var. 20 вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение."}}}} satisfies Meta<typeof LayerRowDesign>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};
const stateSamples=[{"id":"227:71944","label":"off"},{"id":"227:71936","label":"on"}] as const;
export const States:Story={render:args=><div style={{display:"flex",flexWrap:"wrap",gap:24,alignItems:"flex-start"}}>{stateSamples.map(item=><div key={item.id}><p style={{fontSize:12,color:"#8f8b9a"}}>{item.label}</p><LayerRowDesign {...args} variant={item.id} variantProps={undefined} interactive={false}/></div>)}</div>};
