# `stelt`

`stelt` makes managing global state in Svelte ever so slightly more convenient, while keeping the simplicity of Svelte.

> **Note:** This package only works with Svelte 5, due to the usage of runes.

## Why `stelt`?

- You have a `reset` function which can instantly reset the state to its original form.
- You don't need to add the `.svelte.ts` suffix to files, you can just use `.ts`.
- It works out of the box with any data type, including special reactive types like `SvelteMap`.
- It's lightweight.

## How to use

You can declare state like so:

```ts
// count.ts
import stelt from "stelt";
const count = stelt(() => 0); // you declare the value inside of a function
```

And you can use it in a component like so:

```svelte
<p>{count.value}</p>
<button onclick={() => count.value++}>add</button>
<button onclick={() => count.value--}>subtract</button>
<button onclick={() => count.reset()}>reset</button>
```

That's how simple it is!
