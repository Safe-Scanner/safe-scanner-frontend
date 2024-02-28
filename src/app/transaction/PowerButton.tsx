import { POWERED_BY_LOGO_MAP } from "@/constants/constants";

export const PowerButton = ({ sponsoredBy }: any) => {
    if (sponsoredBy === "") return null;
    return (
        <div className="md:px-[16px] px-0 md:py-[8px] py-0">
            <p className="text-[10px] text-[#455A64]">
                {/* {addressMapping?.[item] && POWERED_BY_LOGO_MAP?.[addressMapping?.[item]?.company.toLowerCase()] && ( */}
                <span className="text-bluegrey-300 text-[10px] leading-5 flex items-center gap-2 font-normal">
                    Sponsored By
                    <img src={POWERED_BY_LOGO_MAP?.[sponsoredBy.toLowerCase()]?.small} style={{ height: 20, width: 20 }} alt="" />
                </span>
                {/* )} */}
            </p>
        </div>
    );
};
