import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import Box from '@mui/material/Box';



export function Career() {

  return(
    <div>
      <Typography
        variant="h5"
        align="center"
        >
          Current Job Role
      </Typography>
      <Typography
        variant="p"
        >
          Electrical Controls Engineer. Programming
          PLCs, HMI's & servo drives. Provide 
          detailed costings to customer and produce
          electrical drawings with manuals for system.                        
      </Typography>
      <Box mb={4} />
      <Typography
        variant="h5"
        align="center"
        >
          Career Goals
      </Typography>
      <Typography
        variant="p">
          Complete <a href="https://www.codecademy.com">Codecademy</a> Full 
          Stack Career Path and pursue a 
          career in web development.                        
      </Typography>
      <Box mb={4} />
      <Typography
        variant="h5"
        align="center"
        >
          Web Development Technologies
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <HtmlIcon />
          </ListItemIcon>
          <ListItemText>
            HTML
          </ListItemText>      
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CssIcon />
          </ListItemIcon>
          <ListItemText>
            CSS
          </ListItemText>      
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <JavascriptIcon />
          </ListItemIcon>
          <ListItemText>
            JavaScript
          </ListItemText>      
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <JavascriptIcon />
          </ListItemIcon>
          <ListItemText>
            React
          </ListItemText>      
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <JavascriptIcon />
          </ListItemIcon>
          <ListItemText>
            Redux
          </ListItemText>      
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <JavascriptIcon />
          </ListItemIcon>
          <ListItemText>
            Node
          </ListItemText>      
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <JavascriptIcon />
          </ListItemIcon>
          <ListItemText>
            Express
          </ListItemText>      
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <JavascriptIcon />
          </ListItemIcon>
          <ListItemText>
            Material UI
          </ListItemText>   
        </ListItem>
      </List>
    </div>
  )
}