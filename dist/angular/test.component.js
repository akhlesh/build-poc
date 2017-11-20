import { Component } from '@angular/core';
import { getName, isString } from 'common';
var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
        this.msg = isString(this.msg) ? getName(this.msg) : 'nothing';
    };
    return TestComponent;
}());
export { TestComponent };
//# sourceMappingURL=test.component.js.map