import { Priority } from "../../createTaskForm/enums/Priority";
import { Status } from "../../createTaskForm/enums/Status";

export interface ITaskApi {
  id: string;
  data: string;
  title: string;
  description: string;
  date: Date;
  status: `${Status}`;
  priority: `${Priority}`;
}
