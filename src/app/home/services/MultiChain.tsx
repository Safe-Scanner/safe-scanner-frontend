"use client";
import FeatureItem from "@/components/template/FeatureItem";
import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import { NETWORK_MAP } from "@/constants/constants";

const multiChain = [
    {
        icon: "/images/brand-logo1.svg",
        label: "Optimism",
        isNew: true,
    },
    {
        icon: "/images/brand-logo1.svg",
        label: "Optimism Goerli",
        isNew: true,
    },
    {
        icon: "/images/brand-logo2.svg",
        label: "Ethereum Mainnet",
    },
    {
        icon: "/images/brand-logo2.svg",
        label: "Ethereum Goerli",
    },
    {
        icon: "/images/brand-logo3.svg",
        label: "Polygon",
    },
    {
        icon: "/images/brand-logo3.svg",
        label: "Polygon Mumbai",
    },
    {
        icon: "/images/brand-logo4.svg",
        label: "Arbitrum",
    },
    {
        icon: "/images/brand-logo4.svg",
        label: "Arbitrum Testnet",
    },
];

type NetworkInfo = {
    icon: string;
    iconPathInverted: string;
    isNew: boolean;
    key: string;
    label: string;
};

function MultiChain() {
    const [networks, setNetworks] = useState<any[]>([]);

    useEffect(() => {
        const networkMap = Object.values(NETWORK_MAP);
        setNetworks(networkMap);
    }, []);
    return (
        <FeatureItem title="Multi Chain" description="Supported blockchains & tech behind">
            <Stack direction="row" gap={1} flexWrap="wrap">
                {networks.map(({ icon, label, isNew }, index) => (
                    <Box key={index} sx={{ position: "relative", zIndex: 0 }}>
                        <Chip icon={<Box component="img" alt="" width={20} src={icon} />} label={label} color="white" />
                        {isNew && (
                            <Chip
                                sx={{
                                    position: "absolute",
                                    top: -12,
                                    right: -8,
                                    zIndex: 1,
                                }}
                                label="New"
                                size="small"
                                color="secondary"
                            />
                        )}
                    </Box>
                ))}
            </Stack>
            <Box>
                <Link href="/">
                    <Image width={131} height={31} alt="Powered by Safe" src="/images/safe-badge.svg" />
                </Link>
            </Box>
            <Box>
                <Button startIcon={<Image src="/images/file-code.svg" alt="" width={24} height={24} />} size="large" disabled={true}>
                    Read More About Tech
                </Button>
            </Box>
        </FeatureItem>
    );
}

export default MultiChain;
