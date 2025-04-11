import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Planning } from "@/lib/definitions";

const PlanningItem = ({ icon, iconBg, iconColor, title, time }: Planning) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl shadow-sm">
      <div className="flex items-center gap-4">
        <div
          className={`p-3 rounded-xl ${iconBg} flex items-center justify-center`}
        >
          <Image
            src={icon}
            alt="icon"
            width={24}
            height={24}
            className={iconColor}
          />
        </div>
        <div>
          <p className="font-medium text-xs text-[#303030]">{title}</p>
          <p className="text-xs text-[#bdbdbd] pt-[5px]">{time}</p>
        </div>
      </div>
      <div className="">
        <EllipsisVerticalIcon
          className="text-gray-400"
          width={25}
          height={25}
        />
      </div>
    </div>
  );
};

export default PlanningItem;
