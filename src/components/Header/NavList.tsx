import { Link, Stack } from "@mui/material";
import { NavLink } from "react-router";

type PageT = {
  name: string;
  id: string;
  href: string;
};

const pages: PageT[] = [{ name: "Home", id: "home", href: "/" }];

const NavList = ({ ...props }) => {
  return (
    <Stack
      overflow="auto"
      direction={{ xs: "column", sm: "row" }}
      gap={3}
      m={{ xs: 3, sm: 0 }}
      width={{ xs: "150px", sm: "initial" }}
      {...props}
    >
      {pages.map((page) => (
        <Link
          component={NavLink}
          key={page.id}
          sx={{
            color: { xs: "primary", sm: "white" },
          }}
          to={page.href}
        >
          {page.name}
        </Link>
      ))}
    </Stack>
  );
};

export default NavList;
