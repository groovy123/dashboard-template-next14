"use client";
import { ThemeProvider } from "@emotion/react";
import {
  Box,
  CssBaseline,
  Toolbar
} from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Roboto } from "next/font/google";
import NavigationBar from "./_components/navigationbar";
import SideBar from "./_components/sidebar";
import theme from "./theme";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/kanrisya01.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Uma Dash</title>
      </head>
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <NavigationBar />

            <SideBar />

            <Box component="main" sx={{ flexGrow: 1, p: 3, ml: 30 }}>
              <Toolbar />
              {children}
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
