<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	
	import Bar from '$lib/components/bar.bottom.svelte';
	//import RailLeft from '$lib/components/rail.left.svelte';
	import RailRight from '$lib/components/rail.right.svelte';
</script>

<!-- App Shell -->
<AppShell>	
	<!--<svelte:fragment slot="sidebarLeft">
		<RailLeft />	
	</svelte:fragment>-->

	<svelte:fragment slot="sidebarRight">
		<RailRight/>
	</svelte:fragment>

	<svelte:fragment slot="footer">
		<!-- App Bar -->
		<Bar />
	</svelte:fragment>

    <!-- Page Content -->
	<slot />
</AppShell>