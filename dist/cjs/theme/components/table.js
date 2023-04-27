"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuiTable = void 0;
exports.MuiTable = {
    styleOverrides: {
        root: function (_a) {
            var theme = _a.theme;
            return ({
                '& .MuiTableHead-root': {
                    '& .MuiTableCell-root': {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.secondary.main,
                    },
                },
            });
        },
    },
};
