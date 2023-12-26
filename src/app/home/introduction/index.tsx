/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Searchbar from "@/components/global/Searchbar";
import { searchBar } from "@/apis/homepage";

function Introduction() {
	const [searchString, setSearchString] = useState("");
	const [data, setData] = useState();
	useEffect(() => {
		setTimeout(() => {
			searchBar(searchString, setData);
		}, 4000);
	}, [searchString]);

	console.log("search string is ", searchString);
	console.log("Data is ", data);
	return (
		<Box marginTop={7} component="section" aria-label="Introduction">
			<Container>
				<Stack alignItems="center" marginBottom={4} textAlign="center">
					<Box
						marginBottom={1}
						component="img"
						width={348}
						src="/images/logo.svg"
					/>
					<Typography color="text.disabled">
						Super User-friendly Transaction Explorer for the Safe Eco-system
					</Typography>
				</Stack>
				<Searchbar status setSearchString={setSearchString} />
				{/* <Searchbar setSearchString={setSearchString} /> */}
			</Container>
		</Box>
	);
}

export default Introduction;
