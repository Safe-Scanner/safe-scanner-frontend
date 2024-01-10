export const NETWORK_MAP = {
	matic: {
		label: "Polygon",
		key: "matic",
		icon: "/images/polygon-icon.svg",
		iconPathInverted: "/images/polygon-icon.svg",
		isNew: true,
	},
	oeth: {
		label: "Ethereum Mainnet",
		key: "eth",
		icon: "/images/ethereum-logo-rainbow.svg",
		iconPathInverted: "/images/ethereum-logo-rainbow.svg",
		isNew: true,
	},
	eth: {
		label: "Ethereum Mainnet",
		key: "eth",
		icon: "/images/ethereum-logo-rainbow.svg",
		iconPathInverted: "/images/ethereum-logo-rainbow.svg",
		isNew: true,
	},
	base: {
		label: "Base",
		key: "base",
		icon: "/images/base-logo.svg",
		iconPathInverted: "/images/base-logo.svg",
		isNew: true,
	},
	arb1: {
		label: "Arbitrum One",
		key: "arb1",
		icon: "/images/arbitrum-logo.svg",
		iconPathInverted: "/images/arbitrum-logo.svg",
		isNew: true,
	},
	avax: {
		label: "Avalanche Mainnet",
		key: "avax",
		icon: "/images/avalanche-logo-red.svg",
		iconPathInverted: "/images/avalanche-logo-red.svg",
		isNew: true,
	},
	sep: {
		label: "Arbitrum Sepolia",
		key: "sep",
		icon: "/images/arbitrum-logo.svg",
		iconPathInverted: "/images/arbitrum-logo.svg",
		isNew: true,
	},
	gno: {
		name: "Gnosis",
		key: "gno",
		iconPath: "/images/gnosis-logo.svg",
		iconPathInverted: "/images/gnosis-logo.svg",
	},
	bnb: {
		label: "Binance Smart Chain",
		key: "bnb",
		icon: "/images/bsc-logo.svg",
		iconPathInverted: "/images/bsc-logo.svg",
		isNew: true,
	},
};

export const NETWORK_LIST = [
	{
		name: "Polygon",
		key: "matic",
		iconPath: "/images/polygon-icon.svg",
		iconPathInverted: "/images/polygon-icon.svg",
	},
	{
		name: "Optimism Mainnet",
		key: "oeth",
		iconPath: "/images/icon-container (6).svg",
		iconPathInverted: "/images/icon-container (6).svg",
	},
	{
		name: "Ethereum Mainnet",
		key: "eth",
		iconPath: "/images/ethereum-logo-rainbow.svg",
		iconPathInverted: "/images/ethereum-logo-rainbow.svg",
	},
	{
		name: "Fuse",
		key: "fuse",
		iconPath: "/images/fuse-logo.svg",
		iconPathInverted: "/images/fuse-logo.svg",
	},
	{
		name: "Base",
		key: "base",
		iconPath: "/images/base-logo.svg",
		iconPathInverted: "/images/base-logo.svg",
	},
	{
		name: "Optimism Goerli",
		key: "optimism-goerli",
		iconPath: "/images/icon-container (6).svg",
		iconPathInverted: "/images/icon-container (6).svg",
	},
	{
		name: "Arbitrum One (Mainnet)",
		key: "arb1",
		iconPath: "/images/arbitrum-logo.svg",
		iconPathInverted: "/images/arbitrum-logo.svg",
	},
	{
		name: "Goerli",
		key: "goerli",
		iconPath: "/images/eth-diamond-purple.svg",
		iconPathInverted: "/images/eth-diamond-purple.svg",
	},
	{
		name: "Avalanche Mainnet (AVAX)",
		key: "avax",
		iconPath: "/images/avalanche-logo-red.svg",
		iconPathInverted: "/images/avalanche-logo-red.svg",
	},
	{
		name: "Mumbai",
		key: "mumbai",
		iconPath: "/images/polygon-mumbai-icon.svg",
		iconPathInverted: "/images/polygon-mumbai-inverted.svg",
	},
	{
		name: "Arbitrum Goerli",
		key: "arbitrum-goerli",
		iconPath: "/images/arbitrum-logo.svg",
		iconPathInverted: "/images/arbitrum-logo.svg",
	},
	{
		name: "Arbitrum Sepolia",
		key: "sep",
		iconPath: "/images/arbitrum-logo.svg",
		iconPathInverted: "/images/arbitrum-logo.svg",
	},
	{
		name: "Sepolia",
		key: "sepolia",
		iconPath: "/images/eth-diamond-purple.svg",
		iconPathInverted: "/images/eth-diamond-purple.svg",
	},
	{
		name: "Avalanche Fuji",
		key: "avalanche-fuji",
		iconPath: "/images/avalanche-logo-red.svg",
		iconPathInverted: "/images/avalanche-logo-red.svg",
	},
	{
		name: "Fantom",
		key: "fantom",
		iconPath: "/images/fantom-logo.svg",
		iconPathInverted: "/images/fantom-logo.svg",
	},
	{
		name: "Fantom Testnet",
		key: "fantom-testnet",
		iconPath: "/images/fantom-logo.svg",
		iconPathInverted: "/images/fantom-logo.svg",
	},
	{
		name: "Gnosis",
		key: "gno",
		iconPath: "/images/gnosis-logo.svg",
		iconPathInverted: "/images/gnosis-logo.svg",
	},
	{
		name: "Base Testnet",
		key: "base-testnet",
		iconPath: "/images/base-logo.svg",
		iconPathInverted: "/images/base-logo.svg",
	},
	{
		name: "Binance Smart Chain",
		key: "bnb",
		iconPath: "/images/bsc-logo.svg",
		iconPathInverted: "/images/bsc-logo.svg",
	},
	{
		name: "BNB Testnet",
		key: "bnb-testnet",
		iconPath: "/images/bsc-logo.svg",
		iconPathInverted: "/images/bsc-logo.svg",
	},
	// {
	//     name: 'Celo Alfajores',
	//     key: 'celo-alfajores',
	//     iconPath: '/images/Celo_logo_black.svg',
	//     iconPathInverted: '/images/celo_logo.svg',
	// },
];

