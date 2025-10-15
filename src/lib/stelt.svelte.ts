/**
 * Creates a stateful variable using the Svelte 5 `$state` rune, and provides a reset function.
 */
export function stelt<T>(initializer: () => T): {
  value: T;
  reset: () => void;
} {
  const state = $state({ value: initializer() });

  return {
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
