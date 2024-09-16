import {
  Box,
  Divider,
  Drawer,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

const drawWidth = 240;

type MenuItem = {
  name: string;
  url: string;
  icon: ReactNode;
};

const menuList: MenuItem[] = [
  { name: "Page 1", url: "/page1", icon: <MailIcon /> },
  { name: "Page 2", url: "/page2", icon: <MailIcon /> },
];

const SideBar = () => {
  const pathname = usePathname();
  const isSelected = (url: string) => {
    return pathname === url || pathname.startsWith(url + "/");
  };
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuList.map(({ name, url, icon }: MenuItem) => (
            <ListItem key={name} disablePadding>
              <ListItemButton selected={isSelected(url)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <MuiLink
                  href={url}
                  component={NextLink}
                  underline="none"
                  color="inherit"
                >
                  {name}
                </MuiLink>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
