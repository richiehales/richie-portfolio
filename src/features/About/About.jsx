import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from 'mui-image'
import laptop from './images/laptop.JPG';

export function About() {

  return (
    <Container >
      <Typography                     // Net Ninja Tutorial 2
        variant="h3"
        gutterBottom
        color="textSecondary"
        align="center"   
      >
        About Component
      </Typography>
      <Image src={laptop} alt="Laptop" />
      <Image src={laptop} alt="Laptop" />   
    </Container>
  )
}

