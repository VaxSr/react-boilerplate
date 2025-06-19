import { Button, Stack, Typography } from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";
import { NavLink } from "react-router";
const NotFound = () => {
  return (
    <>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        height={"400px"}
        rowGap={4}
      >
        <Stack alignItems={"center"} justifyContent={"center"}>
          <ReportIcon color={"error"} fontSize={"large"} />
          <Typography fontSize={"1.25rem"}>Pagina non trovata</Typography>
        </Stack>
        <Button component={NavLink} to={"/"} variant="outlined">
          Torna alla Home
        </Button>
      </Stack>
    </>
  );
};

export default NotFound;
