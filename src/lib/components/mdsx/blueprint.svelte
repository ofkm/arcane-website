<script module>
	export {
		a,
		blockquote,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		hr,
		img,
		li,
		ol,
		p,
		pre,
		strong,
		table,
		td,
		th,
		tr,
		ul,
		figcaption
	} from './index.js';
</script>

<script lang="ts">
	let { children } = $props();
</script>

<div class="mdsx">
	{@render children()}
</div>
