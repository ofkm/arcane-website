<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import GithubIcon from './icons/github.svelte';
	import { onMount } from 'svelte';

	const FALLBACK_STAR_COUNT = 0;

	async function getGithubStarCount() {
		try {
			const res = await fetch('https://ungh.cc/repos/ofkm/arcane');
			const data = await res.json();
			return data.repo?.stars ?? FALLBACK_STAR_COUNT;
		} catch (error) {
			console.error(error);
			return FALLBACK_STAR_COUNT;
		}
	}

	let stars = $state(FALLBACK_STAR_COUNT);

	onMount(async () => {
		stars = await getGithubStarCount();
	});
</script>

<Button
	href="https://github.com/ofkm/arcane"
	target="_blank"
	rel="noreferrer"
	size="sm"
	variant="ghost"
	class="h-8 shadow-none"
>
	<GithubIcon />
	<span class="text-muted-foreground text-xs tabular-nums">
		{stars >= 1000 ? `${(stars / 1000).toFixed(1)}k` : stars.toLocaleString()}
	</span>
</Button>
