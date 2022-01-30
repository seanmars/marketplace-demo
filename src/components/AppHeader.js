import React from "react";

import { Box, Text } from "grommet";

export const AppHeader = ({ appName, appIcon }) => (
    <Box
        flex={false}
        tag="header"
        direction="row"
        background="brand"
        align="center"
        justify="between"
        responsive={false}
    >
        <Box
            pad={{ horizontal: "medium", vertical: "small" }}
            responsive={false}
            direction="row"
            align="center"
            gap="small"
        >
            {appIcon && appIcon}
            <Text>{appName}</Text>
        </Box>
    </Box>
);