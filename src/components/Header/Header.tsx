import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";
import Navbar from "./Navbar";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <AppBar position="relative">
      <Container>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography
              component={NavLink}
              to={"/"}
              variant="h6"
              color="white"
              sx={{ textDecoration: "none" }}
            >
              My App
            </Typography>
            <Navbar />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
