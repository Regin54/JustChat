import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";

const AppProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppProviders;
