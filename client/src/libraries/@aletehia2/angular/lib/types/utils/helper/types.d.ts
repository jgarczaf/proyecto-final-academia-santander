/**
 * Extracts the value types from an object type
 * Useful for creating union types from 'as const' objects
 */
export type ValueOf<T> = T[keyof T];
