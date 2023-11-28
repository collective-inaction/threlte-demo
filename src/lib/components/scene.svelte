<script lang="ts">
	import { T, useFrame } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import {
		rotation,
		scale,
		positionY,
		color,
		setPositionY,
		isRotating
	} from '$lib/stores/cube.store';

	useFrame((_, delta) => {
		if ($isRotating) {
			rotation.update((r) => (r += delta));
		}
	});

	// Inject interactivity plugin
	interactivity();
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 10, 10]}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
	}}
/>

<T.DirectionalLight position={[0, 10, 10]} castShadow />

<T.Mesh
	rotation.x={$rotation}
	rotation.y={$rotation}
	position.y={$positionY}
	scale={$scale}
	on:click={() => {
		setPositionY(5);
	}}
	castShadow
>
	<T.BoxGeometry />
	<T.MeshStandardMaterial color={$color} />
</T.Mesh>

<T.Mesh rotation.x={-Math.PI / 2} receiveShadow position.y={-1}>
	<T.CircleGeometry args={[3, 75]} />
	<T.MeshStandardMaterial color="gray" />
</T.Mesh>
