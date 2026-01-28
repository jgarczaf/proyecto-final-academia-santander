import { withActions } from "@storybook/addon-actions/decorator";
import { getAttributesFromArgs } from "../../../utils/storybook/index";
import { ordererArgs } from "./step.types";
import { StepFeedback } from "../step/step-model";
const defaultSlotContent = `<span class="ath-body--sm ath-color-text--default">Contenido del slot</span>`;
const defaultArgs = {
    ...ordererArgs,
    'action-text': 'Editar',
    'heading-text': 'Heading text',
    'defaultSlot': defaultSlotContent,
};
const meta = {
    title: 'Componentes/Stepper/Step',
    component: 'ath-step',
    parameters: {
        actions: { handles: ['athClick'] },
        componentSubtitle: 'El componente ath-step corresponde a cada uno de los pasos que contiene un stepper',
    },
    tags: ['autodocs'],
    argTypes: {
        'action-text': {
            control: { type: 'text' },
            description: 'Define el texto de la acción que se lleva a cabo con la selección del step',
            table: {
                type: { summary: 'string' },
            },
        },
        'disabled': {
            control: 'boolean',
            description: 'Indica si el step está deshabilitado',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        'feedback': {
            control: 'radio',
            options: [StepFeedback.None, StepFeedback.Error],
            description: 'Indica si el step contiene un error',
            table: {
                defaultValue: { summary: 'none' },
            },
        },
        'heading-text': {
            control: { type: 'text' },
            description: 'Define el título del step',
            table: { type: { summary: 'string' } },
        },
        'is-collapsable': {
            control: 'boolean',
            description: 'Indica si el step puede expandirse y contraerse. Solo disponible para alineación="left"',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        'is-complete': {
            control: 'boolean',
            description: 'Indica si el step se encuentra completado',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        'is-expanded': {
            control: 'boolean',
            description: 'Indica si el step se encuentra expandido cuando is-collapsable es true',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        'number': {
            control: 'number',
            description: 'Indica el número del step',
            table: {
                type: { summary: 'number' },
            },
        },
        'readonly': {
            control: 'boolean',
            description: 'Indica si el step es solo para lectura',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        'selected': {
            control: 'boolean',
            description: 'Indica que es el step en curso',
            table: {
                type: { summary: 'boolean' },
            },
        },
        // SLOT
        'defaultSlot': {
            name: 'default slot',
            table: { category: 'SLOTS', type: { summary: 'HTML' } },
            description: 'Contenido del slot',
        },
        // EVENTS
        'athClick': {
            action: 'athClick',
            description: 'El componente ath-step emite el evento athClick cuando es seleccionado con ratón o teclado',
            table: {
                type: { summary: 'EventEmitter<number>' },
                category: 'EVENTS',
            },
        },
    },
    decorators: [withActions],
    args: { ...defaultArgs },
};
export default meta;
export const Playground = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, ['athClick', 'defaultSlot']);
        return `
      <div class="story__item">
        <ath-stepper orientation="vertical">
          <ath-step ${attributes}>
            ${args.defaultSlot}
          </ath-step>
        </ath-stepper>
      </div>
    `;
    },
    args: {
        ...defaultArgs,
    },
    tags: ['!autodocs'],
    parameters: {
        storyClass: 'flex-col w300 h200 ',
    },
};
export const isCollapsable = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, ['athClick', 'defaultSlot']);
        return `
      <div class="story__item">
        <ath-stepper orientation="vertical">
            <ath-step ${attributes} >
              ${args.defaultSlot}
            </ath-step>
        </ath-stepper>
      </div>
    `;
    },
    args: {
        ...defaultArgs,
        'defaultSlot': defaultSlotContent,
        'is-collapsable': true,
        'action-text': 'Editar',
    },
    parameters: {
        storyClass: 'flex-col w300',
        controls: {
            exclude: ['athClick'],
        },
    },
};
export const IsExpanded = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, ['athClick', 'defaultSlot']);
        return `
      <div class="story__item">
        <ath-stepper orientation="vertical">
            <ath-step ${attributes}>
              ${args.defaultSlot}
            </ath-step>
        </ath-stepper>
      </div>
    `;
    },
    args: {
        ...defaultArgs,
        'is-collapsable': true,
        'is-expanded': true,
    },
    parameters: {
        storyClass: 'flex-col w300',
        controls: {
            exclude: ['athClick'],
        },
    },
};
export const FeedbackError = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, ['athClick', 'defaultSlot']);
        return `
      <div class="story__item">
        <ath-stepper orientation="vertical">
            <ath-step ${attributes}>
              ${args.defaultSlot}
            </ath-step>
        </ath-stepper>
      </div>
    `;
    },
    args: {
        ...defaultArgs,
        feedback: StepFeedback.Error,
    },
    parameters: {
        storyClass: 'flex-col w300',
        controls: {
            exclude: ['athClick'],
        },
    },
};
export const IsComplete = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, ['athClick', 'defaultSlot']);
        return `
      <div class="story__item">
        <ath-stepper orientation="vertical">
            <ath-step ${attributes}>
              ${args.defaultSlot}
            </ath-step>
        </ath-stepper>
      </div>
    `;
    },
    args: {
        ...defaultArgs,
        'is-complete': true,
    },
    parameters: {
        storyClass: 'flex-col w300',
        controls: {
            exclude: ['athClick'],
        },
    },
};
export const Disabled = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, ['athClick', 'defaultSlot']);
        return `
      <div class="story__item">
        <ath-stepper orientation="vertical">
            <ath-step ${attributes}>
              ${args.defaultSlot}
            </ath-step>
             <ath-step heading-text="Heading text">
              ${args.defaultSlot}
            </ath-step>
        </ath-stepper>
      </div>
    `;
    },
    args: {
        ...defaultArgs,
        disabled: true,
    },
    parameters: {
        storyClass: 'flex-col w300',
        controls: {
            exclude: ['athClick'],
        },
    },
};
export const Number = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, ['athClick', 'defaultSlot']);
        return `
      <div class="story__item">
        <ath-stepper orientation="vertical">
            <ath-step ${attributes}>
              ${args.defaultSlot}
            </ath-step>
        </ath-stepper>
      </div>
    `;
    },
    args: {
        ...defaultArgs,
        number: 3,
    },
    parameters: {
        storyClass: 'flex-col w300',
        controls: {
            exclude: ['athClick'],
        },
    },
};
export const Readonly = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, ['athClick', 'defaultSlot']);
        return `
      <div class="story__item">
        <ath-stepper orientation="vertical">
            <ath-step ${attributes}>
              ${args.defaultSlot}
            </ath-step>
        </ath-stepper>
      </div>
    `;
    },
    args: {
        ...defaultArgs,
        readonly: true,
    },
    parameters: {
        storyClass: 'flex-col w300',
        controls: {
            exclude: ['athClick'],
        },
    },
};
//# sourceMappingURL=step.stories.js.map
