export function tiny(someString: string) {
  if (typeof someString !== "string") throw new TypeError("Tiny wants a string!");
  return someString.replace(/\s/g, "");
};