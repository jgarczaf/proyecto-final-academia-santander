import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { defineCustomElements } from '@aletheia2/core/loader';
import { DIRECTIVES } from './stencil-generated/index';
import { RadioValueAccessor } from './stencil-generated/radio-value-accessor';
import { SelectValueAccessor } from './stencil-generated/select-value-accessor';
import { TextValueAccessor } from './stencil-generated/text-value-accessor';
import * as i0 from "@angular/core";
import * as i1 from "./stencil-generated/components";
export class AletheiaComponentLibraryModule {
    static forRoot() {
        return {
            ngModule: AletheiaComponentLibraryModule,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: () => {
                        return () => defineCustomElements(window);
                    },
                    multi: true,
                },
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AletheiaComponentLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: AletheiaComponentLibraryModule, declarations: [i1.AthAccordion, i1.AthAccordionItem, i1.AthActionBar, i1.AthAlert, i1.AthAvatar, i1.AthBadge, i1.AthBreadcrumb, i1.AthButton, i1.AthButtonExpandable, i1.AthButtonLink, i1.AthCalendar, i1.AthCard, i1.AthCardHeader, i1.AthCardSelectable, i1.AthCardSelectableGroup, i1.AthCardThumbnail, i1.AthCheckbox, i1.AthCheckboxGroup, i1.AthChipChoice, i1.AthChipChoiceGroup, i1.AthChipDismiss, i1.AthChipDismissGroup, i1.AthCollapse, i1.AthCollapseIcon, i1.AthDatepicker, i1.AthDatepickerRange, i1.AthDivider, i1.AthDropdown, i1.AthDropdownOption, i1.AthEmptyState, i1.AthIcon, i1.AthInputCounter, i1.AthInputPassword, i1.AthInputText, i1.AthInputTextarea, i1.AthLink, i1.AthList, i1.AthListItem, i1.AthMenuButton, i1.AthMenuButtonItem, i1.AthMenuHorizontal, i1.AthMenuHorizontalItem, i1.AthMenuLateral, i1.AthMenuLateralItemAction, i1.AthMenuLateralItemLink, i1.AthMenuVertical, i1.AthMenuVerticalItemAction, i1.AthMenuVerticalItemLink, i1.AthModal, i1.AthPagination, i1.AthPanel, i1.AthPictogram, i1.AthProgressBar, i1.AthRadioButton, i1.AthRadioButtonGroup, i1.AthSectionTitle, i1.AthSegmentedControl, i1.AthSegmentedControlItem, i1.AthSlider, i1.AthStep, i1.AthStepper, i1.AthSwitch, i1.AthTab, i1.AthTable, i1.AthTableBody, i1.AthTableHeader, i1.AthTableHeaderItem, i1.AthTableRow, i1.AthTableRowItem, i1.AthTabs, i1.AthTag, i1.AthText, i1.AthTooltip, i1.AthTooltipTrigger, i1.AthUserDetail, i1.AthUserMenu, RadioValueAccessor,
            SelectValueAccessor,
            TextValueAccessor], imports: [CommonModule, FormsModule], exports: [RadioValueAccessor,
            SelectValueAccessor,
            TextValueAccessor] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AletheiaComponentLibraryModule, imports: [CommonModule, FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AletheiaComponentLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ...DIRECTIVES,
                        RadioValueAccessor,
                        SelectValueAccessor,
                        TextValueAccessor,
                    ],
                    imports: [CommonModule, FormsModule],
                    exports: [
                        RadioValueAccessor,
                        SelectValueAccessor,
                        TextValueAccessor,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxpYnJhcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50LWxpYnJhcnkvc3JjL2xpYi9jb21wb25lbnQtbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7QUFpQjVFLE1BQU0sT0FBTyw4QkFBOEI7SUFDekMsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLDhCQUE4QjtZQUN4QyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVUsRUFBRSxHQUFHLEVBQUU7d0JBQ2YsT0FBTyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDNUMsQ0FBQztvQkFDRCxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7K0dBZFUsOEJBQThCO2dIQUE5Qiw4QkFBOEIsMDRDQVh2QyxrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLGlCQUFpQixhQUVULFlBQVksRUFBRSxXQUFXLGFBRWpDLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsaUJBQWlCO2dIQUdSLDhCQUE4QixZQVAvQixZQUFZLEVBQUUsV0FBVzs7NEZBT3hCLDhCQUE4QjtrQkFkMUMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osR0FBRyxVQUFVO3dCQUNiLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7b0JBQ3BDLE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3FCQUNsQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50cyB9IGZyb20gJ0BhbGV0aGVpYTIvY29yZS9sb2FkZXInO1xyXG5pbXBvcnQgeyBESVJFQ1RJVkVTIH0gZnJvbSAnLi9zdGVuY2lsLWdlbmVyYXRlZC9pbmRleCc7XHJcbmltcG9ydCB7IFJhZGlvVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4vc3RlbmNpbC1nZW5lcmF0ZWQvcmFkaW8tdmFsdWUtYWNjZXNzb3InO1xyXG5pbXBvcnQgeyBTZWxlY3RWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi9zdGVuY2lsLWdlbmVyYXRlZC9zZWxlY3QtdmFsdWUtYWNjZXNzb3InO1xyXG5pbXBvcnQgeyBUZXh0VmFsdWVBY2Nlc3NvciB9IGZyb20gJy4vc3RlbmNpbC1nZW5lcmF0ZWQvdGV4dC12YWx1ZS1hY2Nlc3Nvcic7XHJcbmltcG9ydCB7IFZhbHVlQWNjZXNzb3IgfSBmcm9tICcuL3N0ZW5jaWwtZ2VuZXJhdGVkL3ZhbHVlLWFjY2Vzc29yJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAuLi5ESVJFQ1RJVkVTLFxyXG4gICAgUmFkaW9WYWx1ZUFjY2Vzc29yLFxyXG4gICAgU2VsZWN0VmFsdWVBY2Nlc3NvcixcclxuICAgIFRleHRWYWx1ZUFjY2Vzc29yLFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFJhZGlvVmFsdWVBY2Nlc3NvcixcclxuICAgIFNlbGVjdFZhbHVlQWNjZXNzb3IsXHJcbiAgICBUZXh0VmFsdWVBY2Nlc3NvcixcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGV0aGVpYUNvbXBvbmVudExpYnJhcnlNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QWxldGhlaWFDb21wb25lbnRMaWJyYXJ5TW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQWxldGhlaWFDb21wb25lbnRMaWJyYXJ5TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBkZWZpbmVDdXN0b21FbGVtZW50cyh3aW5kb3cpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=