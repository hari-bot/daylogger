import React from "react";

type Options = {
  day: "2-digit" | "numeric";
  month: "2-digit" | "long";
  year: "numeric";
};

const CurrentDateDisplay: React.FC = () => {
  const date = new Date();

  const options: Options = { day: "2-digit", month: "long", year: "numeric" };

  const formattedDate = date.toLocaleDateString("en-GB", options);

  return (
    <div className="bg-[#EDF4FC] text-blue-500 text-sm font-semibold rounded-full p-2 inline-block">
      {formattedDate}
    </div>
  );
};

export default CurrentDateDisplay;
