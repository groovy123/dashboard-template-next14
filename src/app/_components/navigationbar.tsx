"use client";
import { AppBar, Link, Toolbar, Typography } from "@mui/material";

const NavigationBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          <Link href="/" underline="none" color="inherit">
            MUI 管理画面
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
