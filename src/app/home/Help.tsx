"use client";
import FeatureItem from "@/components/template/FeatureItem";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, {timelineItemClasses} from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const concepts = [
  "What happened to my transaction?",
  "How do blockchain transactions work?",
  "What is paymaster and how to use that?",
];

function Help() {
  return (
    <FeatureItem title="Help" description="Learn how to use Scanner more effective">
      <Box>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
            padding: 0,
            margin: 0,
          }}
        >
          {concepts.map((item, index) => (
            <TimelineItem sx={{minHeight: 48}} key={index}>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: "transparent",
                    marginY: 0.5,
                  }}
                >
                  <Image src="/images/help-indicator.svg" alt="" width={24} height={24} />
                </TimelineDot>
              </TimelineSeparator>

              <TimelineContent sx={{paddingX: 1.5}}>{item}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
      <Box>
        <Button
          startIcon={<Image width={24} height={24} src="/images/book-open.svg" alt="" />}
          size="large"
        >
          Open Help Center
        </Button>
      </Box>
    </FeatureItem>
  );
}

export default Help;
