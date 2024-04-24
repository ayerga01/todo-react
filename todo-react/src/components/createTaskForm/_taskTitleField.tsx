import { FC, ReactElement } from "react";
import { TextField } from "@mui/material";
import { ITextField } from "./interfaces/ITextField";
import PropTypes from "prop-types";

export const TaskTitleField: FC<ITextField> = (props): ReactElement => {
  // Destructure props
  const { onChange = (e) => console.log(e), disabled = false } = props;

  return (
    <TextField
      id="title"
      name="title"
      label="Task Title"
      placeholder="Tasktitle"
      variant="outlined"
      size="small"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskTitleField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
