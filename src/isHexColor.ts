const hexColorRegex = new RegExp("^(?:[0-9a-fA-F]{3}){1,2}$");
export const isHexColor = (hexColor: string): boolean => hexColorRegex.test(hexColor);