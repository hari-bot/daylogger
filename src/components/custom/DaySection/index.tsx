import React from "react";
import TaskCard from "../TaskCard";

type Task = {
  time: string;
  title: string;
  description: string;
};

type DaySectionProps = {
  date: string;
  tasks: Task[];
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
};

const getDayName = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { weekday: "short" };
  return date.toLocaleDateString(undefined, options);
};

const isToday = (dateString: string): boolean => {
  const today = new Date();
  const date = new Date(dateString);
  return (
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate()
  );
};

function DaySection({ date, tasks }: DaySectionProps) {
  const formattedDate = formatDate(date);
  const dayName = getDayName(date);
  const today = isToday(date);

  return (
    <div className="mb-10">
      <h1
        className={`text-2xl font-semibold pb-3 mb-6 border-b border-gray-200 ${
          today ? "font-bold" : "text-gray-600 "
        }`}
      >
        <span className="text-gray-600">{dayName}</span>, {formattedDate}
      </h1>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          time={task.time}
          title={task.title}
          description={task.description}
        />
      ))}
    </div>
  );
}

export default DaySection;
