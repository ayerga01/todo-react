import { TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import AdapterDateFns from "@mui/x-date-pickers/AdapterDateFns";
import React, { FC, ReactElement, useState } from "react";

export const TaskDateField: FC = (): ReactElement => {
  //state
  const [date, setDate] = useState<Date | null>(null);
  return (
    <h1>hello</h1>
    // <>
    //   <LocalizationProvider dateAdapter={AdapterDateFns}>
    //     {/* <DesktopDatePicker
    //       label="Task Date"
    //       inputFormat="dd/MM/yyyy"
    //       // value={date}
    //       onChange={(newValue) => setDate(newValue)}
    //       renderInput={(params: any) => <TextField {...params} />}
    //     /> */}
    //   </LocalizationProvider>
    // </>
  );
};
