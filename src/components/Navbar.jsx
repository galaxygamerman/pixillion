import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: '#0000',
      top: 0,
      justifyContent: "space-between"
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography
        variant="h5"
        fontWeight="bold"
        color="white"
        ml={1}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        Pixillion
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;