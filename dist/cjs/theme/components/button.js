"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuiButton = void 0;
exports.MuiButton = {
    defaultProps: {
        variant: 'contained',
        color: 'primary',
    },
    variants: [
        {
            props: { variant: 'contained' },
            style: function (_a) {
                var theme = _a.theme;
                return ({
                    width: 'fit-content',
                    borderRadius: 0,
                });
            },
        },
    ],
};
