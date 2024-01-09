export const shortenString = (str: string) => {
    if (str == undefined || str == "" || str.length < 8) return str;
    return str.slice(0, 4) + "..." + str.slice(str.length - 4, str.length);
};

export function getSymbol(network: string): string {
    if (network == "goerli") return "ETH";
    else if (network == "mainnet") return "ETH";
    else if (network == "mumbai") return "MATIC";
    else if (network == "optimism-goerli") return "ETH";
    else if (network == "matic") return "MATIC";
    else if (network == "fuse") return "FUSE";
    else return "ETH";
}

export const getExplorerLogo = (network: string) => {
    if (network == "fuse") return "/images/blockscout_logo.svg";
    else return "/images/graph.svg";
};

export type fee = {
    value: string;
    gas: {
        children: string;
        color: string;
    };
};

export const getFee = (amount: number, network: string): fee => {
    let gasFee: number = amount;
    let fee: fee = {
        value: "0",
        gas: {
            children: getCurrencySymbol(gasFee, network),
            color: "success",
        },
    };
    if (gasFee > 10 ** 13) {
        fee.value = (gasFee / 10 ** 18).toFixed(4).toString();
    } else if (gasFee > 10 ** 6) {
        fee.value = (gasFee / 10 ** 9).toFixed(4).toString();
    } else {
        fee.value = gasFee?.toString();
    }
    return fee;
};

export const getCurrencySymbol = (amount: number, network: string): string => {
    let gasFee: number = amount;
    if (gasFee > 10 ** 13) {
        return getSymbol(network);
    } else if (gasFee > 10 ** 6) {
        return "GWEI";
    } else {
        return "WEI";
    }
};
