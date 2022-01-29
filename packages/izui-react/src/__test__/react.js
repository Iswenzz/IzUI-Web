var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
// https://testing-library.com/docs/react-testing-library/setup#custom-render
import { render, fireEvent } from "@testing-library/react";
var mockQueries = function () { return ({}); };
export var customRender = function (ui) { return (__assign({}, render(ui))); };
var buildRender = function (_a) {
    var Component = _a.component, _b = _a.defaultProps, defaultProps = _b === void 0 ? {} : _b, _c = _a.queries, queries = _c === void 0 ? mockQueries : _c;
    return function (props) {
        if (props === void 0) { props = {}; }
        var rendered = customRender(_jsx(Component, __assign({}, defaultProps, props), void 0));
        var rerender = function (newProps) {
            if (newProps === void 0) { newProps = props; }
            return rendered.rerender(_jsx(Component, __assign({}, defaultProps, newProps), void 0));
        };
        // There is another way to handle custom queries
        // https://testing-library.com/docs/dom-testing-library/api-helpers#custom-queries
        // but it seems to return only functions
        return __assign(__assign(__assign({}, rendered), { rerender: rerender }), queries(rendered));
    };
};
var mockObserverFunc = jest.fn().mockImplementation(function () { return ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn()
}); });
window.ResizeObserver = window.ResizeObserver || mockObserverFunc;
window.MutationObserver = window.MutationObserver || mockObserverFunc;
export { fireEvent, buildRender, customRender as render };
//# sourceMappingURL=react.js.map