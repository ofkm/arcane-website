<script lang="ts">
	import * as Code from '$lib/components/ui/code/index.js';

	const diagram = `┌─────────────────┐    HTTP API     ┌─────────────────┐
│  Arcane Server  │ ──────────────> │    Go Agent     │
│  (Management)   │ <────────────── │  (Remote Host)  │
└─────────────────┘  HTTP RESPONSE  └─────────────────┘`;
</script>

<div class="mt-4 w-full">
	<Code.Root lang="diff" class="w-full" hideLines code={diagram}></Code.Root>
</div>
