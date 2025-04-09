interface StatisticCardProps {
  label: string;
  value: number;
}

const StatisticCard = ({ label, value }: StatisticCardProps) => {
  return (
    <div className="bg-blue-50 rounded-2xl p-4 flex flex-col justify-between min-h-[120px]">
      <p className="max-w-[100px] text-[#8EA3B7] text-base font-medium leading-tight">
        {label}
      </p>
      <div className="flex items-center justify-between mt-4 space-x-1">
        <div className="h-7 rounded-[5px] border-2 border-solid border-[#369FFF]"></div>
        <span className="text-[#006ED3] text-[40px] font-bold tracking-wide">
          {/* Make sure the value always displays 2 digits. If value < 10, it will add a 0 in front */}
          {String(value).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default StatisticCard;
