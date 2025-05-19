import type { ClassValue } from 'clsx';
import { env } from '#/env';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges multiple class name values into a single string, resolving Tailwind CSS class conflicts.
 *
 * Accepts conditional, array, or string class values and combines them using {@link clsx}, then merges Tailwind CSS classes with {@link twMerge} to ensure correct class precedence.
 *
 * @param inputs - Class names or conditional class values to merge.
 * @returns A single merged class name string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Utility functions for environment checks
 */
export const isDevelopment = () => env.NODE_ENV === 'development';
export const isProduction = () => env.NODE_ENV === 'production';
export const isTest = () => env.NODE_ENV === 'test';

/**
 * Returns a value based on the current runtime environment.
 *
 * Selects {@link testValue} if in a test environment and it is provided; otherwise, returns {@link devValue} in development or {@link prodValue} in production.
 *
 * @param devValue - Value to return in development.
 * @param prodValue - Value to return in production.
 * @param testValue - Value to return in test environment, if provided.
 * @returns The value corresponding to the current environment.
 */
export function getEnvValue<T>(devValue: T, prodValue: T, testValue?: T): T {
  if (isTest() && testValue !== undefined) {
    return testValue;
  }
  return isDevelopment() ? devValue : prodValue;
}
