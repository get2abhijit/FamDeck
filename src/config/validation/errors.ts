/**
 * Thrown when a configuration file fails validation.
 * Provides the config section name and a descriptive reason.
 */
export class ConfigValidationError extends Error {
  constructor(
    public readonly section: string,
    reason: string,
  ) {
    super(`[Config: ${section}] ${reason}`);
    this.name = 'ConfigValidationError';
  }
}
