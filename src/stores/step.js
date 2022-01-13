import { writable } from "svelte/store";

function createSteps() {
  const { subscribe, set, update } = writable(1);
  return {
    subscribe,
    set,
    update,
    next: () => update((old) => old + 1), //TODO: sync reportData to localStorage?
    prev: () => update((old) => old - 1),
  };
}

export const step = createSteps();
