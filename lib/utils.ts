import type { ClassValue } from 'clsx';
import { env } from '#/env';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
 * Helper to conditionally enable features based on environment
 * @param devValue - Value to use in development
 * @param prodValue - Value to use in production
 * @param testValue - Optional value to use in test environment
 */
export function getEnvValue<T>(devValue: T, prodValue: T, testValue?: T): T {
  if (isTest() && testValue !== undefined) {
    return testValue;
  }
  return isDevelopment() ? devValue : prodValue;
}
