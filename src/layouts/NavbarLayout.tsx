import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import { Container, Stack } from "@mui/material";

const NavbarLayout = () => {
  return (
    <>
      <Stack>
        <Header />
        <Container>
          <Outlet />
        </Container>
      </Stack>
    </>
  );
};

export default NavbarLayout;
