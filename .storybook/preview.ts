import type { Preview } from '@storybook/react-vite';
import '../src/styles/tokens.css';
import './preview.css';
const preview: Preview = { parameters: { layout: 'padded', controls: { expanded: true }, a11y: { test: 'todo' }, options: { storySort: { order: ['Введение', 'Основы', 'Из макета', 'Компоненты', 'ЕЦС', 'Архив'] } }, backgrounds: { options: { white: {name:'Белый',value:'#ffffff'}, gray:{name:'Серый',value:'#f8f8f8'} } } }, initialGlobals: { backgrounds: {value:'white'} } };
export default preview;
