import React, { useState } from "react";
import logo from "../images/image.png";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Container,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const PublicNavbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "background.paper", color: "primary.darker" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            key="home"
            onClick={handleCloseNavMenu}
            component={NavLink}
            to="/"
            sx={{ display: { xs: "none", md: "flex" } }}>
            <img src={logo} alt="Gameison" width="100px" />
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              <MenuItem
                key="home"
                onClick={handleCloseNavMenu}
                component={NavLink}
                to="/">
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem
                key="reading"
                onClick={handleCloseNavMenu}
                component={NavLink}
                to="/">
                <Typography textAlign="center">Marvel</Typography>
              </MenuItem>
              <MenuItem
                key="reading"
                onClick={handleCloseNavMenu}
                component={NavLink}
                to="/">
                <Typography textAlign="center">Starwars</Typography>
              </MenuItem>
              <MenuItem
                key="reading"
                onClick={handleCloseNavMenu}
                component={NavLink}
                to="/">
                <Typography textAlign="center">POP!</Typography>
              </MenuItem>
              <MenuItem
                key="reading"
                onClick={handleCloseNavMenu}
                component={NavLink}
                to="/">
                <Typography textAlign="center">Non Sports</Typography>
              </MenuItem>
              <MenuItem
                key="reading"
                onClick={handleCloseNavMenu}
                component={NavLink}
                to="/">
                <Typography textAlign="center">Collectibles</Typography>
              </MenuItem>
              <MenuItem
                key="reading"
                onClick={handleCloseNavMenu}
                component={NavLink}
                to="/">
                <Typography textAlign="center">New release</Typography>
              </MenuItem>
              <MenuItem
                key=""
                onClick={handleCloseNavMenu}
                component={NavLink}
                to="/">
                <Typography textAlign="center">Vintage Games</Typography>
              </MenuItem>
              <MenuItem
                key="reading"
                onClick={handleCloseNavMenu}
                component={NavLink}
                to="/">
                <Typography textAlign="center">Vintage Non-games</Typography>
              </MenuItem>
              <MenuItem
                key="reading"
                onClick={handleCloseNavMenu}
                component={NavLink}
                to="/reading">
                <Typography textAlign="center">Cart</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Button
              key="home"
              onClick={handleCloseNavMenu}
              component={NavLink}
              to="/"
              sx={{ display: { xs: "block", md: "none" } }}>
              <img src={logo} alt="Gameison" width="100px" />
            </Button>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}>
            <Button
              key="home"
              onClick={handleCloseNavMenu}
              component={NavLink}
              to="/"
              variant="main"
              sx={{
                fontWeight: "600",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "1rem",
              }}>
              Home
            </Button>
            <Button
              key="home"
              // onClick={handleCloseNavMenu}
              component={NavLink}
              to="/"
              variant="main"
              sx={{
                fontWeight: "600",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "1rem",
              }}>
              Marvel
            </Button>
            <Button
              key="home"
              // onClick={handleCloseNavMenu}
              component={NavLink}
              to="/"
              variant="main"
              sx={{
                fontWeight: "600",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "1rem",
              }}>
              Starwars
            </Button>
            <Button
              key="home"
              // onClick={handleCloseNavMenu}
              component={NavLink}
              to="/"
              variant="main"
              sx={{
                fontWeight: "600",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "1rem",
              }}>
              POP!
            </Button>
            <Button
              key="home"
              // onClick={handleCloseNavMenu}
              component={NavLink}
              to="/"
              variant="main"
              sx={{
                fontWeight: "600",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "1rem",
              }}>
              Non Sports
            </Button>
            <Button
              key="home"
              // onClick={handleCloseNavMenu}
              component={NavLink}
              to="/"
              variant="main"
              sx={{
                fontWeight: "600",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "1rem",
              }}>
              Collectibles
            </Button>
            <Button
              key="home"
              // onClick={handleCloseNavMenu}
              component={NavLink}
              to="/"
              variant="main"
              sx={{
                fontWeight: "600",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "1rem",
              }}>
              New Release
            </Button>
            <Button
              key="home"
              // onClick={handleCloseNavMenu}
              component={NavLink}
              to="/"
              variant="main"
              sx={{
                fontWeight: "600",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "1rem",
              }}>
              Vintage Games
            </Button>
            <Button
              key="home"
              // onClick={handleCloseNavMenu}
              component={NavLink}
              to="/"
              variant="main"
              sx={{
                fontWeight: "600",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "1rem",
              }}>
              Vintage Non-games
            </Button>
            <IconButton
              key="reading"
              onClick={handleCloseNavMenu}
              component={NavLink}
              to="/reading"
              variant="main"
              sx={{
                fontWeight: "600",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "1rem",
              }}>
              <AddShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default PublicNavbar;
