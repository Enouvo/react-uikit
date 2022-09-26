import get from "lodash.get";

export function convertDataToSelectOptions<T>(
  data: T[],
  valueProp: string,
  labelProp: string
) {
  return data?.map(item => ({
    label: get(item, labelProp),
    value: get(item, valueProp)
  }));
}

export const uuidv4 = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

export const getPopupContainer = (
  node: HTMLElement | undefined,
  queries = [".ant-modal", ".ant-drawer"]
) => {
  const parent = document.querySelector(
    queries?.find(e => document.querySelector(e)) as string
  );
  if (node && parent?.contains(node)) return node?.parentNode as HTMLElement;
  return document.body;
};
