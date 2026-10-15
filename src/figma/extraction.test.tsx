import { describe,it,expect,vi } from 'vitest';
import { createElement, type ComponentType } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { render,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonDesign } from './ButtonDesign';
import { ChipDesign } from './ChipDesign';
import { ObjectCardDesign } from './ObjectCardDesign';
import catalog from './catalog.json';
const families=import.meta.glob<{variants:{id:string}[];[key:string]:unknown}>('./*/*.tsx');
describe('Прямое извлечение TSX',()=>{
 it('все 8287 вариантов рендерятся из TSX без дерева JSON',async()=>{
  let count=0;
  for(const entry of catalog){
   const mod=await families[`./${entry.component}/${entry.component}.tsx`]();
   const Component=mod[entry.component] as ComponentType<{variant:string;interactive:boolean}>;
   expect(typeof Component).toBe('function');
   expect(mod.variants.length).toBe(entry.variants);
   for(const variant of mod.variants){const html=renderToStaticMarkup(createElement(Component,{variant:variant.id,interactive:false}));expect(html).toContain(`data-figma-variant="${variant.id}"`);expect(html).toContain('data-layer=');count++;}
  }
  expect(count).toBe(8287);
 },120000);
 it('текст кнопки — заменяемый DOM-текст, обработчик приложения сохраняется',async()=>{
  const click=vi.fn();render(<ButtonDesign variantProps={{state:'primary',size:'M','Icon left':'off','icon right':'off',text:'on',action:'default'}} text={{Button:'Сохранить офис'}} onClick={click}/>);
  const b=screen.getByRole('button',{name:'Сохранить офис'});expect(b.querySelector('span[data-name="Button"]')).not.toBeNull();await userEvent.click(b);expect(click).toHaveBeenCalledOnce();
 });
 it('исходный disabled-вариант не активируется',async()=>{
  const click=vi.fn();render(<ButtonDesign variantProps={{state:'primary',size:'M','Icon left':'off','icon right':'off',text:'on',action:'disabled'}} text={{Button:'Сохранить'}} onClick={click}/>);const b=screen.getByRole('button');expect(b).toBeDisabled();await userEvent.click(b);expect(click).not.toHaveBeenCalled();
 });
 it('Chip воспроизводит реальные prototype swaps, потребитель получает onVariantChange',async()=>{
  const change=vi.fn();const {container}=render(<ChipDesign variant="227:1182" text={{Text:'Розничный'}} onVariantChange={change}/>);const root=container.firstElementChild as HTMLElement;
  await userEvent.hover(root);expect(root).toHaveAttribute('data-figma-variant','227:1185');await userEvent.click(root);expect(root).toHaveAttribute('data-figma-variant','227:1188');expect(change).toHaveBeenCalledWith('227:1188');
 });
 it('карточка содержит исходную структуру HTML и редактируемые слои',()=>{const {container}=render(<ObjectCardDesign variant="227:70776" interactive={false}/>);expect(container.querySelectorAll('[data-layer]').length).toBeGreaterThan(10);expect(container.querySelectorAll('span').length).toBeGreaterThan(10);expect(container).toHaveTextContent('УТНФ');expect(container).toHaveTextContent('ШВ2В');expect(container).toHaveTextContent('МВС');});
});
