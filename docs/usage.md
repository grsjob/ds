# API и правила использования

## Общие правила

Все компоненты используют переменные `--ecs-*`, заданные в `src/styles/tokens.css`. Для темизации переопределяйте их на контейнере. Все стили компонентов находятся в CSS Modules. Inline style применяется только для динамических размеров, геометрии SVG и ширины прогресса.

Размеры: XS 26 px, S 32 px, M 40 px, L 44 px. Используйте M для форм и S для плотных карточек и таблиц. Фактические размеры и альтернативные библиотечные варианты доступны в справочнике Figma.

Поля и кнопки передают стандартные DOM props, className, style и ref. Внешний className добавляется к базовым стилям. Формовые label, hint и message связываются с контролом автоматически. Без видимой подписи передайте aria-label. Кнопка с одной иконкой всегда требует aria-label.

Контролируемые поля: value + onChange, checked + onChange. Для начального значения используйте defaultValue/defaultChecked. Не переключайте режим управления после монтирования. Tabs, Disclosure и MultiSelect также поддерживают собственное состояние и onValueChange/onOpenChange.

## Кнопки и состояния

```tsx
<Button variant="primary" size="s" loading={saving} onClick={save}>
  Согласовать
</Button>
<Button variant="icon" aria-label="Закрыть" onClick={close}>
  <Icon name="close-16" />
</Button>
```

variant: primary, secondary, tertiary, text, icon, iconFill. startIcon и endIcon принимают ReactNode. disabled, loading и skeleton блокируют активацию. loading показывает спиннер, сохраняет текст и объявляет aria-busy. Для кнопки отправки формы задайте type="submit"; по умолчанию type="button".

active — длительно выбранное действие. Если кнопка переключает режим, задайте также aria-pressed. visualState предназначен для фиксации hover/pressed/focused/active в каталоге, он не заменяет реальное управление состоянием.

Focus ring добавлен для клавиатурной навигации, даже если отдельный контрол не имеет focus-варианта в исходнике. Уважена настройка prefers-reduced-motion.

## Поля

```tsx
<Input label="Название офиса" required value={name}
  onChange={e => setName(e.target.value)} validation="error"
  hint="Официальное название" message="Укажите название" />
```

validation: none/warning/error/success. Только error устанавливает aria-invalid. Серую подложку включает surface="gray". readOnly оставляет поле доступным для фокуса и копирования; disabled выключает взаимодействие и отправку значения нативной формой. skeleton заменяет поле заглушкой на время загрузки.

TextArea поддерживает maxLength и showCount. Input поддерживает все нативные type, min/max, pattern, autoComplete. DatePicker и TimePicker — обёртки type=date/time. Передавайте дату в формате YYYY-MM-DD, время HH:mm. Задать локальный вид popup браузера средствами CSS Modules невозможно.

Select принимает options: {value,label,disabled}[], placeholder, required. Single-select использует клавиатурное поведение платформы. MultiSelect — fieldset из чекбоксов с массивом value/defaultValue и onValueChange; это не smart-select с поиском.

Checkbox: indeterminate для частичного выбора, checked для значения. Radio группируется по name. Switch — нативный checkbox с role=switch; не используйте его для отправки разового действия. Slider принимает min/max/step/value и onChange.

## Навигация и данные

Tabs: items[{value,label,content,disabled,icon}], label для группы. Стрелки вправо/влево, Home/End перемещают фокус и выбирают вкладку; disabled пропускается. Все панели остаются смонтированными, скрытые имеют hidden. value/defaultValue должен указывать на доступную вкладку.

Breadcrumbs: последняя запись — текущая страница с aria-current. Остальные записи должны иметь href. Disclosure: title, open/defaultOpen, onOpenChange; hidden содержимое сохраняет локальное состояние.

Tooltip открывается при hover и фокусе. Он содержит только пояснение, без интерактивных элементов. Не помещайте Tooltip внутрь другого интерактивного контрола. Его обёртка сама доступна с клавиатуры.

Table<T>: columns[{key,header,render,align}], rows, rowKey, caption. caption обязателен. loading включает заглушки строк, empty — сообщение пустого списка. Таблица прокручивается в узком контейнере. Сортировка, виртуализация и серверная пагинация остаются ответственностью приложения.

MenuItem — обычная кнопка выбора в списке. У неё нет role=menuitem: полноценное ARIA-menu потребовало бы отдельного управления стрелками. TableSlot — визуальный слот данных с priority=0/1/2/3.

## Обратная связь

Alert: severity=info/success/warning/error; error использует role=alert, остальные — status. location=push добавляет тень, но не создаёт портал и не управляет автоисчезновением. onClose и action выполняет приложение.

Badge — неинтерактивная метка; Chip — кнопка фильтра с aria-pressed. onRemove добавляет отдельную кнопку удаления. Spinner и Skeleton объявляют загрузку, но не меняют данные приложения.

Progress ограничивает value диапазоном 0–100 и объявляет его через progressbar. FileAttachment принимает state=uploading/ready/error, progress и onRemove; загрузку на сервер компонент не выполняет.

MapPin — кнопка, title задаётся через label; при наличии карты позиционирование и географические координаты задаёт приложение.

## Компоненты ЕЦС

ObjectCard: title/subtitle, status=green/red/choice/accept/rejected, statusLabel, history[{label,value}], selected/onSelect, onAction/actionLabel, rejectionReason, loading. Вложенные действия — отдельные кнопки, вся карточка не превращается в кнопку. Текст статуса передавайте явно: бизнес-смысл цветов зависит от процесса согласования.

SegmentCard: view=segment/general/deviation/additional; state=editor/changed/viewing/different/alert. rows может содержать previousValue, он отображается перечёркнутым. onEdit отображается только в редактируемых состояниях. collapsible/defaultOpen используются для дополнительных параметров. API нормализует орфографические ошибки Figma: deviаton → deviation, sceleton → loading.

AccessCard: active переключает визуальное представление доступа, members — список аватаров, onAction запускает обработку в приложении. Наличие active не предоставляет фактические права.

LayerRow: view=value/select/switch/switchSelect/switchIcon/radio/opacity. Для контролируемого изменения передавайте onValueChange/onCheckedChange/onOpacityChange. В radio задавайте общий name. SettingsBox: mode=cs/analytics, changed, onReset/onApply. Кнопка применения включена только при changed.

Message: author, owner=editor/guest, time, reply, attachments, onReply. time — строка для отображения; приложение отвечает за часовой пояс. ChatComposer: onSend(message,files), sending, disabled, maxLength. Ctrl+Enter / Cmd+Enter отправляет, Enter добавляет строку. Пустое сообщение без файлов не отправляется. После onSend черновик очищается; приложение хранит отправку, ошибки и повторные попытки. Вложения только выбираются локально, не загружаются автоматически.

Agent — триггер открытия помощника, а не реализация AI или исходной покадровой анимации.
