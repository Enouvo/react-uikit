export function getExt(filepath: string) {
  return filepath.split("?")[0].split("#")[0].split(".").pop() ?? "";
}

export const getFileNameFromUrl = (url: string) =>
  url
    .split("/")
    .pop()
    ?.split(".")
    .map((item, index) =>
      index ? item : item.split("-").slice(0, -1).join("-")
    )
    .join(".");
