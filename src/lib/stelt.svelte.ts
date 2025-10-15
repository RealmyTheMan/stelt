export interface SteltInstance<T> {
  value: T;
  reset: () => void;
}

/**
 * Creates and returns a stateful Stelt instance, for use in Svelte codebases.
 */
export function stelt<T>(initializer: () => T): SteltInstance<T> {
  const state = $state({ value: initializer() });

  return {
    // @ts-ignore
    _stelt: true,
    get value() {
      return state.value;
    },
    set value(value) {
      state.value = value;
    },
    reset() {
      state.value = initializer();
    },
  };
}
