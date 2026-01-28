import { withActions } from "@storybook/addon-actions/decorator";
import { getAttributesFromArgs, iconNamesList } from "../../../utils/storybook/index";
import { ordererArgs } from "./menu-lateral-item.types";
const defaultArgs = {
    ...ordererArgs,
    icon: 'placeholder',
};
const meta = {
    title: 'Componentes/Menu Lateral/Menu Lateral Item/Action',
    component: 'ath-menu-button-item',
    parameters: {
        componentSubtitle: 'El componente ath-menu-button item corresponde a cada item interactivo dentro del ath-menu-lateral.',
    },
    tags: ['autodocs'],
    argTypes: {
        'badge-label': {
            control: { type: 'text' },
            description: 'Texto accesible del badge',
            table: {
                type: { summary: 'string' },
            },
        },
        'badge-max': {
            control: { type: 'number' },
            description: 'Indica el valor máximo que puede tener el contenido del badge',
            table: {
                type: { summary: 'number' },
            },
        },
        'badge-value': {
            control: { type: 'number' },
            description: 'Indica valor del contenido del badge',
            table: {
                type: { summary: 'number' },
            },
        },
        'disabled': {
            control: 'boolean',
            description: 'Indica si el item está deshabilitado o no',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        'icon': {
            control: { type: 'select' },
            options: iconNamesList,
            description: 'Indica el nombre del icono a incluir en el botón, que debe existir en la Galería de iconos',
            table: {
                type: { summary: 'string' },
            },
        },
        'selected': {
            control: 'boolean',
            description: 'Indica si el item está seleccionado o no',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        'tooltip-text': {
            control: { type: 'text' },
            description: 'Indica el texto que contiene el tooltip del item',
            table: { type: { summary: 'string' } },
        },
    },
    decorators: [withActions],
    args: { ...defaultArgs },
};
export default meta;
export const Playground = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
      <div class="story__item">
        <ath-menu-lateral aria-label="Menu lateral">
          <ath-menu-lateral-item-action
        ${attributes}
      ></ath-menu-lateral-item-action>
        </ath-menu-button>
      </div>
    `;
    },
    args: {
        ...defaultArgs,
    },
    tags: ['!autodocs'],
    parameters: {
        controls: {
            exclude: ['href', 'rel', 'target', 'external-label'],
        },
        storyClass: 'flex-col',
    },
};
export const ConBadge = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
      <div class="story__item">
        <ath-menu-lateral aria-label="Menu lateral">
          <ath-menu-lateral-item-action
        ${attributes}
      ></ath-menu-lateral-item-action>
        </ath-menu-button>
      </div>
    `;
    },
    args: {
        ...defaultArgs,
        'badge-label': '1 aviso',
        'badge-max': 10,
        'badge-value': 1,
    },
    parameters: {
        controls: {
            exclude: ['href', 'rel', 'target', 'external-label'],
        },
        storyClass: 'flex-col',
    },
};
export const Disabled = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
      <div class="story__item">
        <ath-menu-lateral aria-label="Menu lateral">
          <ath-menu-lateral-item-action
        ${attributes}
      ></ath-menu-lateral-item-action>
        </ath-menu-button>
      </div>
    `;
    },
    args: {
        ...defaultArgs,
        disabled: true,
    },
    parameters: {
        controls: {
            exclude: ['href', 'rel', 'target', 'external-label', 'selected'],
        },
        storyClass: 'flex-col',
    },
};
export const Selected = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
      <div class="story__item">
        <ath-menu-lateral aria-label="Menu lateral">
          <ath-menu-lateral-item-action
        ${attributes}
      ></ath-menu-lateral-item-action>
        </ath-menu-button>
      </div>
    `;
    },
    args: {
        ...defaultArgs,
        selected: true,
    },
    parameters: {
        controls: {
            exclude: ['href', 'rel', 'target', 'external-label', 'disabled'],
        },
        storyClass: 'flex-col',
    },
};
export const ConTooltip = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
      <div class="story__item">
        <ath-menu-lateral aria-label="Menu lateral">
          <ath-menu-lateral-item-action
        ${attributes}
      ></ath-menu-lateral-item-action>
        </ath-menu-button>
      </div>
    `;
    },
    args: {
        ...defaultArgs,
        'tooltip-text': 'tooltip',
    },
    parameters: {
        controls: {
            exclude: ['href', 'rel', 'target', 'external-label'],
        },
        storyClass: 'flex-col',
    },
};
//# sourceMappingURL=menu-lateral-item-action.stories.js.map
