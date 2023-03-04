import React from "react";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import CollectionsIcon from "@mui/icons-material/Collections";

const Component = styled(AppBar)`
  background: #445a6f;
`;

const Navbar = () => {
  return (
    <>
      <Component>
        <Toolbar position="static">
          <CollectionsIcon />
          <Typography variant="h5" style={{ marginLeft: 10 }}>
            Image Finder
          </Typography>
        </Toolbar>
      </Component>
    </>
  );
};

export default Navbar;
