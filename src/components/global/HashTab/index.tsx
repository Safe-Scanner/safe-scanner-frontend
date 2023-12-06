"use client";
import React, {useState, useEffect} from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import {useTheme} from "@mui/material/styles";
import {usePathname} from "next/navigation";

interface HashTabProps {
  children?: React.ReactNode;
  tabs: string[];
  size?: "small" | "medium" | "large";
}

function HashTab(prop: HashTabProps) {
  const {children, tabs, size} = prop;

  const pathname = usePathname();
  const theme = useTheme();
  const [currentTab, setCurrentTab] = useState(0);
  const handleTabChange = (index: number) => {
    setCurrentTab(index);
  };

  useEffect(() => {
    const hash = window.location.hash;

    if (hash !== "") {
      const index = tabs
        .map((tab) => tab.toLowerCase())
        .indexOf(hash.slice(1).toLowerCase());
      if (index !== -1) {
        setCurrentTab(index);
      }
    }
  }, [tabs]);

  const childrens = React.Children.map(children, (child) => child);

  return (
    <React.Fragment>
      <Stack direction="row" spacing={1}>
        {tabs.map((tab, index) => (
          <Button
            key={index}
            size={size || "large"}
            sx={{
              ...(currentTab === index ? {} : {bgcolor: "grey.600"}),
            }}
            variant="contained"
            onClick={() => handleTabChange(index)}
            href={`${pathname}#${tab.toLowerCase()}`}
          >
            {tab}
          </Button>
        ))}
      </Stack>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={currentTab}
      >
        {childrens}
      </SwipeableViews>
    </React.Fragment>
  );
}

export default HashTab;
