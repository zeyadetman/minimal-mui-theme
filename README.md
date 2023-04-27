Hi,

# Intro

This is a simple theme I created to use in the frontend/side projects that not have a design system. I'm using this theme in my personal projects and I'm sharing it with you.

This is a baby stage of it, I'll try to improve it while using it in my projects, feel free to contribute.

# How to use

Currently this theme created only to be used with Material UI, but I'm looking forward to expanding it to work with more UI frameworks.

Start a project with Material UI, then install this theme using npm or yarn.
```
npm i git@github.com:zeyadetman/minimal-mui-theme.git
```

Use it as simple as that

```
import { ThemeProvider } from "@mui/material";
import { theme } from "mui-minimal-theme";

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

Please open an issue if you have any questions or suggestions.

Thanks