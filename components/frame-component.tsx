import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-lg bg-grey-white flex flex-col items-start justify-start py-[13px] px-3.5 gap-[24px] text-left text-lg text-grey-darkest font-poppins border-[2px] border-solid border-blue-1 ${className}`}
    >
      <div className="w-[312px] h-[142px] relative rounded-lg bg-grey-white box-border hidden border-[2px] border-solid border-blue-1" />
      <div className="flex flex-row items-start justify-start gap-[8px]">
        <img
          className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px] z-[1]"
          loading="lazy"
          alt=""
          src="/program.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <h3 className="m-0 relative text-inherit leading-[26px] font-semibold font-inherit inline-block min-w-[81px] z-[1]">
            Program
          </h3>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start relative text-xs">
        <div className="flex-1 relative whitespace-pre-wrap z-[1]">
          An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition,
          Performance or Competition.
        </div>
        <div className="h-8 w-8 absolute !m-[0] right-[-19px] bottom-[-16px] z-[2] flex items-center justify-center">
          <img
            className="h-full w-full z-[2] object-contain absolute left-[0px] top-[8px] [transform:scale(1.75)]"
            loading="lazy"
            alt=""
            src="/group-1210.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
