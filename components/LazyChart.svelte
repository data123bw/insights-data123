<script>
  import { onMount, onDestroy } from 'svelte';

  /** Approximate rendered height in px — used for the shimmer placeholder */
  export let height = 320;
  /** Number of side-by-side shimmer cards to show (matches Grid cols) */
  export let cols = 1;

  let visible = false;
  let container;
  let observer;

  onMount(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      { rootMargin: '180px' }
    );
    observer.observe(container);
  });

  onDestroy(() => {
    observer?.disconnect();
  });
</script>

<div bind:this={container}>
  {#if visible}
    <div class="lc-reveal">
      <slot />
    </div>
  {:else}
    <div class="lc-placeholder" style="--lc-cols:{cols}">
      {#each Array(cols) as _}
        <div class="lc-shimmer" style="height:{height}px"></div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .lc-placeholder {
    display: grid;
    grid-template-columns: repeat(var(--lc-cols), 1fr);
    gap: 16px;
  }

  .lc-shimmer {
    width: 100%;
    border-radius: 12px;
    background: linear-gradient(
      90deg,
      #f1f5f9 25%,
      #e2e8f0 50%,
      #f1f5f9 75%
    );
    background-size: 200% 100%;
    animation: lc-shimmer 1.4s infinite;
  }

  @keyframes lc-shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  .lc-reveal {
    animation: lc-fade 0.35s ease-out;
  }

  @keyframes lc-fade {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
</style>
