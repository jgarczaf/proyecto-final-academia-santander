import { getAttributesFromArgs } from "../../../utils/storybook/index";
import { withActions } from "@storybook/addon-actions/decorator";
const booleanArgs = ['disabled', 'readonly', 'show-required'];
const defaultArgs = {
    'aria-label': undefined,
    'disabled': undefined,
    'feedback': undefined,
    'feedback-text': undefined,
    'label': undefined,
    'name': undefined,
    'readonly': undefined,
    'show-required': undefined,
    'tooltip-text': undefined,
    'required-aria-label': undefined,
    'athChecked': () => { },
};
const meta = {
    title: 'Componentes/Checkbox/Checkbox Group',
    component: 'ath-checkbox',
    argTypes: {
        'aria-label': {
            description: 'aria-label para checkbox group',
            table: {
                type: { summary: 'aria-label' },
                category: 'ACCESIBILITY',
            },
        },
        'defaultSlot': {
            control: 'text',
            description: 'Contenido del checkbox group, que debe ser uno o varios elementos <ath-checkbox>',
            table: { category: 'SLOTS', type: { summary: 'ath-checkbox' } },
        },
        'disabled': {
            control: 'boolean',
            description: 'Deshabilitado el elemento de checkbox',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        'feedback': {
            control: 'select',
            options: ['none', 'error'],
            description: 'Tipo feedback',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'none' },
            },
        },
        'feedback-text': {
            control: 'text',
            description: 'Indica el texto feedback para el checkbox',
            table: {
                type: { summary: 'string' },
            },
        },
        'helper-text': {
            control: 'text',
            description: 'Indica el texto de ayuda',
            table: {
                type: { summary: 'string' },
            },
        },
        'label': {
            control: 'text',
            description: 'Indica el título para el checkbox',
            table: {
                type: { summary: 'string' },
            },
        },
        'name': {
            control: 'text',
            description: 'Indica el nombre para el checkbox',
            table: {
                type: { summary: 'string' },
            },
        },
        'readonly': {
            control: 'boolean',
            description: 'Indica si el elemento Checkbox es solo lectura',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        'show-required': {
            control: 'boolean',
            description: 'Indica si se muestra el asterisco',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        'tooltip-text': {
            control: 'text',
            description: 'Indica el texto del tooltip',
            table: {
                type: { summary: 'string' },
            },
        },
        // ACCESSIBILITY
        'required-aria-label': {
            control: 'text',
            description: 'Indica el texto para indicar que el grupo es requerido',
            table: {
                type: { summary: 'string' },
                category: 'ACCESSIBILITY',
            },
        },
        // EVENTS
        'athChecked': {
            action: 'athChecked',
            description: 'Se emite al detectar un cambio en un checkbox',
            table: {
                type: { summary: 'EventEmitter<void>' },
                category: 'EVENTS',
            },
        },
    },
    args: { ...defaultArgs },
    parameters: {
        actions: { handles: ['athChecked'] },
    },
    decorators: [withActions],
};
export default meta;
const getHtmlCheckboxItems = (length = 4) => {
    const items = Array.from({ length }, (_, i) => i + 1);
    return items
        .map(index => `
        <ath-checkbox label="Label ${index}"></ath-checkbox>
      `)
        .join('');
};
export const Playground = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, { exclude: ['defaultSlot', 'athChecked'], boolean: booleanArgs });
        return `
      <div class="story__item">
        <ath-checkbox-group ${attributes}>
          ${args.defaultSlot}
        </ath-checkbox-group>
      </div>
    `;
    },
    args: {
        ...defaultArgs,
        'defaultSlot': getHtmlCheckboxItems(4),
        'label': 'Checkbox group',
        'show-required': true,
        'required-aria-label': 'required',
    },
    parameters: {
        controls: {
            exclude: [],
        },
        storyClass: 'flex-col w500',
    },
    tags: ['!autodocs'],
};
export const ConFeedback = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, { exclude: ['defaultSlot', 'athChecked'], boolean: booleanArgs });
        return `
    <div class="story__item">
      <div class="story__item__label">Con Feedback</div>
      <ath-checkbox-group ${attributes}>
        ${args.defaultSlot}
      </ath-checkbox-group>
    </div>
      `;
    },
    args: {
        ...defaultArgs,
        'defaultSlot': getHtmlCheckboxItems(4),
        'feedback': 'error',
        'feedback-text': 'Error feedback text',
        'label': 'Checkbox group',
    },
    parameters: {
        controls: {
            include: ['defaultSlot', 'feedback', 'feedback-text', 'label', 'helper-text', 'tooltip'],
        },
        storyClass: 'flex-col w500',
    },
};
export const ConHelperText = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, { exclude: ['defaultSlot', 'athChecked'], boolean: booleanArgs });
        return `
    <div class="story__item">
      <div class="story__item__label">Con Helper Text</div>
      <ath-checkbox-group ${attributes}>
        ${args.defaultSlot}
      </ath-checkbox-group>
    </div>
      `;
    },
    args: {
        ...defaultArgs,
        'defaultSlot': getHtmlCheckboxItems(4),
        'helper-text': 'Helper Text',
        'label': 'Checkbox group',
    },
    parameters: {
        controls: {
            include: ['defaultSlot', 'feedback', 'feedback-text', 'helper-text', 'label'],
        },
        storyClass: 'flex-col w500',
    },
};
export const ConTooltip = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, { exclude: ['defaultSlot', 'athChecked'], boolean: booleanArgs });
        return `
    <div class="story__item">
      <div class="story__item__label">Con Tooltip</div>
        <ath-checkbox-group ${attributes}>
          ${args.defaultSlot}
        </ath-checkbox-group>
    </div>
      `;
    },
    args: {
        ...defaultArgs,
        'defaultSlot': getHtmlCheckboxItems(4),
        'label': 'Checkbox group',
        'tooltip-text': 'Tooltip Text',
    },
    parameters: {
        controls: {
            include: ['defaultSlot', 'label', 'required-aria-label', 'show-required', 'tooltip-text'],
        },
        storyClass: 'flex-col w500',
    },
};
export const Disabled = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, { exclude: ['defaultSlot', 'athChecked'], boolean: booleanArgs });
        return `
      <div class="story__item">
        <div class="story__item__label">Disabled: ${args.disabled}</div>
        <ath-checkbox-group ${attributes}>
          ${args.defaultSlot}
          <ath-checkbox label="Label 4" checked></ath-checkbox>
        </ath-checkbox-group>
      </div>
    `;
    },
    args: {
        ...defaultArgs,
        defaultSlot: getHtmlCheckboxItems(3),
        disabled: true,
        label: 'Checkbox group',
    },
    parameters: {
        controls: {
            include: ['default-stlot', 'disabled', 'label', 'readonly'],
        },
        storyClass: 'flex-col w500',
    },
};
export const Readonly = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, { exclude: ['defaultSlot', 'athChecked'], boolean: booleanArgs });
        return `
    <div class="story__item">
      <div class="story__item__label">Read Only: ${args['readonly']}</div>
      <ath-checkbox-group ${attributes}>
        ${args.defaultSlot}
        <ath-checkbox label="Label 4" checked></ath-checkbox>
        </ath-checkbox-group>
    </div>
      `;
    },
    args: {
        ...defaultArgs,
        defaultSlot: getHtmlCheckboxItems(3),
        label: 'Checkbox group',
        readonly: true,
    },
    parameters: {
        controls: {
            include: ['default-stlot', 'label', 'readonly', 'disabled'],
        },
        storyClass: 'flex-col w500',
    },
};
export const ShowRequired = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, { exclude: ['defaultSlot', 'athChecked'], boolean: booleanArgs });
        return `
    <div class="story__item">
      <div class="story__item__label">show-required: ${args['show-required']}</div>
      <ath-checkbox-group ${attributes}>
        ${args.defaultSlot}
      </ath-checkbox-group>
    </div>
      `;
    },
    args: {
        ...defaultArgs,
        'defaultSlot': getHtmlCheckboxItems(4),
        'label': 'Checkbox group',
        'required-aria-label': 'required',
        'show-required': true,
    },
    parameters: {
        controls: {
            include: ['default-stlot', 'label', 'required-aria-label', 'show-required', 'tooltip-text'],
        },
        storyClass: 'flex-col w500',
    },
};
//# sourceMappingURL=checkbox-group.stories.js.map
