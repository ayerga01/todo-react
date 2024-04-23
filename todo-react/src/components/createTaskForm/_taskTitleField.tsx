import { FC, ReactElement } from "react";
import { TextField } from "@mui/material";
import { ITextField } from "./interfaces/ITextField";

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
