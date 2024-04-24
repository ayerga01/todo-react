import { SelectChangeEvent } from "@mui/material";
import { IDisabled } from "./IDisabled";

export interface ISelectitems {
    value: string,
    label:string,
}

export interface ISelectField extends IDisabled {
    name?: string,
    label?: string,
    value?: string,
    onChange?: (e: SelectChangeEvent) => void,
    items?: ISelectitems[] 
}