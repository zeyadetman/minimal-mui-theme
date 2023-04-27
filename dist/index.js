"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = void 0;
var material_1 = require("@mui/material");
var pallete_1 = require("./theme/foundations/pallete");
var typography_1 = require("./theme/foundations/typography");
var components_1 = require("./theme/components");
exports.theme = (0, material_1.createTheme)({
    palette: pallete_1.palette,
    typography: typography_1.typography,
    components: components_1.components,
});
