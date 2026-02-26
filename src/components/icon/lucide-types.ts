import * as LucideIcons from 'lucide-react';

/**
 * Extract all Lucide icon names for type safety
 * Filters out non-icon exports like 'default' and 'createLucideIcon'
 */
export type LucideIconName = {
  [K in keyof typeof LucideIcons]: (typeof LucideIcons)[K] extends React.ComponentType<any>
    ? K
    : never;
}[keyof typeof LucideIcons];

/**
 * Utility type for icon prop - supports both string names and component references
 */
export type IconProp = LucideIconName | React.ComponentType<any>;

/**
 * Re-export common Lucide types for convenience
 */
export type { LucideIcon, LucideProps } from 'lucide-react';

/**
 * Helper to get all available Lucide icon names
 * Useful for development, debugging, and icon pickers
 */
export function getAllLucideIconNames(): string[] {
  return Object.keys(LucideIcons).filter(
    (name) =>
      name !== 'default' &&
      name !== 'createLucideIcon' &&
      typeof (LucideIcons as any)[name] === 'function',
  );
}

/**
 * Type guard to check if a value is a valid Lucide icon name
 */
export function isLucideIconName(value: any): value is LucideIconName {
  return typeof value === 'string' && value in LucideIcons;
}

/**
 * Type guard to check if a value is a Lucide icon component
 */
export function isLucideIconComponent(
  value: any,
): value is React.ComponentType<any> {
  return typeof value === 'function' && value.displayName?.includes('Lucide');
}
