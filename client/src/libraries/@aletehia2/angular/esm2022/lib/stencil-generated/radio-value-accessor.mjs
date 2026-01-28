import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
export class RadioValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RadioValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: RadioValueAccessor, selector: "ath-checkbox, ath-radio, ath-radio-group", host: { listeners: { "athChange": "handleChangeEvent($event.target.value)" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: RadioValueAccessor,
                multi: true
            }
        ], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RadioValueAccessor, decorators: [{
            type: Directive,
            args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'ath-checkbox, ath-radio, ath-radio-group',
                    host: {
                        '(athChange)': 'handleChangeEvent($event.target.value)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: RadioValueAccessor,
                            multi: true
                        }
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tdmFsdWUtYWNjZXNzb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnQtbGlicmFyeS9zcmMvbGliL3N0ZW5jaWwtZ2VuZXJhdGVkL3JhZGlvLXZhbHVlLWFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQWdCakQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGFBQWE7SUFDbkQsWUFBWSxFQUFjO1FBQ3hCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUM7K0dBSFUsa0JBQWtCO21HQUFsQixrQkFBa0IsbUpBUmxCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLGtCQUFrQjtnQkFDL0IsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOzs0RkFFVSxrQkFBa0I7a0JBZDlCLFNBQVM7bUJBQUM7b0JBQ1QsaURBQWlEO29CQUNqRCxRQUFRLEVBQUUsMENBQTBDO29CQUNwRCxJQUFJLEVBQUU7d0JBQ0osYUFBYSxFQUFFLHdDQUF3QztxQkFDeEQ7b0JBQ0QsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsb0JBQW9COzRCQUMvQixLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFZhbHVlQWNjZXNzb3IgfSBmcm9tICcuL3ZhbHVlLWFjY2Vzc29yJztcblxuQERpcmVjdGl2ZSh7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3IgKi9cbiAgc2VsZWN0b3I6ICdhdGgtY2hlY2tib3gsIGF0aC1yYWRpbywgYXRoLXJhZGlvLWdyb3VwJyxcbiAgaG9zdDoge1xuICAgICcoYXRoQ2hhbmdlKSc6ICdoYW5kbGVDaGFuZ2VFdmVudCgkZXZlbnQudGFyZ2V0LnZhbHVlKSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogUmFkaW9WYWx1ZUFjY2Vzc29yLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9WYWx1ZUFjY2Vzc29yIGV4dGVuZHMgVmFsdWVBY2Nlc3NvciB7XG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoZWwpO1xuICB9XG59XG4iXX0=