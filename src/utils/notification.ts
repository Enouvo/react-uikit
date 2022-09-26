import { notification } from "antd";

export const showError = (error: unknown | string) => {
  const message = (() => {
    if (typeof error === "string") return error;
    if (error instanceof Error) {
      return error?.message;
    }
    return "Server Internall Error. Please try later !!!!";
  })();

  return notification.error({
    message
  });
};

export const showSuccess = (message: string) =>
  notification.success({
    message
  });
