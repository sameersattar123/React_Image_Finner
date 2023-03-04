import { Grid } from "@mui/material";
import React from "react";
import Image from "./Image";

const Images = ({ data }) => {
  return (
    <>
      <Grid container>
        {
            data.map((image) => {
          return (
            <Grid xs={3} item>
              <Image image={image} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Images;
