import React from "react";
import { ConfigProvider as AntdConfigProvider } from "antd";
import { ConfigProviderProps } from "antd/lib/config-provider";

export function ConfigProvider(props: ConfigProviderProps) {
  return (
    <AntdConfigProvider
      form={{
        requiredMark: true,
        validateMessages: {
          pattern: {
            mismatch: "${label} is not valid!"
          },
          required: "${label} is a required field!",
          string: {
            max: "${label} must be maximum ${max} characters!",
            min: "${label} must be minimum ${min} characters!"
          },
          types: {
            number: "${label} must be number!"
          },
          whitespace: " ${label} cannot be empty!"
        }
      }}
      {...props}
    />
  );
}
