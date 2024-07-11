import type { NextPage } from "next";

const Root1: NextPage = () => {
  return (
    <div className="w-full relative rounded-lg bg-red box-border flex flex-col items-start justify-start py-[21px] pr-[13px] pl-3.5 gap-[24px] leading-[normal] tracking-[normal] text-left text-xl text-grey-white font-poppins border-[2px] border-solid border-red">
      <div className="w-[360px] h-[175px] relative rounded-lg bg-red box-border hidden max-w-full border-[2px] border-solid border-red" />
      <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[8px]">
        <img
          className="h-10 w-10 relative overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src="/5402359-basket-cart-ecommerce-shopping-buy-icon-1.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[80px] z-[1]">
            Product
          </a>
        </div>
      </div>
      <div className="self-stretch relative text-sm whitespace-pre-wrap z-[1]">
        An Item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher.
        Equipment, Instrument or Activity Kit.
      </div>
    </div>
  );
};

export default Root1;
