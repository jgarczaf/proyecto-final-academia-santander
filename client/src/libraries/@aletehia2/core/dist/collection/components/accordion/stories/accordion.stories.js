import { getAttributesFromArgs } from "../../../utils/storybook/index";
import { AccordionExpands } from "../accordion.model";
const defaultAccordionArgs = {
    'expand': undefined,
    'no-last-item-divider': undefined,
    'aria-label': 'accordion',
};
const meta = {
    title: 'Componentes/Accordion/Accordion',
    component: 'ath-accordion',
    argTypes: {
        'expand': {
            control: 'inline-radio',
            options: ['one', 'all'],
            description: 'Indica si se pueden abrir todos los elementos al mismo tiempo o si al clicar en uno se cierra el anterior',
            table: {
                type: { summary: 'AccordionExpand' },
                defaultValue: { summary: AccordionExpands.All },
            },
        },
        'no-last-item-divider': {
            control: 'boolean',
            description: 'Permite quitar el borde separador del último elemento de la lista',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        'aria-label': {
            control: 'text',
            description: 'Indica una etiqueta accesible para el acordeón',
            table: {
                category: 'Accessibility',
                type: { summary: 'string' },
            },
        },
    },
    parameters: {
        controls: {
            sort: 'alpha',
        },
        componentSubtitle: 'El componente ath-accordion es el contenedor de cada ath-accordion-item, y define su apariencia y comportamiento general.',
    },
    args: { ...defaultAccordionArgs },
};
export default meta;
export const Playground = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
      <div style="width: 100%">
        <ath-accordion ${attributes}>
          ${getHtmlAccordionItems(4)}
        </ath-accordion>
      </div>
    `;
    },
    args: { ...defaultAccordionArgs },
    tags: ['!autodocs'],
};
const getHtmlAccordionItems = (length = 4) => {
    const items = Array.from({ length }, (_, i) => i + 1);
    return items
        .map(index => `
        <ath-accordion-item heading-text="Label ${index}" description="Description ${index}" icon="location">
          <div class="ath-body--sm ath-color-text--default">Contenido ${index}</div>
        </ath-accordion-item>
      `)
        .join('');
};
export const Expand = {
    render: (args) => {
        const expandOptions = ['all', 'one'];
        return expandOptions
            .map(expand => `
        <div class="story__item w400">
          <div class="story__item__label">Expand: ${expand}</div>
          <ath-accordion expand="${expand}" aria-label="${args['aria-label']}">
            ${getHtmlAccordionItems(2)}
          </ath-accordion>
        </div>
      `)
            .join('');
    },
    args: { ...defaultAccordionArgs },
};
export const NoLastItemDivider = {
    render: (args) => {
        const lastItemDividerOptions = ['true', 'false'];
        return lastItemDividerOptions
            .map(lastItemDivider => `
        <div class="story__item w400">
          <div class="story__item__label">NoLastItemDivider: ${lastItemDivider}</div>
          <ath-accordion no-last-item-divider="${lastItemDivider}" aria-label="${args['aria-label']}">
            ${getHtmlAccordionItems(2)}
          </ath-accordion>
        </div>
      `)
            .join('');
    },
    args: { ...defaultAccordionArgs },
};
//# sourceMappingURL=accordion.stories.js.map
