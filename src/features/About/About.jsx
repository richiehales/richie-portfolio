import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export function About() {

  return (
    <Container>
      <Typography                     // Net Ninja Tutorial 2
        variant="h1"
        gutterBottom
        color="textSecondary"
        align="center"   
      >
        About Component
      </Typography>      
    </Container>
  )
}

