import { getAttributesFromArgs } from "../../../utils/storybook/index";
import { menuVerticalItemLinkArgTypes } from "./menu-vertical.argtypes";
import { orderedArgs } from "./menu-vertical-item-link.types";
const defaultArgs = {
    ...orderedArgs,
};
const meta = {
    title: 'Componentes/Menu Vertical/Menu Vertical Item/Link',
    component: 'ath-menu-vertical-item-action',
    parameters: {
        componentSubtitle: 'Componente interactivo para abrir una url',
        actions: { handles: ['athSelected'] },
    },
    argTypes: menuVerticalItemLinkArgTypes,
    args: { ...defaultArgs },
};
export default meta;
export const Playground = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
    <ath-menu-vertical>
      <ath-menu-vertical-item-link ${attributes}></ath-menu-vertical-item-link>
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        text: 'Link',
    },
    tags: ['!autodocs'],
    parameters: {
        storyClass: 'flex-col w200',
    },
};
export const Disabled = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
    <ath-menu-vertical>
      <ath-menu-vertical-item-link ${attributes}></ath-menu-vertical-item-link>
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        text: 'Link',
        disabled: true,
    },
    parameters: {
        storyClass: 'flex-col w200',
        controls: {
            exclude: ['disabled'],
        },
    },
};
export const Icon = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
    <ath-menu-vertical>
      <ath-menu-vertical-item-link ${attributes}>
      </ath-menu-vertical-item-link>
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        icon: 'home_estrecha',
        text: 'Link',
    },
    parameters: {
        storyClass: 'flex-col w200',
    },
};
export const Nivel1 = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
    <ath-menu-vertical>
      <ath-menu-vertical-item-link ${attributes}>
      </ath-menu-vertical-item-link>
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        text: 'Nivel 1 (link)',
    },
    parameters: {
        storyClass: 'flex-col',
    },
};
export const Nivel2 = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
    <ath-menu-vertical>
      <ath-menu-vertical-item-action text="Nivel 1 (action)" open>
        <ath-menu-vertical-item-link ${attributes}>
        </ath-menu-vertical-item-link>
      </ath-menu-vertical-item-action>
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        text: 'Nivel 2 (link)',
    },
    parameters: {
        storyClass: 'flex-col',
        controls: {
            exclude: ['icon'],
        },
    },
};
export const Nivel3 = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
    <ath-menu-vertical>
      <ath-menu-vertical-item-action text="Nivel 1 (action)">
        <ath-menu-vertical-item-action text="Nivel 2  (action)" open>
          <ath-menu-vertical-item-link ${attributes}>
          </ath-menu-vertical-item-link>
        </ath-menu-vertical-item-action>
      </ath-menu-vertical-item-action>
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        text: 'Nivel 3 (link)',
    },
    parameters: {
        storyClass: 'flex-col',
        controls: {
            exclude: ['icon'],
        },
    },
};
export const Selected = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
    <ath-menu-vertical>
        <ath-menu-vertical-item-link ${attributes}></ath-menu-vertical-item-link>
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        text: 'Título',
        selected: 'true',
    },
    parameters: {
        storyClass: 'flex-col w200',
    },
};
//# sourceMappingURL=menu-vertical-item-link.stories.js.map
