import { useState } from "react";
import Sidebar from "../../components/shared/SideBar";
import CurrentDateDisplay from "../../components/shared/CurrentDateDisplay";
import DaySection from "../../components/custom/DaySection";
import ScrollableSection from "../../components/base/ScrollableSection";
import Typography from "../../components/base/Typography";
import StatusForm from "../../components/shared/StatusForm";

interface Task {
  time: string;
  title: string;
  description: string;
}

function HomePage() {
  const [tasks, setTasks] = useState<Record<string, Task[]>>({
    "2024-08-14": [
      {
        time: "09:00",
        title: "Creating Status App",
        description: "Started working on the status application.",
      },
    ],
    "2024-08-13": [
      {
        time: "10:00",
        title: "Backend Integration",
        description: "Started integrating the backend with the application.",
      },
      {
        time: "17:00",
        title: "Testing and Bug Fixes",
        description: "Performed testing and fixed bugs in the application.",
      },
    ],
    "2024-08-12": [
      {
        time: "11:00",
        title: "Finalizing the API",
        description: "Finalized the API structure and endpoints.",
      },
      {
        time: "18:00",
        title: "Deployment Preparation",
        description: "Prepared the application for deployment.",
      },
    ],
  });

  function handleAddTask(date: string, task: Task) {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [date]: [...(prevTasks[date] || []), task],
    }));
    console.log(tasks);
  }

  return (
    <div className="flex h-screen">
      <Sidebar />

      {/* Main Section */}
      <div className="w-8/12 bg-[#f8f9fc] p-10 flex flex-col overflow-hidden">
        {/* Heading */}
        <div className="mb-20">
          <Typography variant="heading2">Welcome, Hariharan</Typography>
          <CurrentDateDisplay />
        </div>

        <ScrollableSection>
          {Object.keys(tasks).map((date) => (
            <DaySection key={date} date={date} tasks={tasks[date]} />
          ))}
        </ScrollableSection>
      </div>

      {/* Form Section */}
      <StatusForm onAddTask={handleAddTask} />
    </div>
  );
}

export default HomePage;
