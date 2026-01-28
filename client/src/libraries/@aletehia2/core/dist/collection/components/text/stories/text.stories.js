import { withActions } from "@storybook/addon-actions/decorator";
import { getAttributesFromArgs } from "../../../utils/storybook/index";
import { orderedArgs } from "./text.types";
import { TextColor } from "../text.model";
const defaultArgs = {
    'content': 'Loremo ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco pacutado me la tieta revoltada so oyino causen estravagarias en moi cerebelamen o loremo ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Loremo ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco pacutado me la tieta revoltada so oyino causen estravagarias en moi cerebelamen o loremo ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Loremo ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco pacutado me la tieta revoltada so oyino causen estravagarias en moi cerebelamen o loremo ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    'lines': 2,
    'withTooltip': true,
    'columns': {
        'numColumns': 1,
        'spacing': '16px',
    },
    color: 'default',
};
const defaultStoryControls = ['content', 'lines', 'withTooltip', 'columns', 'hierarchy', 'color'];
const meta = {
    title: 'Componentes/Text',
    component: 'ath-text',
    decorators: [withActions],
    tags: ['autodocs'],
    argTypes: {
        'content': {
            control: 'text',
            description: 'Contenido textual del componente',
        },
        'lines': {
            control: { type: 'number' },
            description: 'Número máximo de líneas a mostrar, solo se funciona si número de columnas es 1',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '2' },
            },
        },
        'withTooltip': {
            control: { type: 'boolean' },
            description: 'Mostrar tooltip con el contenido completo si el texto está truncado',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
        },
        'columns': {
            control: { type: 'object' },
            description: 'Configuración de columnas (número y espaciado), número de columnas es prioritario ante número de líneas. El espaciado funciona con "px", "rem" y "%"',
            table: {
                type: { summary: '{ numColumns: number; spacing?: string }' },
                defaultValue: { summary: '{ numColumns: 1, spacing: "16px" }' },
            },
        },
        'hierarchy': {
            control: 'select',
            options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            description: 'Define la jerarquía semántica del texto (tag HTML).',
            table: {
                type: { summary: `'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'` },
                defaultValue: { summary: 'p' }
            }
        },
        'color': {
            control: 'select',
            description: 'Color semántico del texto',
            options: ['default', 'inverse', 'primary', 'accent', 'subtle', 'disabled'],
            table: {
                type: { summary: 'AthTextColor' },
                defaultValue: { summary: TextColor.Default },
            },
        },
    },
    args: { ...orderedArgs, ...defaultArgs },
    parameters: {
        componentSubtitle: 'Componente de texto con soporte para limitar líneas con puntos suspensivos.',
        controls: { expanded: true },
        docs: {
            story: {
                height: '300px',
            },
        },
    },
};
export default meta;
export const Playground = {
    render: args => {
        const attributes = getAttributesFromArgs({
            'content': args['content'],
            'lines': args['lines'],
            'hierarchy': args['hierarchy'],
            'color': args['color'],
        });
        const tooltipAttr = args.withTooltip ? ' with-tooltip' : '';
        // Se construye el atributo columns como JSON string, daba problmas con el HTML
        const columnsAttr = args['columns']
            ? `columns='${JSON.stringify({
                numColumns: args['columns'].numColumns,
                spacing: args['columns'].spacing,
            }).replace(/'/g, '&apos;')}'`
            : '';
        const needsScrim = args.color === 'inverse' || args.color === 'accent';
        const wrapperClass = needsScrim ? 'ath-color-bg--700' : '';
        const html = `
      <div style="width:100%" class="${wrapperClass}"">
        <ath-text ${attributes} ${tooltipAttr} ${columnsAttr}></ath-text>
      </div>
    `;
        return html;
    },
    args: {
        ...defaultArgs,
    },
};
export const Color = {
    render: (args) => {
        const colors = ['default', 'inverse', 'primary', 'accent', 'subtle', 'disabled'];
        const attributes = getAttributesFromArgs(args, ['color', 'columns']);
        const tooltipAttr = args.withTooltip ? ' with-tooltip' : '';
        const spacing = args.columns?.spacing ?? '16px';
        const numColumns = args.columns?.numColumns ?? 1;
        return `
      <div class="story">
        <div class="story__row">
          ${colors
            .map((color) => {
            const columnsAttr = `columns='${JSON.stringify({
                numColumns,
                spacing,
            })}'`;
            const wrapperClass = color === 'inverse' || color === 'accent' ? 'ath-color-bg--700' : '';
            return `
                <div class="story__item">
                  <div class="story__item__label">Color: ${color}</div>
                  <div style="width:100%" class="${wrapperClass}">
                    <ath-text ${attributes} ${tooltipAttr} ${columnsAttr} color="${color}"></ath-text>
                  </div>
                </div>
              `;
        })
            .join('')}
        </div>
      </div>
    `;
    },
    args: { ...defaultArgs },
    parameters: {
        controls: {
            include: [...defaultStoryControls],
            exclude: ['color'],
            docs: {
                story: {
                    height: '10px',
                },
            },
        },
    },
};
export const Hierarchy = {
    name: 'Hierarchy',
    render: (args) => {
        const hierarchies = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
        const attributes = getAttributesFromArgs(args, ['hierarchy', 'columns']);
        const content = args.content ?? 'Texto de ejemplo para ver la jerarquía';
        const needsScrim = args.color === 'inverse';
        const wrapperClass = needsScrim ? 'ath-color-bg--scrim' : '';
        const tooltipAttr = args.withTooltip ? ' with-tooltip' : '';
        const spacing = args.columns?.spacing ?? '16px';
        const numColumns = args.columns?.numColumns ?? 1;
        return `
      <div class="story">
        <div class="story__row">
          ${hierarchies
            .map((h) => {
            const columnsAttr = `columns='${JSON.stringify({
                numColumns,
                spacing,
            })}'`;
            return `
                <div class="story__item">
                  <div class="story__item__label">Hierarchy: ${h}</div>
                  <div style="width:100%" class="${wrapperClass}">
                    <ath-text ${attributes} ${tooltipAttr} ${columnsAttr} hierarchy="${h}" content="${content}"></ath-text>
                  </div>
                </div>
              `;
        })
            .join('')}
        </div>
      </div>
    `;
    },
    args: { ...defaultArgs },
    parameters: {
        controls: {
            include: [...defaultStoryControls],
            exclude: ['hierarchy'],
        },
    },
};
export const Lines = {
    name: 'Lines',
    render: (args) => {
        const linesList = [undefined, 1, 2, 3, 4];
        const attributes = getAttributesFromArgs(args, ['lines', 'columns']);
        const content = args.content ?? 'Texto largo de ejemplo. '.repeat(30);
        const needsScrim = args.color === 'inverse';
        const wrapperClass = needsScrim ? 'ath-color-bg--scrim' : '';
        const tooltipAttr = args.withTooltip ? ' with-tooltip' : '';
        const spacing = args.columns?.spacing ?? '16px';
        const numColumns = args.columns?.numColumns ?? 1;
        return `
      <div class="story">
        <div class="story__row">
          ${linesList
            .map((l) => {
            const columnsAttr = `columns='${JSON.stringify({
                numColumns,
                spacing,
            })}'`;
            const label = l == null ? 'undefined' : l;
            const linesAttr = l == null ? '' : `lines="${l}"`;
            return `
                <div class="story__item">
                  <div class="story__item__label">Lines: ${label}</div>
                  <div style="width:100%" class="${wrapperClass}">
                    <ath-text ${attributes} ${linesAttr} ${tooltipAttr} ${columnsAttr} content="${content}"></ath-text>
                  </div>
                </div>
              `;
        })
            .join('')}
        </div>
      </div>
    `;
    },
    args: { ...defaultArgs },
    parameters: {
        controls: {
            include: [...defaultStoryControls],
            exclude: ['lines'],
        },
    },
};
export const Columns = {
    name: 'Columns',
    render: (args) => {
        const numColumnsList = [1, 2, 3, 4];
        const spacing = '16px';
        const attributes = getAttributesFromArgs(args, ['columns']);
        const content = args.content ?? 'Texto de ejemplo para columnas. '.repeat(40);
        const needsScrim = args.color === 'inverse';
        const wrapperClass = needsScrim ? 'ath-color-bg--scrim' : '';
        const tooltipAttr = args.withTooltip ? ' with-tooltip' : '';
        return `
      <div class="story">
        <div class="story__row">
          ${numColumnsList
            .map((n) => {
            const columnsAttr = `columns='${JSON.stringify({
                numColumns: n,
                spacing,
            })}'`;
            return `
                <div class="story__item">
                  <div class="story__item__label">
                    columns: { numColumns: ${n}, spacing: ${spacing} }
                  </div>
                  <div style="width:100%" class="${wrapperClass}">
                    <ath-text ${attributes} ${columnsAttr} ${tooltipAttr} content="${content}" ></ath-text>
                  </div>
                </div>
              `;
        })
            .join('')}
        </div>
      </div>
    `;
    },
    args: { ...defaultArgs },
    parameters: {
        controls: {
            include: [...defaultStoryControls],
            exclude: ['columns'],
        },
    },
};
export const Tooltip = {
    name: 'Tooltip',
    render: (args) => {
        const tooltipList = [undefined, true];
        const attributes = getAttributesFromArgs(args, ['withTooltip', 'columns']);
        const content = args.content ?? 'Texto largo para forzar truncado y comprobar tooltip. '.repeat(25);
        const needsScrim = args.color === 'inverse';
        const wrapperClass = needsScrim ? 'ath-color-bg--scrim' : '';
        const spacing = args.columns?.spacing ?? '16px';
        const numColumns = args.columns?.numColumns ?? 1;
        return `
      <div class="story">
        <div class="story__row">
          ${tooltipList
            .map((t) => {
            const columnsAttr = `columns='${JSON.stringify({
                numColumns,
                spacing,
            })}'`;
            const tooltipAttr = t ? 'with-tooltip' : '';
            return `
                <div class="story__item">
                  <div class="story_row">
                    <div class="story__item__label">
                      withTooltip: ${t === undefined ? 'false' : 'true'}
                    </div>
                    <div style="width:100%" class="${wrapperClass}">
                      <ath-text ${attributes} lines="2" ${tooltipAttr} ${columnsAttr} content="${content}"></ath-text>
                    </div>
                  </div>
                </div>
              `;
        })
            .join('')}
        </div>
      </div>
    `;
    },
    args: { ...defaultArgs },
    parameters: {
        controls: {
            include: [...defaultStoryControls],
            exclude: ['withTooltip'],
        },
    },
};
//# sourceMappingURL=text.stories.js.map
