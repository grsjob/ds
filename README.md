# ЕЦС Design System

React + TypeScript + CSS Modules, Storybook 10. Источник: `../ецс.fig`.

**Все 93 исходные группы и 8 287 варианта извлечены в TSX и CSS Modules в `src/figma/`.** В Storybook откройте раздел **Из макета**. Повторные библиотечные копии сохранены отдельно.

```sh
cd /Users/rvgaltsev/ds/design-system
npm run storybook
```

Открыть http://localhost:6006. Для новой установки предварительно выполните `npm install`.

```sh
npm test                 # Все варианты + проверки поведения
npm run build            # Обе библиотеки, стили и типы → dist/
npm run build:figma       # Только прямое извлечение → dist/figma/
npm run build:storybook  # Статический каталог → storybook-static/
npm run dev              # Демонстрационный экран → localhost:5173
npm run extract:tsx -- ../ецс.fig  # Повторная генерация TSX
```

```tsx
import { ButtonDesign } from '@ecs/design-system/figma/ButtonDesign';
import '@ecs/design-system/figma/styles.css';

<ButtonDesign variant="227:719" text={{ Button: 'Открыть' }} onClick={openOffice} />
```

Для прямой работы с исходниками: `import { ButtonDesign } from './src/figma/ButtonDesign'`.

- [TSX из макета: API и применение](docs/extracted-tsx.md)
- [Компоненты с готовым поведением](docs/usage.md)
- [Покрытие и ограничения](docs/coverage.md)
- [Инвентаризация Figma](docs/figma-inventory.md)
- [Проверки](docs/validation.md)

Извлечённые компоненты содержат обычную разметку React и inline SVG векторных слоёв. Тексты заменяются через text, варианты — через variant/variantProps. Это фиксированная геометрия макета; прикладная логика сложных контролов задаётся отдельно. Компоненты с готовым поведением доступны из основного экспорта пакета, их исходники — в `src/components/`.

Основной шрифт Figma — SB Sans Text. Он не вложен в `.fig`; подключите лицензированный файл через `@font-face`. Без него используется Arial. Исходный `.fig` не меняется.
