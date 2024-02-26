/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, CSSProperties, useRef } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Chip from "@mui/material/Chip";
import { Collapse, IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import List from "@mui/material/List";
import CloseIcon from "@mui/icons-material/Close";
import DataGroup from "./DataGroup";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { searchBar } from "@/apis/homepage";
import { NETWORK_ICON_MAP, NETWORK_LIST, NETWORK_MAP } from "@/constants/constants";
import ClipLoader from "react-spinners/ClipLoader";
import Image from "next/image";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

function Searchbar(props: any) {
    const { status } = props;
    const [rawSearchData, setRawSearchData] = useState({} as any);
    const [loading, setLoading] = useState(false);
    const [keys, setKeys] = useState([] as any);
    const [tips, setTips] = useState(true);
    const [open, setOpen] = useState(false);
    const [transition, setTransition] = useState(true);
    const [popperWidth, setPopperWidth] = useState<number>(0);
    const [animateState, setAnimateState] = useState(false);
    const searchRef: any = useRef(null);

    const [value, setValue] = React.useState("");
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
        // setOpen((prev) => !prev);
    };

    const handleTips = () => {
        setTips((prev) => !prev);
    };

    let timer: any;
    const handleClose = () => {
        // timer = setTimeout(() => {
        setOpen(false);
        // setRawSearchData({});
        // setAnchorEl(null);
        setValue("");
        // }, 3000);
    };

    const handleOpen = () => {
        setOpen(true);
        setTips(true);
        setAnchorEl(searchRef.current);
    };

    // const handleCloseCancel = () => {
    //     clearTimeout(timer);
    // };

    useEffect(() => {
        console.log(anchorEl, open, tips, value, loading);
    }, [open]);

    const handleKeyDown = (e: any) => {
        if (e.key === "Escape") {
            handleClose();
        }
        // on cmd + K open the search
        if (e.metaKey && e.key === "k") {
            e.preventDefault();
            console.log("here 1");
            if (searchRef.current) searchRef.current.focus();
            // animate for 1 second
            handleOpen();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

    const getMenuWidth = () => {
        console.log(anchorEl?.clientWidth);
        if (anchorEl) {
            setPopperWidth(anchorEl.clientWidth);
            return anchorEl.clientWidth;
        }
        return null;
    };

    useEffect(() => {
        getMenuWidth();
        if (Boolean(anchorEl) && (value.length === 0 || (value.length >= 66 && value.length <= 70) || value.length == 42)) {
            setOpen(true);
        }
    }, [anchorEl, value]);

    useEffect(() => {
        if (value.length === 42 || (value.length >= 66 && value.length <= 70)) {
            setRawSearchData({});
            const getData = setTimeout(() => {
                if (value.length > 0) {
                    searchBar(value, setRawSearchData, setLoading, setAnchorEl);
                }
            }, 0);

            return () => {
                clearTimeout(getData);
            };
        }
        // setAnchorEl((prev: any) => !prev);
    }, [value]);

    useEffect(() => {
        setLoading(false);
    }, [open]);

    useEffect(() => {
        if (Object.keys(rawSearchData).length > 0 && Object.keys(rawSearchData)[0] != "statusCode") {
            setKeys([]);
            setKeys(Object.keys(rawSearchData));
        }
        // ) {
        // 	setSearchData([]);
        // 	const networks = Object.keys(rawSearchData);
        // 	networks.forEach((network: string, index: any) => {
        // 		let addresses = [] as any;
        // 		let id = index;
        // 		let iconObject = NETWORK_LIST.find(
        // 			(icon: any) => icon.key.toLowerCase() === network.toLowerCase()
        // 		);
        // 		let icon = iconObject?.iconPath;
        // 		rawSearchData[network].forEach((item: any) => {
        // 			addresses.push(item);
        // 			addresses.forEach((address: any) => {
        // 				setSearchData((prev: any[]) => [
        // 					...prev,
        // 					{
        // 						id: id,
        // 						networkName: iconObject?.name,
        // 						icon: icon,
        // 						address: address,
        // 						values: [
        // 							{
        // 								avatar: iconObject?.name,
        // 								networkKey: network,
        // 								value: `${network}:${address}`,
        // 							},
        // 						],
        // 					},
        // 				]);
        // 			});
        // 		});
        // 	});
        // }
    }, [rawSearchData]);

    return (
        <Box maxWidth={950} marginX="auto" sx={{ position: "relative", zIndex: 1 }} onBlur={handleClose}>
            {/* <Box sx={{position: "absolute", top: 0, bottom: 0, right: 0, left: 0}} /> */}
            <Stack spacing={1}>
                <TextField
                    // className={`${
                    //     animateState ? `focus-within:translate-y-2 focus-within:-translate-x-2   focus-within:scale-125` : ""
                    // } duration-150`}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                        // setSearchString(e.target.value);
                        // setSearch(e.target.value);
                    }}
                    onClick={handleClick}
                    sx={{
                        "& fieldset": {
                            borderWidth: 2,
                            borderColor: "primary.light",
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <div>
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            </div>
                        ),
                        endAdornment: open ? (
                            <InputAdornment position="end">
                                <IconButton onClick={handleClose}>
                                    <CloseIcon />
                                </IconButton>
                            </InputAdornment>
                        ) : (
                            <span className="flex items-center justify-center h-10 px-10 rounded-full bg-dark-400">
                                <img className="" src="/images/span (1).svg" alt="" style={{ width: "20px", marginRight: "12px" }} />
                            </span>
                        ),
                        sx: {
                            pl: 2,
                            "& input::placeholder": {
                                color: "text.disabled",
                                opacity: 1,
                            },
                        },
                    }}
                    fullWidth
                    placeholder="Search for addresses & hashes..."
                    ref={searchRef}
                ></TextField>

                {status && (
                    <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center">
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                            <Typography color="text.disabled">Scanner Network Status</Typography>
                            <Chip
                                sx={{ border: 0 }}
                                icon={<img src="/images/checkbox-marked-circle-outline.svg" alt="" />}
                                variant="outlined"
                                label="Available"
                                color="primary"
                            />
                        </Stack>
                        {/* <Stack direction="row" alignItems="center" spacing={0.5}>
                            <Typography color="text.disabled">Total Safe Transactions</Typography>
                            <Chip
                                sx={{ border: 0 }}
                                icon={<img src="/images/safe-transactions.svg" alt="" />}
                                variant="outlined"
                                label="33 013 011"
                                color="primary"
                            />
                        </Stack> */}
                    </Stack>
                )}
            </Stack>

            <Popper open={open} anchorEl={anchorEl} transition={transition} sx={{ width: popperWidth, bgcolor: "background.default" }}>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box sx={{ p: 2 }}>
                            {(!rawSearchData || Object.keys(rawSearchData).length == 0) && !loading ? (
                                <>
                                    <ListItemButton onClick={handleTips}>
                                        <ListItemText primary="Tips" />
                                        {tips ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={tips}>
                                        <ListItem
                                            component="div"
                                            disablePadding
                                            sx={{
                                                bgcolor: "background.paper",
                                                borderRadius: 1,
                                                overflow: "hidden",
                                                mb: 0.5,
                                            }}
                                        >
                                            <ListItemButton>
                                                <ListItemAvatar sx={{ minWidth: 40 }}>
                                                    <Image
                                                        style={{ borderRadius: 6 }}
                                                        width={40}
                                                        height={40}
                                                        src={"/images/swap-vertical-bold (1).svg"}
                                                        alt="icon"
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    sx={{ marginLeft: 1.5 }}
                                                    primary="Search for Transaction"
                                                    secondary="View any transaction by pasting/entering the transaction hash"
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem
                                            component="div"
                                            disablePadding
                                            sx={{
                                                bgcolor: "background.paper",
                                                borderRadius: 1,
                                                overflow: "hidden",
                                                mb: 0.5,
                                            }}
                                        >
                                            <ListItemButton>
                                                <ListItemAvatar sx={{ minWidth: 40 }}>
                                                    <Image
                                                        style={{ borderRadius: 6 }}
                                                        width={40}
                                                        height={40}
                                                        src={"/images/wallet.svg"}
                                                        alt="icon"
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    sx={{ marginLeft: 1.5 }}
                                                    primary="Search for Addresses"
                                                    secondary="View a contract or a wallet by entering the address"
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                    </Collapse>
                                </>
                            ) : null}
                            <List component="div" disablePadding>
                                {Object.keys(rawSearchData).length > 0 ? (
                                    // searchData.map(
                                    // 	({ icon, address, id, networkName, values }: any) => (
                                    // 		<DataGroup
                                    // 			icon={icon}
                                    // 			address={address}
                                    // 			name={networkName}
                                    // 			values={values}
                                    // 			key={id}
                                    // 		/>
                                    // 	)
                                    // )
                                    keys.map((net: any, index: any) => (
                                        <DataGroup
                                            icon={NETWORK_ICON_MAP[net]}
                                            name={NETWORK_MAP[net]?.label}
                                            data={rawSearchData[net]}
                                            network={net}
                                            key={index}
                                            handleClose={handleClose}
                                        />
                                    ))
                                ) : (
                                    <ClipLoader
                                        color={"#fff"}
                                        loading={loading}
                                        cssOverride={override}
                                        size={50}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />
                                )}
                            </List>
                        </Box>
                    </Fade>
                )}
            </Popper>
        </Box>
    );
}

export default Searchbar;
