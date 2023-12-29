export const shortenString = (str: string) => {
    if (str == undefined || str == "" || str.length < 8) return str;
    return str.slice(0, 4) + "..." + str.slice(str.length - 4, str.length);
};
