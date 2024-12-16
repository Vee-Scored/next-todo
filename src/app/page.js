
import CreateTaskForm from "@/components/CreateTaskForm";
import SkeLetonLoader from "@/components/SkeLetonLoader";
//import TaskLIstContainer from "@/components/TaskLIstContainer";
const TaskLIstContainer = lazy(()=> import("@/components/TaskLIstContainer"))
import Image from "next/image";
import { lazy, Suspense } from "react";

export default function Home() {
  return (
    <div className="p-5 mx-auto max-w-lg">
      <h2>Todo App</h2>
      <CreateTaskForm/>
      <Suspense fallback={<SkeLetonLoader/>}>
        <TaskLIstContainer/>
      </Suspense>
    </div>
  )
}
