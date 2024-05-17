import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { FC, ReactElement, useContext, useEffect, useState } from "react";
import { TaskTitleField } from "./_taskTitleField";
import { TaskDescriptionField } from "./_taskDescriptionField";
import { TaskDateField } from "./_taskDateField";
import { TaskSelectField } from "./_taskSelectField";
import { Status } from "./enums/Status";
import { Priority } from "./enums/Priority";
import { useMutation } from "@tanstack/react-query";
import { sendApiRequest } from "../../helpers/sendApiRequest";
import { ICreateTask } from "../taskArea/interfaces/ICreateTask";
import { SnackbarUtilities } from "../../helpers/snackbarManager";
import { TaskStatusChangedContext } from "../../context";

export const CreateTaskForm: FC = (): ReactElement => {
  // Declare states
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const tasksUpdatedContext = useContext(TaskStatusChangedContext);

  // Create task mutation
  const createTaskMutation = useMutation({
    mutationFn: (data: ICreateTask) =>
      sendApiRequest("http://localhost:3200/tasks", "POST", data),
  });

  function createTaskHandler() {
    if (!title || !date || !description) {
      return;
    }

    const task: ICreateTask = {
      title,
      description,
      date: date.toISOString().slice(0, 10), //get date like this "YYYY-MM-DD"
      status,
      priority,
    };

    createTaskMutation.mutate(task);
  }

  // Manage side effects
  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      setShowSuccess(true);
      tasksUpdatedContext.toggle();
    }

    const successTimeout = setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    return () => clearTimeout(successTimeout);
  }, [createTaskMutation.isSuccess]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>

      <Stack sx={{ width: "100%" }} spacing={2}>
        <TaskTitleField
          disabled={createTaskMutation.isPending}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TaskDescriptionField
          disabled={createTaskMutation.isPending}
          onChange={(e) => setDescription(e.target.value)}
        />

        <TaskDateField
          disabled={createTaskMutation.isPending}
          value={date}
          onChange={(date) => setDate(date)}
        />

        <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
          <TaskSelectField
            disabled={createTaskMutation.isPending}
            label="Status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            items={[
              { value: Status.todo, label: Status.todo.toUpperCase() },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
          />

          <TaskSelectField
            disabled={createTaskMutation.isPending}
            label="Priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as string)}
            items={[
              { value: Priority.high, label: Priority.high.toUpperCase() },
              {
                value: Priority.normal,
                label: Priority.normal.toUpperCase(),
              },
              {
                value: Priority.low,
                label: Priority.low.toUpperCase(),
              },
            ]}
          />
        </Stack>
        {createTaskMutation.isPending && <LinearProgress />}
        <Button
          disabled={!title || !description} //as date, status and priority are set by default, we only need to activate the button when we write the tittle and description (required)
          onClick={createTaskHandler}
          variant="contained"
        >
          Create A Task
        </Button>
        {showSuccess && (
          <Alert>
            <AlertTitle sx={{ width: "100%" }}>Success</AlertTitle>
            The task has been created successfully
          </Alert>
        )}
      </Stack>
    </Box>
  );
};
