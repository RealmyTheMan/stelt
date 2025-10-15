import type { SteltInstance } from "./stelt.svelte.js";

/** Reset states of Stelt instances in bulk. */
export function bulkReset(...instances: SteltInstance<any>[]) {
  for (const instance of instances) instance.reset();
}
