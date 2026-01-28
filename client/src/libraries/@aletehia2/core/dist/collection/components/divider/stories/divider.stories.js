import { getAttributesFromArgs } from "../../../utils/storybook/index";
import { DIVIDER_DEFAULT_COLOR, DIVIDER_DEFAULT_ORIENTATION, DIVIDER_DEFAULT_SIZE, DividerColor, DividerOrientation, DividerSize } from "../divider.model";
const defaultDividerArgs = {
    color: DIVIDER_DEFAULT_COLOR,
    orientation: DIVIDER_DEFAULT_ORIENTATION,
    size: DIVIDER_DEFAULT_SIZE,
};
const meta = {
    title: 'Componentes/Divider',
    component: 'ath-divider',
    argTypes: {
        orientation: {
            control: 'inline-radio',
            options: Object.values(DividerOrientation),
            description: 'Orientación del separador. La orientación vertical necesita un contenedor padre con display flex y alto definido.',
            table: {
                type: { summary: 'DividerOrientationType' },
                defaultValue: { summary: defaultDividerArgs.orientation },
            },
        },
        size: {
            control: 'inline-radio',
            options: Object.values(DividerSize),
            description: 'Tamaño del separador',
            table: {
                type: { summary: 'DividerSizeType' },
                defaultValue: { summary: defaultDividerArgs.size },
            },
        },
        color: {
            control: 'inline-radio',
            options: Object.values(DividerColor),
            description: 'Color del separador',
            table: {
                type: { summary: 'DividerColorType' },
                defaultValue: { summary: defaultDividerArgs.color },
            },
        },
    },
    args: { ...defaultDividerArgs },
    parameters: {
        componentSubtitle: 'Es un componente visual utilizado para separar contenido dentro de una interfaz, creando una división clara entre secciones.',
        controls: { expanded: true },
        darkMode: {
            stylePreview: true,
        },
        backgrounds: { disable: true },
    },
};
export default meta;
export const Playground = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args);
        return `
      <div class="${args.orientation === DividerOrientation.Horizontal ? 'w-full' : 'flex h200'}">
        <ath-divider ${attributes}></ath-divider>
      </div>
    `;
    },
    args: { ...defaultDividerArgs },
    tags: ['!autodocs'],
};
export const Orientation = {
    render: (args) => {
        const orientations = Object.values(DividerOrientation);
        const attributes = getAttributesFromArgs(args);
        return orientations
            .map(orientation => `
          <div class="story__item w400">
            <div class="story__item__label">Orientation: ${orientation}</div>
            <div class="${orientation === DividerOrientation.Horizontal ? 'w-full' : 'flex h200'}">
              <ath-divider orientation="${orientation}" ${attributes}></ath-divider>
            </div>
          </div>
        `)
            .join('');
    },
    args: { ...defaultDividerArgs },
    parameters: {
        controls: { exclude: ['orientation'] },
    },
};
export const Size = {
    render: (args) => {
        const sizes = Object.values(DividerSize);
        const attributes = getAttributesFromArgs(args);
        return sizes
            .map(size => `
          <div class="story__item w400">
            <div class="story__item__label">Size: ${size}</div>
            <div class="${args.orientation === DividerOrientation.Horizontal ? 'w-full' : 'flex h200'}">
              <ath-divider size="${size}" ${attributes}></ath-divider>
            </div>
          </div>
        `)
            .join('');
    },
    args: { ...defaultDividerArgs },
    parameters: {
        controls: { exclude: ['size'] },
    },
};
export const Color = {
    render: (args) => {
        const colors = Object.values(DividerColor);
        const attributes = getAttributesFromArgs(args);
        return colors
            .map(color => `
          <div class="story__item w400">
            <div class="story__item__label">Color: ${color}</div>
            <div class="${args.orientation === DividerOrientation.Horizontal ? 'w-full' : 'flex h200'}">
              <ath-divider color="${color}" ${attributes}></ath-divider>
            </div>
          </div>
        `)
            .join('');
    },
    args: { ...defaultDividerArgs },
    parameters: {
        controls: { exclude: ['color'] },
    },
};
//# sourceMappingURL=divider.stories.js.map
