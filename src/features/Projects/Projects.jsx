import React from "react";
import { StaticProjects } from "./StaticProjects";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';



export function Projects() {

  return (
    <Container>
      <Box mb={4} />
      <Typography                     
        variant="h4"
        gutterBottom
        color="textSecondary"
        align="center">
          Projects
      </Typography>
      <Box mb={4} />
      <StaticProjects />
    </Container>
  )
}