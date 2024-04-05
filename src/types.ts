import type { antfu } from '@antfu/eslint-config';

type AntfuOptions = Parameters<typeof antfu>[0];

export type OptionsConfig = AntfuOptions & {
  /**
   * Enable Pinia support.
   *
   * @default auto-detect based on the dependencies
   */
  pinia?: boolean;
};
