import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "rgba(255, 192, 31, 1)"
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: "outlined"
            },
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    borderColor: 'black',
                    color: 'black',
                    borderRadius: 20,
                    minWidth: 120,
                    padding: "5px 0",
                    textTransform: 'capitalize',
                    ":hover": {
                        backgroundColor: "rgba(255, 192, 31, 1)",
                    }
                }
            }
        }
    }
})

export default theme;
