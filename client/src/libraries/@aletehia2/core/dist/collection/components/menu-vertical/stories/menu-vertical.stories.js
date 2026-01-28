import { getAttributesFromArgs } from "../../../utils/storybook/index";
import { menuVerticalArgTypes } from "./menu-vertical.argtypes";
import { orderedArgs } from "./menu-vertical.types";
import { withActions } from "@storybook/addon-actions/decorator";
import { itemLevels, itemsWithOpen, itemsWithSelected, sampleItems } from "./data-source";
const defaultArgs = {
    ...orderedArgs,
};
const controlsEvents = ['athSelected'];
const meta = {
    title: 'Componentes/Menu Vertical',
    component: 'ath-menu-vertical',
    parameters: {
        componentSubtitle: 'El menu vertical es un componente de navegación que organiza el acceso a secciones clave de una interfaz de forma jerárquica, con una disposición vertical de los items que lo componen.',
        actions: { handles: ['athSelected'] },
    },
    argTypes: menuVerticalArgTypes,
    args: { ...defaultArgs },
    decorators: [withActions],
};
export default meta;
export const Playground = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, [...controlsEvents, 'defaultSlot']);
        return `
    <ath-menu-vertical ${attributes}>
      ${args.defaultSlot}
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        defaultSlot: sampleItems,
    },
    tags: ['!autodocs'],
    parameters: {
        storyClass: 'flex-col h250',
    },
};
export const Appearance = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, [...controlsEvents, 'appearance', 'defaultSlot']);
        const appearances = ['primary', 'secondary'];
        const html = `
        ${appearances
            .map(appearance => `
              <div class="story__item">
            ${appearance
            ? `
                  <div class="story__item__label w300">Appearance: ${appearance}</div>
                  <ath-menu-vertical ${attributes} appearance=${appearance}>  
                    ${args.defaultSlot}
                  </ath-menu-vertical>
                `
            : ''}
            </div>`)
            .join('')}
          `;
        return html;
    },
    args: {
        ...defaultArgs,
        defaultSlot: sampleItems,
    },
    tags: [],
    parameters: {
        storyClass: 'flex-row w700 h250',
        controls: {
            exclude: ['appearance', 'defaultSlot'],
        },
    },
};
export const Niveles = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, [...controlsEvents, 'defaultSlot']);
        return `
    <ath-menu-vertical ${attributes}>
      ${args.defaultSlot}
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        defaultSlot: itemLevels,
    },
    parameters: {
        storyClass: 'flex-col w200 h250',
        controls: {
            exclude: ['defaultSlot'],
        },
    },
};
export const ConOpen = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, [...controlsEvents, 'defaultSlot']);
        return `
    <ath-menu-vertical ${attributes}>
      ${args.defaultSlot}
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        defaultSlot: itemsWithOpen,
    },
    parameters: {
        storyClass: 'flex-col w200 h250',
        controls: {
            exclude: ['defaultSlot'],
        },
    },
};
export const ConItemSelected = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, [...controlsEvents, 'defaultSlot']);
        return `
    <ath-menu-vertical ${attributes}>
      ${args.defaultSlot}
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        defaultSlot: itemsWithSelected,
    },
    parameters: {
        storyClass: 'flex-col w200 h250',
        controls: {
            exclude: ['defaultSlot'],
        },
    },
};
//# sourceMappingURL=menu-vertical.stories.js.map
