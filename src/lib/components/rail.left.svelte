<script lang="ts">
    import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
  
    let currentTile: number = 0;
  </script>
  
  <AppRail class="w-fit">
    <svelte:fragment slot="lead">
      <AppRailAnchor href="/">
        <!-- Add your icon here -->
        <img src="/threlte-logo.webp" alt="Threlte Logo" />
        <strong class="text-xl uppercase text-orange-700">Demo</strong>
      </AppRailAnchor>
    </svelte:fragment>
    <!-- Tiles -->
    <AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
      <svelte:fragment slot="lead">
        <!-- Add your icon here -->
        (icon)
      </svelte:fragment>
      <span><a
        class="btn btn-sm variant-ghost-surface"
        href="https://www.skeleton.dev/docs/introduction"
        target="_blank"
        rel="noreferrer"
    >
        Skeleton UI Docs
    </a></span>
    </AppRailTile>
    <AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
      <svelte:fragment slot="lead">
        <!-- Add your icon here -->
        (icon)
      </svelte:fragment>
      <span><a
        href="https://tailwindcss.com/docs/installation"
        target="_blank"
        rel="noreferrer"
    >
        Tailwind CSS Docs
    </a></span>
    </AppRailTile>
    <AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
      <svelte:fragment slot="lead">
        <!-- Add your icon here -->
        (icon)
      </svelte:fragment>
      <span><a        
        href="https://svelte.dev/docs/introduction"
        target="_blank"
        rel="noreferrer"
    >
        Svelte Docs
    </a></span>
    </AppRailTile>
    <svelte:fragment slot="trail">
      <AppRailAnchor href="/" target="_blank" title="Account">
        <!-- Add your icon here -->
        (icon)
      </AppRailAnchor>
    </svelte:fragment>
  </AppRail>
  