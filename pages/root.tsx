import type { NextPage } from "next";

const Root: NextPage = () => {
  return (
    <div className="w-full relative rounded-lg bg-purple-1 box-border flex flex-col items-start justify-start py-[21px] px-3.5 gap-[24px] leading-[normal] tracking-[normal] text-left text-xl text-grey-white font-poppins border-[2px] border-solid border-purple-1">
      <div className="w-[360px] h-[175px] relative rounded-lg bg-purple-1 box-border hidden max-w-full border-[2px] border-solid border-purple-1" />
      <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[8px]">
        <img
          className="h-10 w-10 relative overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src="/groups-black-24dp-1-13.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[69px] z-[1]">
            People
          </a>
        </div>
      </div>
      <div className="self-stretch relative text-sm whitespace-pre-wrap z-[1]">
        An Individual or Organization. Teacher, Coach, Professional or Online
        Seller. Company, Business or Association.
      </div>
    </div>
  );
};

export default Root;
