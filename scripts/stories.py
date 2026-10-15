from pathlib import Path
p=Path(__file__).resolve().parents[1]/'stories'
# Component, category, default args, variations. ReactNode values stay executable TSX.
items=[
('Badge','Основы',"{children:'Согласовано',tone:'green',size:'s'}", [('Tones',"render:()=> <div style={{display:'flex',gap:8}}>{(['gray','green','red','blue','orange','purple'] as const).map(tone=><Badge key={tone} tone={tone}>{tone}</Badge>)}</div>"),('Disabled',"args:{disabled:true}")]),
('Chip','Компоненты',"{children:'Розничный',selected:false,onClick:fn()}",[('Selected','args:{selected:true}'),('Disabled','args:{disabled:true}'),('Removable','args:{onRemove:fn()}')]),
('Avatar','Основы',"{name:'Иван Петров',size:32}",[('Online','args:{online:true}'),('Editor','args:{editor:true}')]),
('Icon','Основы',"{name:'close-16',size:24,label:'Закрыть'}",[]),
('Spinner','Основы',"{size:20,label:'Загрузка'}",[]),
('Skeleton','Основы',"{width:240,height:20}",[('Circle','args:{width:40,height:40,circle:true}')]),
('Text','Основы',"{children:'Единая цифровая среда',size:14,weight:'regular'}",[('Semibold',"args:{weight:'semibold'}"),('Muted','args:{muted:true}')]),
('Logo','Основы',"{system:'ЕЦС'}",[]),
('Divider','Основы',"{}",[]),
('Tooltip','Компоненты',"{children:<Button variant='secondary'>Наведи или сфокусируй</Button>,content:'Описание действия',tone:'dark'}",[('White',"args:{tone:'white'}")]),
('Breadcrumbs','Компоненты',"{items:[{label:'Главная',href:'#'},{label:'Офисы',href:'#'},{label:'Офис 0342'}]}",[]),
('Tabs','Компоненты',"{label:'Сегменты',items:[{value:'retail',label:'Розничный',content:'Параметры розничного сегмента'},{value:'business',label:'Корпоративный',content:'Параметры корпоративного сегмента'},{value:'closed',label:'Недоступный',content:'',disabled:true}]}",[('Small',"args:{size:'s'}")]),
('MenuItem','Компоненты',"{children:'Параметры офиса',description:'Сегменты и доступ',onClick:fn()}",[('Selected','args:{selected:true}'),('Disabled','args:{disabled:true}'),('Skeleton','args:{skeleton:true}')]),
('Disclosure','Компоненты',"{title:'Дополнительные параметры',children:'Содержимое раскрываемого блока'}",[('Expanded','args:{defaultOpen:true}')]),
('TableSlot','Компоненты',"{children:'Приоритет согласования',priority:1}",[('Critical','args:{priority:3}'),('Skeleton','args:{skeleton:true}')]),
('Alert','Компоненты',"{title:'Данные обновлены',children:'Изменения сохранены',severity:'success',location:'content'}",[('Error',"args:{severity:'error',title:'Не удалось сохранить'}"),('Warning',"args:{severity:'warning',title:'Проверьте данные'}"),('Info',"args:{severity:'info'}"),('Push',"args:{location:'push',onClose:fn()}")]),
('Progress','Компоненты',"{value:50,label:'Обработка данных',tone:'blue'}",[('Complete','args:{value:100,tone:"green"}')]),
('MapPin','Компоненты',"{label:'Офис 0342',tone:'green',onClick:fn()}",[('Selected','args:{selected:true}'),('Critical','args:{tone:"red"}'),('Disabled','args:{disabled:true}')]),
('FileAttachment','Компоненты',"{name:'Параметры офиса.xlsx',sizeLabel:'128 КБ',state:'ready',onRemove:fn()}",[('Uploading','args:{state:"uploading",progress:40}'),('Error','args:{state:"error"}')]),
('ObjectCard','ЕЦС',"{title:'Офис 0342',subtitle:'Москва, ул. Вавилова, 19',status:'green',statusLabel:'Согласовано',history:[{label:'Сегмент',value:'Розничный'},{label:'Обновлено',value:'15.10.2026'},{label:'Ответственный',value:'Иван Петров'}],onAction:fn(),onSelect:fn()}",[('Rejected',"args:{status:'rejected',statusLabel:'Не согласовано',rejectionReason:'Уточните параметры офиса'}"),('Selected','args:{selected:true}'),('Choice',"args:{status:'choice',statusLabel:'Выберите офис',history:[]}"),('Accept',"args:{status:'accept',history:[],actionLabel:'Подтвердить'}"),('Skeleton','args:{loading:true}')]),
('SegmentCard','ЕЦС',"{title:'Розничный сегмент',view:'segment',state:'editor',rows:[{label:'Площадь',value:'320 м²'},{label:'Рабочие места',value:'24'},{label:'Формат',value:'Полный'}],onEdit:fn()}",[('Changed',"args:{state:'changed',rows:[{label:'Площадь',value:'320 м²',previousValue:'280 м²'}]}"),('Viewing',"args:{state:'viewing'}"),('Different',"args:{state:'different'}"),('Alert',"args:{state:'alert'}"),('General',"args:{view:'general'}"),('Deviation',"args:{view:'deviation'}"),('Additional',"args:{view:'additional',collapsible:true}"),('Skeleton','args:{loading:true}')]),
('AccessCard','ЕЦС',"{title:'Доступ к офису',description:'Настройте доступ к параметрам',members:[{name:'Иван Петров'},{name:'Анна Соколова'}],onAction:fn()}",[('Active','args:{active:true}'),('Skeleton','args:{loading:true}')]),
('LayerRow','ЕЦС',"{label:'Офисы',view:'value',children:'24'}",[('Switch',"args:{view:'switch',checked:true,onCheckedChange:fn(),children:undefined}"),('Select',"args:{view:'select',value:'all',options:[{value:'all',label:'Все офисы'}],children:undefined}"),('Opacity',"args:{view:'opacity',opacity:50,onOpacityChange:fn(),children:undefined}"),('Skeleton','args:{loading:true}')]),
('SettingsBox','ЕЦС',"{title:'Слои карты',mode:'cs',children:<LayerRow label='Офисы' view='switch' checked/>,onReset:fn(),onApply:fn()}",[('Changed','args:{changed:true}'),('Analytics',"args:{mode:'analytics'}")]),
('StatusWidget','ЕЦС',"{positive:true,label:'Согласовано',value:'24 из 30',onAction:fn()}",[('Negative',"args:{positive:false,label:'Не согласовано',value:'6 из 30'}"),('Skeleton','args:{loading:true}')]),
('Message','ЕЦС',"{author:'Иван Петров',time:'10:42',owner:'guest',children:'Параметры офиса обновлены.',onReply:fn()}",[('Editor',"args:{owner:'editor'}"),('Reply',"args:{reply:'Уточните площадь помещения'}"),('WithFile',"args:{attachments:[{name:'Офис.pdf',sizeLabel:'240 КБ'}]}")]),
('ChatComposer','ЕЦС',"{onSend:fn(),placeholder:'Напишите сообщение'}",[('Disabled','args:{disabled:true}'),('Sending','args:{sending:true}')]),
('Agent','ЕЦС',"{label:'Помощник',onClick:fn(),onClose:fn()}",[('Active','args:{active:true}')])]
for name,category,args,variations in items:
 code="import type { Meta, StoryObj } from '@storybook/react-vite';\nimport { fn } from 'storybook/test';\nimport { "+', '.join(dict.fromkeys([name,'Button','LayerRow']))+" } from '../src';\n"
 code+=f"const meta={{title:'{category}/{name}',component:{name},tags:['autodocs'],args:{args}}} satisfies Meta<typeof {name}>;\nexport default meta;type Story=StoryObj<typeof meta>;\nexport const Default:Story={{}};\n"
 for title,body in variations:code+=f'export const {title}:Story={{{body}}};\n'
 (p/f'{name}.stories.tsx').write_text(code)
print(len(items),'component stories generated')
