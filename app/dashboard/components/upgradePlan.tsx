import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const UpgradePlan = () => (
  <div className="w-[168px] h-[106px] p-5 rounded-[18px] bg-[#ebf6ff] my-5 md:my-0">
    <h1 className="font-[700] text-sm pb-5">Upgrade your plan</h1>
    <div className="flex justify-between items-center text-[#369FFF]">
      <h1>
        Go to <span className="font-bold">PRO</span>
      </h1>
      <Link
        href="/"
        className="border p-2.5 rounded-[10px] border-solid border-[#369FFF]"
      >
        <ChevronDoubleRightIcon width={12} height={10} />
      </Link>
    </div>
  </div>
);

export default UpgradePlan;
