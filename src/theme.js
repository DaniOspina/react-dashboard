import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: 18, 
    h4: {
      textAlign: "center", 
      marginTop: "20px",
    },
  },
  components: {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#f4f4f4", // Fondo del contenedor de la tabla
          marginBottom: "20px",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          backgroundColor: "#ADD8E6", // Fondo de la primera fila
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
      },
    },
  },
});

export default theme;
