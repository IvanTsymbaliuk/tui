import { green } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";

import {
  AppBar,
  Container,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";

const color = green[800];
const theme = createTheme({
  palette: {
    greenColor: {
      main: color,
      contrastText: "#fff",
    },
  },
  root: {
    flexGrow: 1,
  },
});
export default function Nav() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="greenColor" style={{ opacity: "0.9" }}>
        <Container fixed>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Tui Kozyatyn</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
