import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Link as MuiLink,
  Toolbar
} from "@mui/material";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import AssignmentIcon from '@mui/icons-material/Assignment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditNote from '@mui/icons-material/EditNote';
import Email from '@mui/icons-material/Email';
import FormatListNumbered from '@mui/icons-material/FormatListNumbered';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const drawWidth = 240;

type MenuItem = {
  name: string;
  url: string;
  icon: ReactNode;
};

const menuListKeiba: MenuItem[] = [
  { name: "Dashboard", url: "/dashboard", icon: <DashboardIcon /> },
  { name: "買い目", url: "/kaime", icon: <ShoppingCart /> },
  { name: "出馬表", url: "/syutsubahyo", icon: <EditNote /> },
  { name: "騎手リスト", url: "/jockey", icon: <FormatListNumbered /> },
];

const menuListOther: MenuItem[] = [
  { name: "About", url: "/about", icon: <AssignmentIcon /> },
  { name: "お問い合わせ", url: "/contact", icon: <Email /> },
  { name: "ロードマップ", url: "/loadmap", icon: <EditNote /> },
];

const SideBar = () => {
  const pathname = usePathname();

  const isSelected = (url: string) => {
    return pathname === url || pathname.startsWith(url + "/");
  };

  const loadList = (items: MenuItem[]) => {

    // load list items
    return items.map(({ name, url, icon }: MenuItem) => (
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
    ))
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
          {loadList(menuListKeiba)}
        </List>
        <Divider />
        <List>
          {loadList(menuListOther)}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
