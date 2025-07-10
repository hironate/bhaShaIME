// Core BhaSha engine
export { BhaSha } from './bhasha-engine';

// React Hook
export { useBhaShaIME } from './useBhaShaIME';
export type { UseBhaShaIMEOptions, UseBhaShaIMEReturn } from './useBhaShaIME';

// React Components
export { BhaShaInput } from './BhaShaInput';
export type { BhaShaInputProps, BhaShaInputRef } from './BhaShaInput';

export { BhaShaTextarea } from './BhaShaTextarea';
export type { BhaShaTextareaProps, BhaShaTextareaRef } from './BhaShaTextarea';

// Default export for convenience
import { BhaSha } from './bhasha-engine';
import { useBhaShaIME } from './useBhaShaIME';
import { BhaShaInput } from './BhaShaInput';
import { BhaShaTextarea } from './BhaShaTextarea';

export default {
  BhaSha,
  useBhaShaIME,
  BhaShaInput,
  BhaShaTextarea,
};
