<script lang="ts">
	import Logo from './logo.svelte';
	import MainNav from './mainnav.svelte';
	import MobileNav from './mobile-nav.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import GithubLink from './github-link.svelte';
	import ModeSwitcher from './modeswitcher.svelte';

	import { mainNavItems } from '$lib/config/docs.js';
</script>

<header class="bg-background border-border sticky top-0 z-50 w-full">
	<div class="container-wrapper 3xl:fixed:px-0 px-6">
		<div class="flex items-center gap-4 py-4">
			<a href="/" class="hidden items-center gap-2 no-underline transition hover:opacity-80 sm:flex">
				<Logo class="size-5" />
			</a>
			<MainNav items={mainNavItems} class="hidden lg:flex" />

			<MobileNav class="flex sm:hidden" />

			<div class="ml-auto hidden items-center gap-2 sm:flex md:flex-1 md:justify-end">
				<div class="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
					<!-- <DocsCommandMenu /> -->
				</div>
				<Separator orientation="vertical" />
				<GithubLink />
				<Separator orientation="vertical" />
				<ModeSwitcher />
			</div>
		</div>
	</div>
</header>
