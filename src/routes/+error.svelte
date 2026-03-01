<script lang="ts">
  import { page } from '$app/state';
</script>

<div class="grow flex flex-col items-center justify-center gap-4">
  <h1 class="text-4xl text-center font-semibold">{page.status}</h1>
  <p class="text-2xl text-center">{page.error?.message}</p>
</div>
