import { Dayjs } from "dayjs";
import * as React from "react";
import { PickerTimeProps } from "antd/es/date-picker/generatePicker";
import { DatePicker } from "./DatePicker";

export type TimePickerProps = Omit<PickerTimeProps<Dayjs>, "picker">;

export const TimePicker = React.forwardRef<never, TimePickerProps>(
  (props, ref) => (
    <DatePicker {...props} picker="time" mode={undefined} ref={ref} />
  )
);

TimePicker.displayName = "TimePicker";
