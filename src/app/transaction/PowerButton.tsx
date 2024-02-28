import { POWERED_BY_LOGO_MAP } from "@/constants/constants";

export const PowerButton = ({ sponsoredBy }: any) => {
    if (sponsoredBy == "" || sponsoredBy == undefined) return null;
    return (
        <div className="md:px-[16px] px-0 md:py-[8px] py-0">
            <p className="text-[10px] text-[#455A64] contents" style={{ display: "contents" }}>
                {/* {addressMapping?.[item] && POWERED_BY_LOGO_MAP?.[addressMapping?.[item]?.company.toLowerCase()] && ( */}
                <span
                    className="-m-5 text-bluegrey-300 text-[10px] leading-5 flex items-center gap-2 font-normal"
                    style={{ display: "flex", alignItems: "center" }}
                >
                    Sponsored By
                    <img
                        src={POWERED_BY_LOGO_MAP?.[sponsoredBy.toLowerCase()]?.small}
                        style={{ marginLeft: "10px", height: 25, width: 25 }}
                        alt=""
                    />
                </span>
                {/* )} */}
            </p>
        </div>
    );
};
