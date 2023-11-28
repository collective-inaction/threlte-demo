<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<img class="w-full" src="/threlte-logo.webp" alt="Threlte Logo" />
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<a
			class="btn btn-sm variant-ghost-surface"
			href="https://www.skeleton.dev/docs/introduction"
			target="_blank"
			rel="noreferrer"
		>
			Skeleton UI
		</a>
		<a
			class="btn btn-sm variant-ghost-surface"
			href="https://tailwindcss.com/docs/installation"
			target="_blank"
			rel="noreferrer"
		>
			Tailwind CSS
		</a>
		<a
			class="btn btn-sm variant-ghost-surface"
			href="https://svelte.dev/docs/introduction"
			target="_blank"
			rel="noreferrer"
		>
			Svelte
		</a>
		<a
			class="btn btn-sm variant-ghost-surface"
			href="https://kit.svelte.dev/docs/introduction"
			target="_blank"
			rel="noreferrer"
		>
			SvelteKit
		</a>

		<a
			class="btn btn-sm variant-ghost-surface"
			href="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene"
			target="_blank"
			rel="noreferrer"
		>
			ThreeJS
		</a>

		<a
			class="btn btn-sm variant-ghost-surface"
			href="https://threlte.xyz/docs/learn/getting-started/introduction"
			target="_blank"
			rel="noreferrer"
		>
			Threlte
		</a>
	</svelte:fragment>
</AppBar>
