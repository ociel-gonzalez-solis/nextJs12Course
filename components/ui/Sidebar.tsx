import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"];

export const Sidebar = () => {
  return (
    <Drawer anchor="left" open={true} onClose={() => console.log("Cerrado")}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
        </Box>

        <List>
          {menuItems.map((menuItem, index) => (
            <ListItemButton key={menuItem}>
              <ListItemIcon>
                {index % 2 ? (
                  <InboxOutlinedIcon />
                ) : (
                  <MailOutlineOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={menuItem} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Divider />

      <List>
        {menuItems.map((menuItem, index) => (
          <ListItemButton key={menuItem}>
            <ListItemIcon>
              {index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
            </ListItemIcon>
            <ListItemText primary={menuItem} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};
