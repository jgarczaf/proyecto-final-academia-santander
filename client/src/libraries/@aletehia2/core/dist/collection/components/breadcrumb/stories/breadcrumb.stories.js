const meta = {
    title: 'Componentes/Breadcrumb',
    component: 'ath-breadcrumb',
    argTypes: {
        separator: {
            control: { type: 'select' },
            options: ['/', '>', '•', '→'],
            description: 'Separator desplegado entre los links.',
        },
        collapsed: {
            control: { type: 'boolean' },
            description: 'Si es true, el breadcrumb colapsa los links intermedios.',
        },
        options: {
            control: { type: 'object' },
            description: 'Definción de los links del componente.',
        },
        athAriaLabel: {
            control: { type: 'text' },
            description: 'Etiqueta accesible del breadcrumb (aria-label del nav).',
        },
    },
};
export default meta;
const baseOptions = [
    { id: 1, name: 'Home', url: '#' },
    { id: 2, name: 'menu1', url: '#' },
    { id: 3, name: 'menu2', url: '#' },
];
const optionsWithIcons = [
    { id: 1, name: 'Home', url: '#', icon: 'home_estrecha' },
    { id: 2, name: 'menu1', url: '#', icon: 'arrow_top' },
    { id: 3, name: 'menu2', url: '#' },
];
function render(args) {
    const optionsAttr = args.options ? `options='${JSON.stringify(args.options)}'` : '';
    const separatorAttr = args.separator ? `separator="${args.separator}"` : '';
    const collapsedAttr = args.collapsed ? `collapsed` : '';
    const athAriaLabelAttr = args.athAriaLabel ? `ath-aria-label="${args.athAriaLabel}"` : '';
    return `
    <div style="padding: 16px;">
      <ath-breadcrumb class="ath-color-text--primary ath-color-icon--primary" ${separatorAttr} ${collapsedAttr} ${optionsAttr} ${athAriaLabelAttr}></ath-breadcrumb>
    </div>
  `;
}
export const Default = {
    render,
    args: {
        separator: '/',
        collapsed: false,
        options: baseOptions,
        athAriaLabel: 'Ruta de navegación',
    },
};
export const Collapsed = {
    render,
    args: {
        separator: '/',
        collapsed: true,
        options: [
            { id: 1, name: 'Home', url: '#' },
            { id: 2, name: 'menu1', url: '#' },
            { id: 3, name: 'menu2', url: '#' },
            { id: 4, name: 'menu3', url: '#' },
            { id: 5, name: 'menu4', url: '#' },
        ],
        athAriaLabel: 'Ruta de navegación',
    },
};
export const WithIcons = {
    render,
    args: {
        separator: '/',
        collapsed: false,
        options: optionsWithIcons,
        athAriaLabel: 'Ruta de navegación',
    },
};
export const CustomSeparator = {
    render,
    args: {
        separator: '>',
        collapsed: false,
        options: baseOptions,
        athAriaLabel: 'Ruta de navegación',
    },
};
//# sourceMappingURL=breadcrumb.stories.js.map
