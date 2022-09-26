import { Dayjs } from "dayjs";
import dayjsGenerateConfig from "rc-picker/lib/generate/dayjs";
import generatePicker from "antd/es/date-picker/generatePicker";
import "antd/es/date-picker/style/index";

export type Picker = "date" | "week" | "month" | "year" | "time" | "quarter";

export const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);
