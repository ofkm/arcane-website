<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { UseClipboard } from '$lib/hooks/use-clipboard.svelte.js';
	import { cn } from '$lib/utils.js';
	import ClipboardIcon from '@lucide/svelte/icons/clipboard';
	import CheckIcon from '@lucide/svelte/icons/check';
	import type { ComponentProps } from 'svelte';

	let {
		text,
		variant = 'ghost',
		class: className,
		...restProps
	}: ComponentProps<typeof Button> & {
		text: string;
	} = $props();

	const clipboard = new UseClipboard();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const rp = $derived(restProps as any);
</script>

<Tooltip.Root disableCloseOnTriggerClick>
	<!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
	<Tooltip.Trigger
		{...rp}
		class={cn('bg-code absolute top-3 right-2 z-10 size-7 hover:opacity-100 focus-visible:opacity-100', className)}
		onclick={() => clipboard.copy(text)}
	>
		{#snippet child({ props })}
			<Button {...props} data-slot="copy-button" size="icon" {variant}>
				<span class="sr-only">Copy</span>
				{#if clipboard.copied}
					<CheckIcon />
				{:else}
					<ClipboardIcon />
				{/if}
			</Button>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content>
		{clipboard.copied ? 'Copied' : 'Copy to Clipboard'}
	</Tooltip.Content>
</Tooltip.Root>
