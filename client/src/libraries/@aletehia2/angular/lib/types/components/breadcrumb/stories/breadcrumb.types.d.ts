import type { BreadcrumbModel } from '../breadcrumb.model';
export interface BreadcrumbStoryArgs {
    separator: string;
    collapsed: boolean;
    options: BreadcrumbModel[];
}
