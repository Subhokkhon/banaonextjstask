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
    <div
      className={`self-stretch rounded-lg bg-grey-white flex flex-col items-start justify-start py-[13px] px-3.5 gap-[24px] text-left text-lg text-grey-darkest font-poppins border-[2px] border-solid border-purple-1 ${className}`}
      style={frameDivStyle}
    >
      <div className="w-[312px] h-[142px] relative rounded-lg bg-grey-white box-border hidden border-[2px] border-solid border-purple-1" />
      <div className="flex flex-row items-start justify-start gap-[8px]">
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
    </div>
  );
};

export default FrameComponent1;
