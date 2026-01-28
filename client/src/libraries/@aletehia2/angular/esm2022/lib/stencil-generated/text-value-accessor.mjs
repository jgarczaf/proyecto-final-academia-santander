import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
export class TextValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TextValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TextValueAccessor, selector: "ath-input, ath-input-number, ath-textarea", host: { listeners: { "athInput": "handleChangeEvent($event.target.value)" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: TextValueAccessor,
                multi: true
            }
        ], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TextValueAccessor, decorators: [{
            type: Directive,
            args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'ath-input, ath-input-number, ath-textarea',
                    host: {
                        '(athInput)': 'handleChangeEvent($event.target.value)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: TextValueAccessor,
                            multi: true
                        }
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12YWx1ZS1hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudC1saWJyYXJ5L3NyYy9saWIvc3RlbmNpbC1nZW5lcmF0ZWQvdGV4dC12YWx1ZS1hY2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFnQmpELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxhQUFhO0lBQ2xELFlBQVksRUFBYztRQUN4QixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDOytHQUhVLGlCQUFpQjttR0FBakIsaUJBQWlCLG1KQVJqQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxpQkFBaUI7Z0JBQzlCLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7NEZBRVUsaUJBQWlCO2tCQWQ3QixTQUFTO21CQUFDO29CQUNULGlEQUFpRDtvQkFDakQsUUFBUSxFQUFFLDJDQUEyQztvQkFDckQsSUFBSSxFQUFFO3dCQUNKLFlBQVksRUFBRSx3Q0FBd0M7cUJBQ3ZEO29CQUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLG1CQUFtQjs0QkFDOUIsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi92YWx1ZS1hY2Nlc3Nvcic7XG5cbkBEaXJlY3RpdmUoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG4gIHNlbGVjdG9yOiAnYXRoLWlucHV0LCBhdGgtaW5wdXQtbnVtYmVyLCBhdGgtdGV4dGFyZWEnLFxuICBob3N0OiB7XG4gICAgJyhhdGhJbnB1dCknOiAnaGFuZGxlQ2hhbmdlRXZlbnQoJGV2ZW50LnRhcmdldC52YWx1ZSknXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IFRleHRWYWx1ZUFjY2Vzc29yLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dFZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBWYWx1ZUFjY2Vzc29yIHtcbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihlbCk7XG4gIH1cbn1cbiJdfQ==