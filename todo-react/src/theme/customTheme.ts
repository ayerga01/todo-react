import { createTheme, ThemeOptions } from "@mui/material"

export const customTheme: ThemeOptions = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#90caf9",
            light: "#e3f2fd",
            dark: "#42a5f5"
        },
        background: {
            paper: "#151515",
            default: "#121212"
        }
    }
})