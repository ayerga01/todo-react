import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker"; // DesktopDatePicker -> only for Desktop
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { FC, ReactElement } from "react";
import { IDateField } from "./interfaces/IDateField";
import PropTypes from "prop-types";

export const TaskDateField: FC<IDateField> = (props): ReactElement => {
  // Destructure props
  const {
    value = new Date(),
    disabled = false,
    onChange = (date) => console.log(date),
  } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          format="dd/MM/yyyy"
          label="Task Date"
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.instanceOf(Date),
};
