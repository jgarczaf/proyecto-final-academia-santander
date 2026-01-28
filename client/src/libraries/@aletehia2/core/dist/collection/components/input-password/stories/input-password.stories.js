import { withActions } from "@storybook/addon-actions/decorator";
import { getAttributesFromArgs } from "../../../utils/storybook/index";
import { ordererArgs } from "./input-password.types";
import { InputFeedbackTypes, InputSizes } from "../input-password.models";
import { inputTextArgTypes } from "../../input-text/stories/input-text.argtypes";
const defaultArgs = {
    ...ordererArgs,
    label: 'Label',
    name: 'password',
};
const controlsEvents = ['athBlur', 'athChange', 'athFocus', 'athInput'];
const booleanArgs = ['autofocus', 'disabled', 'counter', 'readonly', 'required', 'hide-required', 'submit-on-enter'];
const meta = {
    title: 'Componentes/Input Password',
    component: 'ath-input-password',
    parameters: {
        actions: { handles: [...controlsEvents] },
        componentSubtitle: 'Recomendado para campos de introducción de contraseña o información confidencial, donde puedes alternar la visibilidad del contenido, ayudando a prevenir errores de entrada. Cuenta con propiedades para mostrar feedback, textos de ayuda, contador de caracteres, entre otros. ',
    },
    tags: ['autodocs'],
    argTypes: {
        'autofocus': inputTextArgTypes.autofocus,
        'autocomplete': inputTextArgTypes.autocomplete,
        'counter': inputTextArgTypes.counter,
        'disabled': inputTextArgTypes.disabled,
        'feedback': inputTextArgTypes.feedback,
        'feedback-text': inputTextArgTypes['feedback-text'],
        'helper-text': inputTextArgTypes['helper-text'],
        'label': inputTextArgTypes.label,
        'maxlength': inputTextArgTypes.maxlength,
        'name': inputTextArgTypes.name,
        'placeholder': inputTextArgTypes.placeholder,
        'readonly': inputTextArgTypes.readonly,
        'required': inputTextArgTypes.required,
        'hide-required': inputTextArgTypes['hide-required'],
        'size': inputTextArgTypes.size,
        'submit-on-enter': inputTextArgTypes['submit-on-enter'],
        'tooltip-text': inputTextArgTypes['tooltip-text'],
        'tooltip-width': inputTextArgTypes['tooltip-width'],
        // Accesibility
        'counter-label': inputTextArgTypes['counter-label'],
        'input-tabindex': inputTextArgTypes['input-tabindex'],
        'label-hide-password': {
            control: { type: 'text' },
            description: 'Especifica la etiqueta accesible del botón de ocultar password',
            table: { type: { summary: 'text' } },
        },
        'label-show-password': {
            control: { type: 'text' },
            description: 'Especifica la etiqueta accesible del botón de mostrar password',
            table: { type: { summary: 'text' } },
        },
        // Eventos
        'athFocus': inputTextArgTypes.athFocus,
        'athBlur': inputTextArgTypes.athBlur,
        'athChange': inputTextArgTypes.athChange,
        'athInput': inputTextArgTypes.athInput,
        // Métodos
        'setFocus': inputTextArgTypes.setFocus,
    },
    decorators: [withActions],
    args: { ...defaultArgs },
};
export default meta;
export const Playground = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, { exclude: controlsEvents, boolean: booleanArgs });
        return `
      <div class="story__item">
          <ath-input-password ${attributes}></ath-input-password>
      </div>
    `;
    },
    args: {
        ...defaultArgs,
        'label': 'Label',
        'feedback': 'error',
        'feedback-text': 'Mensaje de error',
        'helper-text': 'Texto de ayuda para completar el campo',
    },
    tags: ['!autodocs'],
    parameters: {
        storyClass: 'flex-col w400  mt75',
    },
};
export const Autofocus = {
    render: args => {
        const attributes = getAttributesFromArgs(args, { exclude: controlsEvents, boolean: booleanArgs });
        return `
            <div class="story__item">
              <ath-input-password ${attributes}></ath-input-password>
            </div>
  `;
    },
    args: { ...defaultArgs, autofocus: true },
    tags: ['!autodocs'], // Remove from Docs to do not force autofocus to one story
    parameters: {
        controls: {
            include: ['autofocus'],
        },
        storyClass: 'flex-col w400',
    },
};
export const ConCounter = {
    render: args => {
        const attributes = getAttributesFromArgs(args, { exclude: controlsEvents, boolean: booleanArgs });
        return `
            <div class="story__item" >
              <ath-input-password ${attributes}></ath-input-password>
            </div>
    `;
    },
    args: { ...defaultArgs, counter: true },
    parameters: {
        controls: {
            include: ['maxlength', 'counter-label', 'feedback', 'feedback-text', 'helper-text'],
        },
        storyClass: 'flex-col w400',
    },
};
export const Disabled = {
    render: args => {
        const attributes = getAttributesFromArgs(args, { exclude: controlsEvents, boolean: booleanArgs });
        return `
            <div class="story__item">
              <ath-input-password ${attributes}></ath-input-password>
            </div>
    `;
    },
    args: { ...defaultArgs, disabled: true },
    parameters: {
        controls: {
            include: ['feedback', 'feedback-text', 'helper-text', 'label', 'placeholder'],
        },
        storyClass: 'flex-col w400',
    },
};
export const ConFeedback = {
    render: args => {
        const feedbackTypes = [InputFeedbackTypes.Error, InputFeedbackTypes.Success, InputFeedbackTypes.Warning, InputFeedbackTypes.None];
        const attributes = getAttributesFromArgs(args, { exclude: controlsEvents, boolean: booleanArgs });
        const html = `
        ${feedbackTypes
            .map(feedback => `
                      <div class="story__item">
            ${feedback
            ? `
                      <div class="story__item">
                        <div class="story__item__label">Feedback: ${feedback}</div>
                        <ath-input-password ${attributes} feedback="${feedback}"></ath-input-password>
                      </div>
            `
            : ''}
            </div>`)
            .join('')}
          `;
        return html;
    },
    args: { ...defaultArgs, 'feedback-text': 'Feedback text' },
    parameters: {
        controls: {
            include: ['feedback-text', 'helper-text', 'counter', 'maxlength'],
        },
    },
};
export const NoEnfocable = {
    render: args => {
        const attributes = getAttributesFromArgs(args, { exclude: controlsEvents, boolean: booleanArgs });
        return `
            <div class="story__item">
              <ath-input-password ${attributes}></ath-input-password>
            </div>
          `;
    },
    args: { ...defaultArgs, 'input-tabindex': '-1' },
    parameters: {
        controls: {
            include: ['input-tabindex'],
        },
        storyClass: 'flex-col w400',
    },
};
export const ConHelperText = {
    render: args => {
        const attributes = getAttributesFromArgs(args, { exclude: controlsEvents, boolean: booleanArgs });
        return `
            <div class="story__item">
              <ath-input-password ${attributes}></ath-input-password>
            </div>
          `;
    },
    args: { ...defaultArgs, 'helper-text': 'Se recomienda usar una palabra con más de 6 caracteres' },
    parameters: {
        controls: {
            include: ['feedback', 'feedback-text', 'helper-text', 'counter', 'maxlength'],
        },
        storyClass: 'flex-col w400',
    },
};
export const ConLabel = {
    render: args => {
        const attributes = getAttributesFromArgs(args, { exclude: controlsEvents, boolean: booleanArgs });
        return `
            <div class="story__item">
              <ath-input-password ${attributes}></ath-input-password>
            </div>
          `;
    },
    args: { ...defaultArgs, label: 'Label' },
    parameters: {
        controls: {
            include: ['label', 'input-aria-label', 'required', 'hide-required', 'tooltip-text', 'tooltip-width'],
        },
        storyClass: 'flex-col w400',
    },
};
export const Placeholder = {
    render: args => {
        const attributes = getAttributesFromArgs(args, { exclude: controlsEvents, boolean: booleanArgs });
        return `
            <div class="story__item">
              <ath-input-password ${attributes}></ath-input-password>
            </div>
          `;
    },
    args: { ...defaultArgs, placeholder: 'Placeholder' },
    parameters: {
        controls: {
            include: ['placeholder'],
        },
        storyClass: 'flex-col w400',
    },
};
export const ReadOnly = {
    render: args => {
        const attributes = getAttributesFromArgs(args, { exclude: controlsEvents, boolean: booleanArgs });
        return `
            <div class="story__item">
              <ath-input-password ${attributes}'></ath-input-password>
            </div>
          `;
    },
    args: { ...defaultArgs, readonly: true },
    parameters: {
        controls: {
            include: ['readonly'],
        },
        storyClass: 'flex-col w400',
    },
};
export const Required = {
    render: args => {
        const attributes = getAttributesFromArgs(args, { exclude: controlsEvents, boolean: booleanArgs });
        return `
            <div class="story__item">
              <ath-input-password ${attributes}></ath-input-password>
            </div>
          `;
    },
    args: { ...defaultArgs, label: 'Label', required: true },
    parameters: {
        controls: {
            include: ['required', 'hide-required', 'label', 'tooltip-text'],
        },
        storyClass: 'flex-col w400',
    },
};
export const Size = {
    render: args => {
        const sizes = [InputSizes.Small, InputSizes.Medium, InputSizes.Large];
        const attributes = getAttributesFromArgs(args, { exclude: controlsEvents, boolean: booleanArgs });
        const html = `
        ${sizes
            .map(size => `
                      <div class="story__item">
            ${size
            ? `
                      <div class="story__item">
                        <div class="story__item__label">Size: ${size}</div>
                        <ath-input-password ${attributes} size="${size}"></ath-input-password>
                      </div>
            `
            : ''}
            </div>`)
            .join('')}
          `;
        return html;
    },
    args: { ...defaultArgs },
    parameters: {
        controls: {
            include: ['placeholder'],
        },
    },
};
export const ConTooltip = {
    render: args => {
        const attributes = getAttributesFromArgs(args, { exclude: controlsEvents, boolean: booleanArgs });
        return `
            <div class="story__item">
              <ath-input-password ${attributes}></ath-input-password>
            </div>
    `;
    },
    args: { ...defaultArgs, 'tooltip-text': 'Esto es un tooltip', 'label': 'Label' },
    parameters: {
        controls: {
            include: ['label', 'required', 'hide-required', 'tooltip-text', 'tooltip-width'],
        },
        storyClass: 'flex-col w400 mt50',
    },
};
//# sourceMappingURL=input-password.stories.js.map
