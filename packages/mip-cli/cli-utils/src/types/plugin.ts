/**
 * @file plugin.ts
 * @author clark-t (clarktanglei@163.com)
 */

import {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook
} from 'tapable'

export interface Option {
  name: string;
  shortName: string;
  optional?: boolean;
  description: string;
  fn?: ((...args: any[]) => any) | RegExp;
  defaultValue?: any;
}

export interface Argument {
  name: string;
  optional?: boolean;
  rest?: boolean;
}

export interface Params {
  args: Record<string, string>;
  options: Record<string, string | boolean>;
}

export interface Command {
  name?: string;
  description: string;
  args?: Argument[];
  options: Option[];
  run(params: Params): void;
  help?: string;
  hooks?: Record<string, Hook>;
}

export type Hook = SyncHook |
  SyncBailHook |
  SyncWaterfallHook |
  SyncLoopHook |
  AsyncParallelHook |
  AsyncParallelBailHook |
  AsyncSeriesHook |
  AsyncSeriesBailHook |
  AsyncSeriesWaterfallHook

export interface Plugin extends Command {
  subCommands?: Command[];
}

// export interface Plugin {
//   command: Command;
//   run<T extends {}>(args: T): void;
//   hooks?: Record<string, Hook>;
// }