export const NETWORKS_WHITELISTED_FOR_NO_LOGIN = [
	"mainnet",
	"goerli",
	"sepolia",
	"optimism-goerli",
	"optimism",
	"fuse",
];

export const PAGE_SIZE_LIST: number[] = [10, 25, 50, 100];

interface NETWORK_ICON_MAP {
	[key: string]: string;
}

export const NETWORK_ICON_MAP: NETWORK_ICON_MAP = {
	mainnet: "/images/ethereum-logo-rainbow.svg",
	eth: "/images/ethereum-logo-rainbow.svg",
	goerli: "/images/eth-diamond-purple.svg",
	sepolia: "/images/eth-diamond-purple.svg",
	matic: "/images/polygon-icon.svg",
	mumbai: "/images/polygon-mumbai-icon.svg",
	"optimism-goerli": "/images/icon-container (6).svg",
	optimism: "/images/icon-container (6).svg",
	"arbitrum-one": "/images/arbitrum-logo.svg",
	"arbitrum-goerli": "/images/arbitrum-logo.svg",
	"arbitrum-sepolia": "/images/arbitrum-logo.svg",
	avalanche: "/images/avalanche-logo-red.svg",
	"avalanche-fuji": "/images/avalanche-logo-red.svg",
	fantom: "/images/fantom-logo.svg",
	"fantom-testnet": "/images/fantom-logo.svg",
	"base-testnet": "/images/base-logo.svg",
	base: "/images/base-logo.svg",
	gnosis: "/images/gnosis-logo.svg",
	bsc: "/images/bsc-logo.svg",
	"bnb-testnet": "/images/bsc-logo.svg",
	bnb: "/images/bsc-logo.svg",
	fuse: "/images/fuse-logo.svg",
	"celo-alfajores": "/images/Celo_logo_black.svg",
};

export const NETWORK_SCANNER_MAP: { [key: string]: string } = {
	mainnet: "https://etherscan.io",
	goerli: "https://goerli.etherscan.io",
	sepolia: "https://sepolia.etherscan.io",
	mumbai: "https://mumbai.polygonscan.com",
	matic: "https://polygonscan.com",
	"optimism-goerli": "https://goerli-optimism.etherscan.io",
	"arbitrum-one": "https://arbiscan.io",
	"arbitrum-goerli": "https://goerli.arbiscan.io",
	"arbitrum-sepolia": "https://sepolia.arbiscan.io",
	optimism: "https://optimistic.etherscan.io",
	avalanche: "https://snowtrace.io",
	"base-testnet": "https://goerli.basescan.org",
	fantom: "https://ftmscan.com/",
	"fantom-testnet": "https://testnet.ftmscan.com",
	gnosis: "https://gnosisscan.io",
	bsc: "https://bscscan.com",
	"bnb-testnet": "https://testnet.bscscan.com",
	"avalanche-fuji": "https://testnet.snowtrace.io",
	fuse: "https://explorer.fuse.io",
	base: "https://basescan.org",
	"celo-alfajores": "https://alfajores.celoscan.io",
};

export const POWERED_BY_LOGO_MAP: { [id: string]: { [id: string]: string } } = {
	pimlico: {
		small: "/images/pimlico.svg",
		wide: "",
	},
	biconomy: {
		small: "/images/Biconomy-small.svg",
		wide: "/images/Biconomy-wide.svg",
	},
	candide: {
		small: "/images/candide.svg",
		wide: "/images/candide.svg",
	},
};

export const fallBack = "fallback";
