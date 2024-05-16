import { Box, Grid, Alert, LinearProgress } from "@mui/material";
import { FC, ReactElement } from "react";
// import { format } from "date-fns";
import { TaskCounter } from "../taskCounter/taskCounter";
import { Task } from "../task/task";
import { useQuery } from "@tanstack/react-query";
import { sendApiRequest } from "../../helpers/sendApiRequest";
import { ITaskApi } from "./interfaces/ITaskApi";
import { Status } from "../createTaskForm/enums/Status";

export const TaskArea: FC = (): ReactElement => {
  const { error, isLoading, data, refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      return await sendApiRequest<ITaskApi[]>(
        "http://localhost:3200/tasks",
        "GET"
      );
    },
  });

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status Of Your Tasks
          {/* {format(new Date(), "PPPP")} */}
        </h2>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid item display="flex" flexDirection="column" md={8} xs={10}>
          <>
            {error && (
              <Alert severity="error">
                There was an error fetching your tasks
              </Alert>
            )}

            {!error && Array.isArray(data) && data.length === 0 && (
              <Alert severity="warning">
                You do not have any tasks created yet
              </Alert>
            )}

            {isLoading ? (
              <LinearProgress />
            ) : (
              Array.isArray(data) &&
              data.length > 0 &&
              data.map((each, index) => {
                return each.status === Status.todo ||
                  each.status === Status.inProgress ? (
                  <Task
                    key={index + each.priority}
                    id={each.id}
                    title={each.title}
                    description={each.description}
                    priority={each.priority}
                    status={each.status}
                    date={new Date(each.date)}
                  />
                ) : (
                  false
                );
              })
            )}
          </>
        </Grid>
      </Grid>
    </Grid>
  );
};
