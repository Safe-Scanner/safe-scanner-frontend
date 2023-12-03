/* eslint-disable @next/next/no-img-element */
import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import helpfulLinks from "./helpful-links.json";

function Footer() {
  return (
    <Box component="footer" aria-label="Footer" sx={{paddingY: {xs: 2, sm: 4, md: 6}}}>
      <Container>
        <Stack spacing={4}>
          <Stack spacing={1.5}>
            <Box>
              <Link href="/">
                <Image src="/images/logo.svg" alt="Safe Scanner" width={134} height={17} />
              </Link>
            </Box>
            <Typography color="text.secondary">
              Super User-friendly Transaction Explorer for the Safe Eco-system
            </Typography>
          </Stack>
          <Box>
            <Grid container spacing={4}>
              {helpfulLinks.map((item, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Stack spacing={2}>
                    <Typography
                      color="text.disabled"
                      variant="subtitle2"
                      fontWeight={500}
                      letterSpacing={1.1}
                      textTransform="uppercase"
                    >
                      {item.label}
                    </Typography>
                    {item.url.map((url, index) => (
                      <Link key={index} href={url[0]}>
                        <Typography component="span">{url[1]}</Typography>
                      </Link>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box>
            <Typography color="text.disabled" variant="body2">
              &copy; ${new Date().getFullYear()} Safescanner.xyz
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
