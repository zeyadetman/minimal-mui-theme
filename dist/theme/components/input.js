"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuiTextField = void 0;
exports.MuiTextField = {
    defaultProps: {
        variant: 'outlined',
    },
    variants: [
        {
            props: { variant: 'outlined' },
            style: function (_a) {
                var theme = _a.theme;
                return ({
                    '& .MuiInputBase-root': {
                        '& fieldset': {
                            border: 'none',
                        },
                        maxWidth: '100%',
                        borderRadius: 0,
                        border: "1px solid ".concat(theme.palette.primary.main),
                        '& .MuiInputBase-input': {
                            padding: "1rem 2rem",
                        },
                    },
                });
            },
        },
    ],
};
