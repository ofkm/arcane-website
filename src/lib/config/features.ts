import { type Icon as IconType } from '@lucide/svelte';
import Sparkles from '@lucide/svelte/icons/sparkles';
import Clock from '@lucide/svelte/icons/clock';
import Wrench from '@lucide/svelte/icons/wrench';
import Package from '@lucide/svelte/icons/package';
import Globe from '@lucide/svelte/icons/globe';
import HardDrive from '@lucide/svelte/icons/hard-drive';
import ChartBar from '@lucide/svelte/icons/chart-bar';

export interface Feature {
	icon: typeof IconType;
	title: string;
	description: string;
	fullWidth?: boolean;
}

export const features: Feature[] = [
	{
		icon: Sparkles,
		title: 'Modern UI Interface',
		description: 'Clean, intuitive design that makes Docker management a breeze.'
	},
	{
		icon: Clock,
		title: 'Real-time Monitoring',
		description: 'Live updates of container status, resource usage, and logs.'
	},
	{
		icon: Wrench,
		title: 'Container Management',
		description: 'Start, stop, restart, and inspect containers with ease.'
	},
	{
		icon: Package,
		title: 'Image Management',
		description: 'Pull, and manage Docker images.'
	},
	{
		icon: Globe,
		title: 'Network Configuration',
		description: 'Create and configure Docker networks.'
	},
	{
		icon: HardDrive,
		title: 'Volume Management',
		description: 'Create and manage persistent data with Docker volumes.'
	},
	{
		icon: ChartBar,
		title: 'Resource Visualization',
		description: 'Visual graphs for CPU, memory, and network usage.',
		fullWidth: true
	}
];
