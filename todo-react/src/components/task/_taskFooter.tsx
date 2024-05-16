import { Box, Switch, Button, FormControlLabel } from "@mui/material";
import { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import { ITaskFooter } from "./interfaces/ITaskFooter";
import { Status } from "../createTaskForm/enums/Status";

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  // Destructure props
  const {
    id,
    status,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            onChange={(e) => onStatusChange(e, id)}
            color="warning"
            defaultChecked={status === Status.inProgress}
          />
        }
      />
      <Button
        onClick={(e) => onClick(e, id)}
        variant="contained"
        color="success"
        size="small"
        sx={{ color: "white" }}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
};
