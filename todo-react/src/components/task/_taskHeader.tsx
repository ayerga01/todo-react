import { Box, Chip, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { ITaskHeader } from "./interfaces/ITaskHeader";
import { format } from "date-fns";
import PropTypes from "prop-types";

export const TaskHeader: FC<ITaskHeader> = (props): ReactElement => {
  // Destructure props
  const { title = "Default title", date = new Date() } = props;

  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={3}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={format(date, "PPP")}></Chip>
      </Box>
    </Box>
  );
};

TaskHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};
