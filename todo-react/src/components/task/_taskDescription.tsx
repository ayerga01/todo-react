import { Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { ITaskDescription } from "./interfaces/ITaskDescription";
import PropTypes from "prop-types";

export const TaskDescription: FC<ITaskDescription> = (props): ReactElement => {
  // Destructure props
  const { description = "Default Description" } = props;

  return (
    <Box width="100%">
      <Typography variant="body1">{description}.</Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string,
};
