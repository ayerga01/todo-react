import { Box } from "@mui/material";
import { FC, ReactElement } from "react";
import { TaskHeader } from "./_taskHeader";
import { TaskDescription } from "./_taskDescription";
import { TaskFooter } from "./_taskFooter";
import { ITask } from "./interfaces/ITask";
import { Priority } from "../createTaskForm/enums/Priority";
import { Status } from "../createTaskForm/enums/Status";
import PropTypes from "prop-types";
import { renderPriorityBorderColor } from "./helpers/renderPriorityBorderColor";

export const Task: FC<ITask> = (props): ReactElement => {
  // Destructure props
  const {
    title = "Test Title",
    date = new Date(),
    description = "Test Description",
    priority = Priority.normal,
    status = Status.completed,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      p={3}
      mb={4}
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter onClick={onClick} onStatusChange={onStatusChange} />
    </Box>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  priority: PropTypes.string,
  status: PropTypes.string,
};
