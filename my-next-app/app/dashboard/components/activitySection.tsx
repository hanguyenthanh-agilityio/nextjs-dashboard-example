"use client";

import { useState } from "react";
import clsx from "clsx";
import ActivityChart from "./activityChart";

const tabs = ["Day", "Week", "Month"];

const ActivitySection = () => {
  // State saves the selected tab, default is Week
  const [activeTab, setActiveTab] = useState("Week");

  return (
    <div className="flex flex-col items-center justify-between mb-4">
      <div className="flex justify-between items-center w-full pb-15    ">
        <h2 className="text-2xl text-[#303030] font-semibold">Activity</h2>
        <div className="space-x-4 text-sm font-medium text-[#bdbdbd]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                activeTab === tab ? "text-blue-500" : "hover:text-gray-600"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <ActivityChart />
    </div>
  );
};

export default ActivitySection;
