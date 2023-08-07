import { CssBaseline, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { themeSettings } from "theme";
import { createTheme } from "@mui/material/styles";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
