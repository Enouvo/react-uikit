import dayjs from "dayjs";

export const formatDate = (date?: dayjs.ConfigType, formatter = "DD/MM/YYYY") =>
  date ? dayjs(date).format(formatter) : "";

export const formatTimestampToUnix = (date: number, formatter = "DD/MM/YYYY") =>
  dayjs.unix(date).format(formatter);
