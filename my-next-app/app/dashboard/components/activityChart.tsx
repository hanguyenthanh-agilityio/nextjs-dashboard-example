"use client";

import { Activity } from "@/types/common";
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";

const ActivityChart = ({ data = [] }: { data: Activity[] }) => {
  // Find the element with the largest value to bold the corresponding column
  const maxValue = Math.max(...data.map((i) => i.value));

  return (
    <div className="h-[500px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap="20%">
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            className="text-sm text-[#303030]"
          />
          <Bar dataKey="value" radius={[20, 20, 20, 20]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.value === maxValue ? "#3B82F6" : "#BFDBFE"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
