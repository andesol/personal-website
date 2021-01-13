import { ThemeProvider } from "theme-ui";
import theme from "../styles/theme";
import "../styles/global.css";
import "../styles/fonts.css";
import "prismjs/themes/prism-tomorrow.css";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
