import { getAttributesFromArgs } from "../../../utils/storybook/index";
import { menuVerticalItemActionArgTypes } from "./menu-vertical.argtypes";
import { orderedArgs } from "./menu-vertical-item-action.types";
const defaultArgs = {
    ...orderedArgs,
};
const meta = {
    title: 'Componentes/Menu Vertical/Menu Vertical Item/Action',
    component: 'ath-menu-vertical-item-action',
    parameters: {
        componentSubtitle: 'Componente interactivo anidable que permite a los usuarios desplegar/contraer sus items hijos (en caso de que tenga anidados otros items) o ejecutar una acción (en caso de que no tenga items anidados)',
        actions: { handles: ['athSelected'] },
    },
    argTypes: menuVerticalItemActionArgTypes,
    args: { ...defaultArgs },
};
export default meta;
export const Playground = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
    <ath-menu-vertical>
      <ath-menu-vertical-item-action ${attributes}>
      </ath-menu-vertical-item-action>
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        text: 'Action',
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
      <ath-menu-vertical-item-action ${attributes}>
      </ath-menu-vertical-item-action>
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        text: 'Action',
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
      <ath-menu-vertical-item-action ${attributes}>
      </ath-menu-vertical-item-action>
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        icon: 'home_estrecha',
        text: 'Action',
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
      <ath-menu-vertical-item-action ${attributes}>
      </ath-menu-vertical-item-action>
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        icon: 'home_estrecha',
        text: 'Nivel 1 (action)',
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
        <ath-menu-vertical-item-action ${attributes}>
        </ath-menu-vertical-item-action>
      </ath-menu-vertical-item-action>
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        icon: 'home_estrecha',
        text: 'Nivel 2 (action)',
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
        <ath-menu-vertical-item-action text="Nivel 2 (action)" open>
          <ath-menu-vertical-item-action ${attributes}>
          </ath-menu-vertical-item-action>
        </ath-menu-vertical-item-action>
      </ath-menu-vertical-item-action>
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        icon: 'home_estrecha',
        text: 'Nivel 3 (action)',
    },
    parameters: {
        storyClass: 'flex-col',
        controls: {
            exclude: ['icon'],
        },
    },
};
export const Open = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
    <ath-menu-vertical>
      <ath-menu-vertical-item-action open  ${attributes}>
        <ath-menu-vertical-item-action text="Action">
        </ath-menu-vertical-item-action>
      </ath-menu-vertical-item-action>
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        icon: 'home_estrecha',
        text: 'Action (open=true)',
    },
    parameters: {
        storyClass: 'flex-col',
    },
};
export const Selected = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
    <ath-menu-vertical>
      <ath-menu-vertical-item-action ${attributes}>
      </ath-menu-vertical-item-action>
    </ath-menu-vertical>`;
    },
    args: {
        ...defaultArgs,
        text: 'Action',
        selected: 'true',
    },
    parameters: {
        storyClass: 'flex-col',
        controls: {
            exclude: ['selected'],
        },
    },
};
//# sourceMappingURL=menu-vertical-item-action.stories.js.map
