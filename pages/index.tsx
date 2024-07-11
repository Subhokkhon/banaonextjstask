import type { NextPage } from "next";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";

const MyCues: NextPage = () => {
  return (
    <div className="w-full h-[768px] relative bg-grey-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-[24px] leading-[normal] tracking-[normal] text-left text-xl text-grey-darkest font-poppins">
      <div className="self-stretch h-12 relative max-w-full shrink-0 flex items-center justify-center">
        <img
          className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[7px] w-full [transform:scale(1.292)]"
          alt=""
          src="/nave-bar-responsive.svg"
        />
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[76px]">
        <div className="flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
            loading="lazy"
            alt=""
            src="/add.svg"
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <a className="[text-decoration:none] relative font-semibold text-[inherit]">
              Add Your Listing
            </a>
          </div>
        </div>
      </div>
      <main className="self-stretch flex flex-row items-start justify-start py-0 px-6">
        <section className="flex-1 flex flex-col items-start justify-start gap-[16px]">
          <FrameComponent1
            groupsBlack24dp11="/groups-black-24dp-1-1.svg"
            people="People"
            anIndividualOrOrganizatio="An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association."
          />
          <FrameComponent1
            groupsBlack24dp11="/place.svg"
            people="Place"
            anIndividualOrOrganizatio="An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus."
            propBorder="2px solid #77933c"
            propBackgroundColor="#fff"
          />
          <FrameComponent1
            groupsBlack24dp11="/product-2.svg"
            people="Product"
            anIndividualOrOrganizatio="An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit."
            propBorder="2px solid #c0504d"
            propBackgroundColor="#fff"
          />
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default MyCues;
