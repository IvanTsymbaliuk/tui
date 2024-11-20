import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Nav() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };
  return (
    <AppBar position="fixed" color="primary" style={{ opacity: "0.9" }}>
      <Container fixed>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Tui Kozyatyn</Typography>
        </Toolbar>
      </Container>
      <Drawer color="primary" open={openDrawer} onClose={toggleDrawer(false)}>
        <List>
          <ListItemButton>
            <ListItemText primary="Всі рослини" />
          </ListItemButton>
        </List>
      </Drawer>
    </AppBar>
  );
}
