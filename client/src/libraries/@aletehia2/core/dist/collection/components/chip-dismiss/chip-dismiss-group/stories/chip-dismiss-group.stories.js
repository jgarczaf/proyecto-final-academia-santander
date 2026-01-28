import { getAttributesFromArgs } from "../../../../utils/storybook/index";
import { withActions } from "@storybook/addon-actions/decorator";
import { ChipDismissSize } from "../../chip-dismiss.model";
const defaultArgs = {
    'disabled': undefined,
    'size': undefined,
    'width': undefined,
    'aria-label': undefined,
    'aria-labeledby': undefined,
};
const generateChips = count => {
    return Array.from({ length: count }, (_, i) => `<ath-chip-dismiss heading-text="Chip ${i + 1}"></ath-chip-dismiss>`).join('\n');
};
const meta = {
    title: 'Componentes/Chip Dismiss/Chip Dismiss Group',
    component: 'ath-chip-dismiss-group',
    tags: ['autodocs'],
    argTypes: {
        'disabled': {
            control: { type: 'boolean' },
            description: 'Indica si el estado por defecto de las chips es disabled',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        'size': {
            control: { type: 'inline-radio' },
            description: 'Indica el tamaño por defecto de las chips',
            options: ['sm', 'md'],
            table: {
                type: { summary: 'string' },
            },
        },
        'width': {
            control: { type: 'text' },
            description: 'Proporciona el estilo width al componente',
            table: {
                type: { summary: 'string' },
            },
        },
        // ACCESIBILIDAD
        'aria-label': {
            control: { type: 'text' },
            description: 'Proporciona la etiqueta accesible al componente',
            table: {
                type: { summary: 'string' },
                category: 'ACCESSIBILITY',
            },
        },
        'aria-labeledby': {
            control: { type: 'text' },
            description: 'Proporciona la referencia al elemento que aportará la etiqueta accesible',
            table: {
                type: { summary: 'string' },
                category: 'ACCESSIBILITY',
            },
        },
    },
    args: { ...defaultArgs },
    decorators: [withActions],
    parameters: {
        componentSubtitle: 'Componente contenedor para agrupaciones de chip dismiss',
    },
};
export default meta;
export const Playground = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
            <div class="story__item">
              <ath-chip-dismiss-group ${attributes}>
                ${generateChips(5)}
              </ath-chip-dismiss-group>
            </div>
                    `;
    },
    args: { ...defaultArgs },
    tags: ['!autodocs'],
    parameters: {
        storyClass: 'flex-col w600',
    },
};
export const Disabled = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
            <div class="story__item">
              <div class="story__item__label">disabled: ${args['disabled']}</div>
              <ath-chip-dismiss-group ${attributes}>
                ${generateChips(5)}
              </ath-chip-dismiss-group>
            </div>`;
    },
    args: { ...defaultArgs, disabled: true },
    parameters: {
        storyClass: 'flex-col w600',
    },
};
export const Sizes = {
    render: (args) => {
        const sizes = [ChipDismissSize.Small, ChipDismissSize.Medium];
        const attributes = getAttributesFromArgs(args);
        return sizes
            .map(size => `
                <div class="story__item">
                  <div class="story__item__label">Size: ${size}</div>
                  <ath-chip-dismiss-group ${attributes} size="${size}">
                    ${generateChips(5)}
                  </ath-chip-dismiss-group>
                </div>`)
            .join('');
    },
    args: { ...defaultArgs },
    parameters: {
        controls: {
            exclude: ['athDismiss', 'label-dismiss'],
            storyClass: 'flex-col w600',
        },
    },
};
export const Width = {
    render: (args) => {
        const widths = ['200px', '100%'];
        const attributes = getAttributesFromArgs(args);
        return widths
            .map(width => `
                <div class="story__item">
                  <div class="story__item__label">Width: ${width}</div>
                  <ath-chip-dismiss-group ${attributes} width="${width}">
                    ${generateChips(5)}
                  </ath-chip-dismiss-group>
                </div>`)
            .join('');
    },
    args: { ...defaultArgs },
    parameters: {
        controls: {
            exclude: ['width'],
            storyClass: 'flex-col w600',
        },
    },
};
//# sourceMappingURL=chip-dismiss-group.stories.js.map
