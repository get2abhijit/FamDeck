import { ConfigValidationError } from './errors';

/**
 * Explicit interface for scoped assertion helpers.
 * Each method carries an `asserts` signature so TypeScript narrows correctly.
 */
export interface Assertions {
  fail(reason: string): never;
  assertDefined(val: unknown, field: string): asserts val is NonNullable<unknown>;
  assertString(val: unknown, field: string): asserts val is string;
  assertNonEmptyString(val: unknown, field: string): asserts val is string;
  assertBoolean(val: unknown, field: string): asserts val is boolean;
  assertArray(val: unknown, field: string): asserts val is unknown[];
  assertObject(val: unknown, field: string): asserts val is Record<string, unknown>;
  assertOneOf<T extends string>(
    val: unknown,
    field: string,
    allowed: readonly T[],
  ): asserts val is T;
  assertArrayOf<T>(
    val: unknown,
    field: string,
    itemGuard: (item: unknown, index: number) => asserts item is T,
  ): asserts val is T[];
}

/**
 * Creates a scoped assertion helper bound to a config section name.
 * All assertions throw `ConfigValidationError` on failure.
 */
export function createAssertions(section: string): Assertions {
  const fail = (reason: string): never => {
    throw new ConfigValidationError(section, reason);
  };

  const assertDefined: Assertions['assertDefined'] = (val, field) => {
    if (val === undefined || val === null) {
      fail(`"${field}" is required but was ${String(val)}`);
    }
  };

  const assertString: Assertions['assertString'] = (val, field) => {
    if (typeof val !== 'string') {
      fail(`"${field}" must be a string, got ${typeof val}`);
    }
  };

  const assertNonEmptyString: Assertions['assertNonEmptyString'] = (val, field) => {
    assertString(val, field);
    if ((val as string).trim().length === 0) {
      fail(`"${field}" must not be empty`);
    }
  };

  const assertBoolean: Assertions['assertBoolean'] = (val, field) => {
    if (typeof val !== 'boolean') {
      fail(`"${field}" must be a boolean, got ${typeof val}`);
    }
  };

  const assertArray: Assertions['assertArray'] = (val, field) => {
    if (!Array.isArray(val)) {
      fail(`"${field}" must be an array, got ${typeof val}`);
    }
  };

  const assertObject: Assertions['assertObject'] = (val, field) => {
    if (typeof val !== 'object' || val === null || Array.isArray(val)) {
      fail(`"${field}" must be a plain object`);
    }
  };

  const assertOneOf: Assertions['assertOneOf'] = <T extends string>(
    val: unknown,
    field: string,
    allowed: readonly T[],
  ): asserts val is T => {
    if (!allowed.includes(val as T)) {
      fail(`"${field}" must be one of [${allowed.join(', ')}], got "${String(val)}"`);
    }
  };

  const assertArrayOf: Assertions['assertArrayOf'] = <T>(
    val: unknown,
    field: string,
    itemGuard: (item: unknown, index: number) => asserts item is T,
  ): asserts val is T[] => {
    assertArray(val, field);
    (val as unknown[]).forEach((item, i) => itemGuard(item, i));
  };

  return {
    fail,
    assertDefined,
    assertString,
    assertNonEmptyString,
    assertBoolean,
    assertArray,
    assertObject,
    assertOneOf,
    assertArrayOf,
  };
}
