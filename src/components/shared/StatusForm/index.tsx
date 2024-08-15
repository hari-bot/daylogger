import React, { useState } from "react";
import FromButton from "../../base/FormButton";
import Typography from "../../base/Typography";

interface StatusFormProps {
  onAddTask: (
    date: string,
    task: {
      time: string;
      title: string;
      description: string;
      borderColor: string;
    }
  ) => void;
}

function StatusForm({ onAddTask }: StatusFormProps) {
  const now = new Date();
  const currentDate = now.toISOString().split("T")[0];
  const currentTime = now.toTimeString().split(" ")[0].substring(0, 5);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const newTask = {
      time: currentTime,
      title,
      description,
      borderColor:
        parseInt(currentTime.split(":")[0]) >= 12 ? "red-500" : "green-500",
    };

    onAddTask(currentDate, newTask);

    setTitle("");
    setDescription("");
  }

  return (
    <div className="w-4/12 bg-[#f2f5fc] p-10 border-l border-gray-300">
      <Typography variant="heading3">Add Your Status</Typography>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            rows={4}
            required
          />
        </div>
        <FromButton type="submit" className="w-full">
          Submit
        </FromButton>
      </form>
    </div>
  );
}

export default StatusForm;
