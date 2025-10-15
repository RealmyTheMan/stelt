/**
 * Creates a stateful variable using the Svelte 5 `$state` rune, and provides a reset function.
 */
export function stelt<T>(initializer: () => T): {
  now: T;
  reset: () => void;
} {
  const state = $state({ value: initializer() });

  return {
    get now() {
      return state.value;
    },
    set now(value) {
      state.value = value;
    },
    reset() {
      state.value = initializer();
    },
  };
}
