export const zeroPad = (num: number, places = 2) =>
  String(num).padStart(places, "0");
