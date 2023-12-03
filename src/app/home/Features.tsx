"use client";
import FeatureItem from "@/components/template/FeatureItem";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, {timelineItemClasses} from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const concepts = [
  "MVP offers address search for wallet balance and activity.",
  "Smart contract execution history is visible and searchable.",
  "Explorer MVP simplifies blockchain analytics for users.",
  "Users gain insight into decentralized network operations.",
];

function Features() {
  return (
    <FeatureItem
      title="Features"
      description="See our latest features and leave feedback"
    >
      <Box>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
            padding: 0,
            margin: 0,
            paddingLeft: 1,
          }}
        >
          {concepts.map((item, index) => (
            <TimelineItem sx={{minHeight: 48}} key={index}>
              <TimelineSeparator>
                <TimelineDot
                  variant={index !== 0 ? "outlined" : "filled"}
                  color="primary"
                />
                {concepts.length > index + 1 && (
                  <TimelineConnector
                    sx={{
                      background: "none",
                      border: 0,
                      borderRight: 2,
                      borderColor: "primary.main",
                      borderStyle: index !== 0 ? "dashed" : "solid",
                    }}
                  />
                )}
              </TimelineSeparator>

              <TimelineContent>{item}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
      <Box>
        <Button
          startIcon={
            <Image
              width={24}
              height={24}
              src="/images/map-marker-path.svg"
              alt=""
            />
          }
          size="large"
        >
          See Roadmap
        </Button>
      </Box>
    </FeatureItem>
  );
}

export default Features;
