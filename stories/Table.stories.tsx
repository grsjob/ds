import { Table, Badge } from '../src';
import type { Meta, StoryObj } from '@storybook/react-vite';
const rows=[{id:'1',name:'Офис 0342',city:'Москва',status:'Согласовано'},{id:'2',name:'Офис 0128',city:'Санкт-Петербург',status:'Ожидает'}];
const args={caption:'Офисы',rows,rowKey:(row:typeof rows[number])=>row.id,columns:[{key:'name',header:'Название',render:(r:typeof rows[number])=>r.name},{key:'city',header:'Город',render:(r:typeof rows[number])=>r.city},{key:'status',header:'Статус',render:(r:typeof rows[number])=><Badge tone={r.status==='Ожидает'?'orange':'green'}>{r.status}</Badge>}]};
const meta={title:'Компоненты/Table',component:Table<typeof rows[number]>,args,tags:['autodocs']} satisfies Meta<typeof Table<typeof rows[number]>>;
export default meta;type Story=StoryObj<typeof meta>;
export const Default:Story={};export const Empty:Story={args:{rows:[]}};export const Loading:Story={args:{loading:true}};
