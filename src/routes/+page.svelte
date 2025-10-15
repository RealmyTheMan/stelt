<script lang="ts">
  import { setCountTo } from "$lib/testing/change.js";
  import { count } from "$lib/testing/count.js";
</script>

<h1>A small demonstration of <code>stelte</code>!</h1>

<p>{count.now}</p>
<button onclick={() => count.now++}>add</button>
<button onclick={() => count.now--}>subtract</button>
<button onclick={() => count.reset()}>reset</button>
<button onclick={() => setCountTo(360)}>set count to 360</button>

<a href="/page">navigate to different page (unrender)</a>
