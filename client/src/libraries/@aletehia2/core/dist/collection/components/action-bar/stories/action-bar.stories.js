import { ordererArgs } from "./action-bar.types";
import { actionBarArgTypes } from "./action-bar.argtypes";
import { getAttributesFromArgs } from "../../../utils/storybook/index";
import { slotContent, slotContentButtons, slotContentNoButtons, slotContentWithDividers } from "./defaultSlotContent";
const defaultArgs = {
    ...ordererArgs,
    defaultSlot: slotContent,
};
// Función para generar atributos de accesibilidad
const getAccessibilityAttributes = (args) => ({
    'aria-describedby': args['aria-describedby'],
    'aria-label': args['aria-label'],
});
const meta = {
    title: 'Componentes/ActionBar',
    component: 'ath-action-bar',
    args: { ...defaultArgs },
    argTypes: actionBarArgTypes,
    parameters: {
        storyClass: 'flex-col w-full',
        componentSubtitle: 'Action-bar es un componente que agrupa un conjunto de acciones relacionadas en una disposición horizontal.',
    },
    tags: ['autodocs'],
};
export default meta;
export const Playground = {
    render: (args) => {
        const accessibilityAttrs = getAccessibilityAttributes(args);
        const attributes = getAttributesFromArgs({
            ...args,
            ...accessibilityAttrs,
        }, ['defaultSlot']);
        return `
        <div class="story__item">
          <ath-action-bar ${attributes}>
              ${args.defaultSlot}
          </ath-action-bar>
        </div>`;
    },
    args: {
        ...defaultArgs,
        defaultSlot: slotContent,
    },
    tags: ['!autodocs'],
};
export const Alignment = {
    render: (args) => {
        const alignments = ['left', 'center', 'right', 'justify'];
        const accessibilityAttrs = getAccessibilityAttributes(args);
        const attributes = getAttributesFromArgs({
            ...args,
            ...accessibilityAttrs,
        }, ['defaultSlot']);
        return alignments
            .map(alignment => `
          <div class="story__item">
            <div class="story__item__label">Alignment: ${alignment}</div>
            <ath-action-bar ${attributes} alignment="${alignment}">
                ${args.defaultSlot}
            </ath-action-bar>
          </div>
        `)
            .join('');
    },
    args: {
        ...defaultArgs,
    },
    parameters: {
        controls: {
            exclude: ['alignment'],
        },
    },
    tags: ['autodocs'],
};
export const Size = {
    render: (args) => {
        const sizes = ['sm', 'md', 'lg'];
        const accessibilityAttrs = getAccessibilityAttributes(args);
        const attributes = getAttributesFromArgs({
            ...args,
            ...accessibilityAttrs,
        }, ['defaultSlot']);
        return sizes
            .map(size => `
          <div class="story__item">
            <div class="story__item__label">Size: ${size}</div>
            <ath-action-bar  ${attributes} size="${size}">
                ${args.defaultSlot}
            </ath-action-bar>
         </div>
        `)
            .join('');
    },
    args: {
        ...defaultArgs,
    },
    parameters: {
        controls: {
            exclude: ['size'],
        },
    },
    tags: ['autodocs'],
};
export const ConDividers = {
    render: (args) => {
        const accessibilityAttrs = getAccessibilityAttributes(args);
        const attributes = getAttributesFromArgs({
            ...args,
            ...accessibilityAttrs,
        }, ['defaultSlot']);
        return `
        <div class="story__item">
          <ath-action-bar ${attributes}>
              ${args.defaultSlot}
          </ath-action-bar>
        </div>`;
    },
    args: {
        ...defaultArgs,
        defaultSlot: slotContentWithDividers,
    },
    tags: ['autodocs'],
};
export const ComponentesBoton = {
    name: 'Integrando componentes tipo botón',
    render: (args) => {
        const accessibilityAttrs = getAccessibilityAttributes(args);
        const attributes = getAttributesFromArgs({
            ...args,
            ...accessibilityAttrs,
        }, ['defaultSlot']);
        return `
        <div class="story__item">
          <ath-action-bar ${attributes}>
              ${args.defaultSlot}
        </div>`;
    },
    args: {
        ...defaultArgs,
        defaultSlot: slotContentButtons,
    },
    tags: ['autodocs'],
};
export const OtrosComponentes = {
    name: 'Otros componentes admitidos',
    render: (args) => {
        const accessibilityAttrs = getAccessibilityAttributes(args);
        const attributes = getAttributesFromArgs({
            ...args,
            ...accessibilityAttrs,
        }, ['defaultSlot']);
        return `
        <div class="story__item">
          <ath-action-bar ${attributes}>
              ${args.defaultSlot}
          </ath-action-bar>
        </div>`;
    },
    args: {
        ...defaultArgs,
        defaultSlot: slotContentNoButtons,
    },
    tags: ['autodocs'],
};
//# sourceMappingURL=action-bar.stories.js.map
