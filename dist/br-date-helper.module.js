import { NgModule } from '@angular/core';
import { BrDateHelper } from './providers/br-date-helper';
import { IonicModule } from 'ionic-angular';
var BrDateHelperModule = (function () {
    function BrDateHelperModule() {
    }
    BrDateHelperModule.forRoot = function () {
        return {
            ngModule: BrDateHelperModule,
            providers: [BrDateHelper]
        };
    };
    BrDateHelperModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicModule
                    ],
                    declarations: [],
                    exports: []
                },] },
    ];
    /** @nocollapse */
    BrDateHelperModule.ctorParameters = function () { return []; };
    return BrDateHelperModule;
}());
export { BrDateHelperModule };
//# sourceMappingURL=br-date-helper.module.js.map