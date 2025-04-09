import Image from "next/image";
import { BellAlertIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const UserProfile = () => (
  <div className="flex items-center justify-between with-full gap-6 md:pt-10">
    {/* Alert */}
    <div className="relative">
      <BellAlertIcon className="w-6 h-6 text-gray-500" />
      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
    </div>

    {/* User profile */}
    <div className="flex items-center bg-blue-50 px-3 py-2 rounded-full gap-3">
      <Image
        src="/images/Profile.png"
        alt="Avatar"
        width={35}
        height={35}
        className="rounded-xl object-cover"
      />
      <div className="flex flex-col">
        <span className="font-medium text-sm text-black">Bruno Fernandes</span>
        <span className="text-xs text-blue-500">Basic Plan</span>
      </div>
      <ChevronDownIcon className="w-4 h-4 text-gray-600" />
    </div>
  </div>
);

export default UserProfile;
