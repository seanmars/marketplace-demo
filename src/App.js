import React from "react";

import { Grommet, Box, TextInput, Text, Button } from "grommet";
import { Menu, Search } from "grommet-icons";
import { theme } from "./theme";
import {
  AppHeader,
  ItemCard
} from "./components";

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const items = []
  for (let index = 0; index < 20; index++) {
    items.push(<ItemCard key={index}></ItemCard>)
  }

  return (
    <Grommet
      full
      theme={theme}
      themeMode={darkMode ? "dark" : "light"}
    >
      <Box fill background="light-5">
        {/* Header */}
        <AppHeader
          appName="App Name"
          appIcon={<Menu />}
        />
        {/* Main */}
        <Box
          id="main"
          flex
          overflow="auto"
          gap="medium"
          pad="medium">
          <Box
            flex={false}
            overflow="auto"
            round="large"
            background={{ color: "dark-5", opacity: "weak" }}
            direction="row"
            align="center"
            pad={{ horizontal: "medium", vertical: "small" }}
            margin={{ horizontal: "medium", top: "medium" }}
          >
            <Search color="brand" />
            <TextInput plain placeholder="Search parts and abilities" type="search" />
          </Box>
          <Box
            flex={false}
            direction="row-responsive"
            wrap
          >
            {items}
          </Box>
        </Box>
        {/* Footer */}
        <Box
          id="footer"
          flex={false}
          pad={{ vertical: "small", left: "medium" }}
          responsive={false}
          background={{ color: "brand", dark: false }}
          direction="row"
          align="center"
          justify="between"
        >
          {/* TODO */}
        </Box>
      </Box>
    </Grommet >
  );
};

export default App;