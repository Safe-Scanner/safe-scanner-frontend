/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState, CSSProperties } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Searchbar from "@/components/global/Searchbar";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
	display: "block",
	margin: "0 auto",
};

function Introduction() {
	const [loading, setLoading] = useState(false);
	const [color, setColor] = useState("#ffffff");

	useEffect(() => {
		console.log(loading);
	}, [loading]);
	return (
		<>
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
					<Searchbar status setLoading={setLoading}/>
				</Container>
			</Box>
			<ClipLoader
				color={color}
				loading={loading}
				cssOverride={override}
				size={60}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</>
	);
}

export default Introduction;
