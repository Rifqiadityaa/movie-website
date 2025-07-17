import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Type checkers
export const isArray = (value: unknown): value is unknown[] =>
  Array.isArray(value);
export const isFunction = (
  value: unknown
): value is (...args: unknown[]) => unknown => typeof value === "function";
export const isNumber = (value: unknown): value is number =>
  typeof value === "number" && !isNaN(value);
export const isObject = (
  value: unknown
): value is Omit<{ [key: string]: unknown }, "unknown[]" | "null"> =>
  typeof value === "object" && value !== null && !isArray(value);
export const isString = (value: unknown): value is string =>
  typeof value === "string";
export const isUndefined = (value: unknown): value is undefined =>
  value === undefined || typeof value === "undefined";
export const isNull = (value: unknown): value is null => value === null;
export const isBoolean = (value: unknown): value is boolean =>
  typeof value === "boolean";
export const isTrue = (value: unknown): value is true => value === true;
export const isFalse = (value: unknown): value is false => value === false;
export const isDate = (value: unknown): value is Date => value instanceof Date;
export const isEmpty = (
  value?: unknown
): value is undefined | null | "" | never[] | "NaN" => {
  return (
    isUndefined(value) ||
    isNull(value) ||
    (isString(value) && value === "") ||
    (isNumber(value) && (value === 0 || isNaN(value))) ||
    (isArray(value) && value.length === 0) ||
    (isObject(value) && Object.keys(value).length === 0) ||
    false
  );
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
