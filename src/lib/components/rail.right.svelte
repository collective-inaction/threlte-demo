<!-- AppRail.svelte -->
<script lang="ts">
	import { AppRail, RangeSlider, ListBox, ListBoxItem, SlideToggle } from '@skeletonlabs/skeleton';
	import { setColor, scale, color, isRotating } from '$lib/stores/cube.store';
	let maxScale = 3;
</script>

<AppRail class="w-fit space-y-2 px-4">
	<RangeSlider name="scale-slider" bind:value={$scale} max={maxScale} step={0.1} ticked>
		<div class="flex justify-between items-center">
			<div class="text-lg text-secondary-400">Cube Scale</div>
			<div class="text-xs">{$scale} / {maxScale}</div>
		</div>
	</RangeSlider>
	<ListBox class="w-fit mx-auto my-2 space-y-2 text-center ">
		<ListBoxItem hover="hover:bg-red-700" class="bg-red-800" bind:group={$color} name="cube-color" value="red"
			>Red</ListBoxItem
		>
		<ListBoxItem hover="hover:bg-orange-700" class="bg-orange-800" bind:group={$color} name="cube-color" value="orange"
			>Orange</ListBoxItem
		>
		<ListBoxItem hover="hover:bg-yellow-700"class="bg-yellow-800" bind:group={$color} name="cube-color" value="yellow"
			>Yellow</ListBoxItem
		>
		<ListBoxItem hover="hover:bg-green-700" class="bg-green-800" bind:group={$color} name="cube-color" value="green"
			>Green</ListBoxItem
		>
		<ListBoxItem hover="hover:bg-blue-700" class="bg-blue-800" bind:group={$color} name="cube-color" value="blue"
			>Blue</ListBoxItem
		>
		<ListBoxItem hover="hover:bg-indigo-700" class="bg-indigo-800" bind:group={$color} name="cube-color" value="indigo"
			>Indigo</ListBoxItem
		>
		<ListBoxItem hover="hover:bg-violet-700" class="bg-violet-800" bind:group={$color} name="cube-color" value="violet"
			>Violet</ListBoxItem
		>
        <button type="button" class="btn w-full bg-gradient-to-br variant-gradient-primary-secondary" on:click={() => setColor($color)}>Random</button>
	</ListBox>
	<SlideToggle name="slider-label" bind:checked="{$isRotating}">Rotation</SlideToggle>
</AppRail>
