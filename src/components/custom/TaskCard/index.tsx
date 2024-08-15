import React from "react";

type TaskCardProps = {
  time: string;
  title: string;
  description: string;
};

function TaskCard({ time, title, description }: TaskCardProps) {
  const getBorderColor = (time: string): string => {
    const timeParts = time.split(" ");
    const timeString = timeParts[0];
    const period = timeParts[1]?.toLowerCase();
    const hours = parseInt(timeString.split(":")[0], 10);

    if (period === "pm" || hours >= 12) {
      return "border-red-500";
    } else {
      return "border-green-500";
    }
  };

  const borderColorClass = getBorderColor(time);

  return (
    <div className="flex items-start bg-white rounded-lg shadow-lg p-6 space-x-4 hover:shadow-xl mb-4">
      <div className="font-semibold text-lg">
        <span>{time}</span>
      </div>
      <div className={`flex-1 border-l-2 pl-4 ${borderColorClass}`}>
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}

export default TaskCard;
