import React from "react";
import { RedditApp } from "./RedditApp";
import { FilmFinder } from "./FilmFinder";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';



export function Projects() {

  return (
    <Container maxWidth="xl">
      <Box mb={4} />
      <Typography                     
        variant="h4"
        gutterBottom
        color="textSecondary"
        align="center">
          Projects
      </Typography>
      <Box mb={4} />
      <FilmFinder />
      <Box mb={8} />
      <RedditApp />
    </Container>
  )
}