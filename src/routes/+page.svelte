<script lang="ts">
  import { setCountTo } from "$lib/demo/change.js";
  import { count } from "$lib/demo/count.js";
</script>

<h1>A small demonstration of <code>stelt</code>!</h1>

<p>{count.value}</p>
<button onclick={() => count.value++}>add</button>
<button onclick={() => count.value--}>subtract</button>
<button onclick={() => count.reset()}>reset</button>
<button onclick={() => setCountTo(360)}>set count to 360</button>

<a href="/page">navigate to different page (unrender)</a>
