import Image from "next/image";
import SidebarNav from "./sidebarNav";
import UpgradePlan from "./upgradePlan";

const Sidebar = () => (
  <div className="flex flex-col h-full items-center py-10 justify-between">
    <Image src="/images/mainLogo.svg" width={121} height={37} alt="Main Logo" />
    <div className="flex md:flex-col w-full px-[35px]">
      <SidebarNav />
    </div>
    <Image
      className="hidden md:block"
      src="/images/girlLogo.svg"
      width={157}
      height={190}
      alt="Girl Logo"
    />
    <UpgradePlan />
  </div>
);

export default Sidebar;
