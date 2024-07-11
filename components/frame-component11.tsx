import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  className?: string;
  groupsBlack24dp11?: string;
  people?: string;
  anIndividualOrOrganizatio?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  groupsBlack24dp11,
  people,
  anIndividualOrOrganizatio,
  propBorder,
  propBackgroundColor,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorder, propBackgroundColor]);

  return (
    <section
      className={`self-stretch rounded-lg bg-purple-1 flex flex-col items-start justify-start p-4 gap-[24px] text-left text-lg text-grey-white font-poppins ${className}`}
      style={backgroundStyle}
    >
      <div className="w-[312px] h-[142px] relative rounded-lg bg-purple-1 hidden" />
      <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[8px]">
        <img
          className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px] z-[1]"
          loading="lazy"
          alt=""
          src={groupsBlack24dp11}
        />
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <a className="[text-decoration:none] relative leading-[26px] font-semibold text-[inherit] inline-block min-w-[62px] z-[1]">
            {people}
          </a>
        </div>
      </div>
      <div className="self-stretch relative text-xs whitespace-pre-wrap z-[1]">
        {anIndividualOrOrganizatio}
      </div>
    </section>
  );
};

export default FrameComponent1;
