import Nav from "./components/Nav";
import ProductGrid from "./components/ProductGrid";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav />
        <ProductGrid />
      </ThemeProvider>
    </>
  );
}

export default App;
