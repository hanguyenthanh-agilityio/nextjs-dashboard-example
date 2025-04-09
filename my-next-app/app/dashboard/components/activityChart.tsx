"use client";

import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Mon", value: 60 },
  { name: "Tues", value: 55 },
  { name: "Wed", value: 40 },
  { name: "Thurs", value: 100 },
  { name: "Fri", value: 50 },
  { name: "Sat", value: 80 },
  { name: "Sun", value: 70 },
];

const ActivityChart = () => {
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
