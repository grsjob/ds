# Покрытие дизайна

Все **93 исходные группы и 8 287 вариантов** дополнительно извлечены как самостоятельные TSX-семейства с CSS Modules в `src/figma/`. Подробности: [extracted-tsx.md](extracted-tsx.md).

Таблица ниже описывает компоненты с **прикладным поведением** из `src/components/`. Её ограничения не означают отсутствия исходного визуального варианта в TSX. Например, кастомный вид select полностью извлечён в SelectDesign, а поиск и выбор данных требуют отдельной логики приложения. Logo теперь использует исходный LogoDesign вместо текстовой заглушки.


Источник — `ецс.fig`, 64 009 узлов, 8 287 SYMBOL, 93 родительские группы с учётом копий библиотек. Нельзя считать 8 287 вариантов отдельными готовыми React-компонентами.

| Figma | React | Покрытие |
|---|---|---|
| Button/var | Button | 6 видов, 4 размера, CSS hover/press/focus, active, disabled, loading, skeleton, слоты иконок. Отдельные библиотечные расхождения требуют сверки |
| Primitives/text, Text | Text | Размер, обычный/полужирный, muted. SB Sans Text подключается отдельно |
| icon/set/base, filled, control | Icon | 304 уникальные комбинации имени/размера, родные векторные пути. Дубли объединены по имени/размеру, первая копия имеет приоритет |
| Lable S/L | Badge | 6 цветов, 2 размера, иконки слева/справа, disabled. Не все оттенки/состояния отдельных библиотечных копий перенесены |
| Chips | Chip | selected, hover, disabled, удаление, XS/S |
| Chekbox, radio, Switch | Checkbox, Radio, Switch | Выбор, частичный выбор, disabled, клавиатура, размеры S/L |
| Select/var | Input, Select, MultiSelect | Базовые ввод/выбор, white/gray, 4 размера, label, validation, readOnly, disabled, skeleton. Smart-select с поиском, токенами и custom dropdown отсутствует |
| Select data, Data picker_data | DatePicker | Нативный календарь. Полное соответствие кастомному календарю и диапазонам дат не реализовано |
| Select time | TimePicker | Нативное время, validation, disabled. Кастомный popup не реализован |
| Text Area/comm, chat | TextArea, ChatComposer | Ввод, счётчик, вложения, отправка, disabled. Rich text, scroll-варианты и весь набор редактора отсутствуют |
| Avatar | Avatar | Фото/инициалы, editor, online. Figma-вариант mess нормализован в online |
| mess, user message | Message | Автор, время, ответ, вложения, editor/guest. Вся последовательность пузырей чата не воспроизводится автоматически |
| attached file | FileAttachment | uploading/ready/error, прогресс, удаление |
| Tab | Tabs | Выбранная/обычная/disabled, hover, размеры, панели, клавиатура. Отдельные версии вкладок нормализованы |
| Breadcrumb | Breadcrumbs | Ссылки, текущая страница, hover/focus |
| tooltip | Tooltip | white/dark, hover/focus. Позиционирование только сверху |
| droplist, Menu item | MenuItem, Select | Базовая строка, описание, selected, disabled, skeleton. Все 136 комбинаций droplist не перенесены в отдельное popup-menu |
| Slot priority/base/headline | TableSlot, Table | Базовые ячейки и приоритеты. Древовидная таблица, сортировка, группировка и все слот-комбинации не реализованы |
| Alert_box | Alert | 4 семантики, 3 расположения; градиенты реконструированы |
| Spinner, loading | Spinner | Непрерывная загрузка. Фиксированные кадры прогресса доступны только в справочнике |
| Scale | Progress | Значение 0–100, цвета, 2 толщины; бизнес-шкалы не реализованы отдельно |
| Slider | Slider | Нативный range, min/max/step, disabled |
| pin | MapPin | Цвет, selected, disabled. CSS-реконструкция; все виды general/segment не повторены |
| Card object_ecs 2 | ObjectCard | Нормализованные green/red/choice/accept/rejected, hover/press, selected, loading. Компоновка зависит от данных, не все фиксированные высоты исходника сохранены |
| Card_segment | SegmentCard | 4 вида, 5 состояний, старое значение, редактирование, сворачивание, loading. Некоторые исходные комбинации объединены |
| Card access | AccessCard | Обычный/active, hover, loading. Прикладная логика прав задаётся приложением |
| list_cast/layer | LayerRow | 7 видов, hover, loading. Размеры зависят от контента |
| info block | Disclosure | Раскрытие и скрытие, клавиатура; декоративная группировка нормализована |
| widget_state | StatusWidget | positive/negative/loading |
| setting_box | SettingsBox | cs/analytics, changed/default, действия |
| AI Agent, Agent | Agent | Только статический триггер. Исходные анимации не перенесены |
| Logo | Logo / LogoDesign | Используется исходная геометрия LogoDesign; все 127 вариантов доступны в TSX |
| Scroll | Нативный scrollbar | Кроссплатформенное соответствие макету не гарантируется |
| Тестовые и исторические группы | Справочник Figma | Не превращены в отдельные рабочие компоненты |

## Справочник Figma

Для каждого исходного SYMBOL сохранены имя, ID, размеры и ключи вариантов. `src/generated/manifest.json` — полный индекс; `public/reference/` — компактные деревья по группам. Справочник умеет показывать SVG-реконструкцию формы, текста, путей, вложенности и простого градиента.

Это средство аудита и поиска пропущенных состояний. Оно **не является** точным рендерером Figma: instance overrides, маски, raster/image fill, сложные эффекты, rich text и text wrapping обрабатываются неполно или не обрабатываются. Градиенты приблизительны. Конечную визуальную приёмку следует проводить по оригиналу в Figma после подключения шрифта.

## Состояния, добавленные при реализации

Клавиатурный focus, поведение disabled, семантика aria, управление вкладками, Ctrl/Cmd+Enter, проверка пустого сообщения и reduced motion добавлены как инженерные правила. Они не были извлечены как готовая логика из дизайна.

Пакет подготовлен как проверяемая первая версия системы; полное перенесение всех сложных контролов и прикладных состояний один к одному остаётся отдельной работой.
