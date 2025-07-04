<script lang="ts">
	import ContentWrapper from '$lib/components/content-wrapper.svelte';
	import * as Code from '$lib/components/ui/code';
	import * as Table from '$lib/components/ui/table/index.js';
</script>

<ContentWrapper>
	<h1 class="mb-4 text-3xl font-bold">Environments Setup Guide</h1>

	<h2 class="mb-3 text-2xl font-semibold">Overview</h2>
	<p class="mb-6">
		Remote Environments use the Arcane agent to expose the Docker API of a remote host. This allows
		for management of Docker resources from a centralized server.
	</p>

	<h2 class="mb-3 text-2xl font-semibold">Architecture</h2>
	<div class="w-full p-6">
		<Code.Root
			lang="diff"
			class="w-full"
			hideLines
			code={`┌─────────────────┐    HTTP API     ┌─────────────────┐
│  Arcane Server  │ ──────────────> │    Go Agent     │
│  (Management)   │ <────────────── │  (Remote Host)  │
└─────────────────┘  HTTP RESPONSE  └─────────────────┘`}
		></Code.Root>
	</div>

	<h2 class="mb-3 text-2xl font-semibold">Prerequisites</h2>
	<ul class="mb-6 list-inside list-disc space-y-2">
		<li>Docker Engine 20.10+</li>
		<li>Network access to Arcane server</li>
		<li>User with Docker socket permissions</li>
	</ul>

	<h2 class="mb-3 text-2xl font-semibold">Configuration</h2>
	<p class="mb-4">The agent supports the following environment variables:</p>
	<Table.Root class="mb-8">
		<Table.Caption>Agent environment variables and their usage.</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[220px]">Environment Variable</Table.Head>
				<Table.Head>Default Value</Table.Head>
				<Table.Head>Description</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			<Table.Row>
				<Table.Cell class="font-medium"
					><code class="bg-muted rounded px-1 py-0.5">AGENT_ID</code></Table.Cell
				>
				<Table.Cell
					><code class="bg-muted rounded px-1 py-0.5">&lt;hostname-of-your-server&gt;</code
					></Table.Cell
				>
				<Table.Cell>Hostname of the Arcane server</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="font-medium"
					><code class="bg-muted rounded px-1 py-0.5">AGENT_LISTEN_ADDRESS</code></Table.Cell
				>
				<Table.Cell><code class="bg-muted rounded px-1 py-0.5">0.0.0.0</code></Table.Cell>
				<Table.Cell>The address to bind to on the agent host</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="font-medium"
					><code class="bg-muted rounded px-1 py-0.5">AGENT_PORT</code></Table.Cell
				>
				<Table.Cell><code class="bg-muted rounded px-1 py-0.5">3552</code></Table.Cell>
				<Table.Cell>The Port for the agent to listen on</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="font-medium"
					><code class="bg-muted rounded px-1 py-0.5">API_KEY</code></Table.Cell
				>
				<Table.Cell><code class="bg-muted rounded px-1 py-0.5">-</code></Table.Cell>
				<Table.Cell>The API Key generated by the Arcane Server</Table.Cell>
			</Table.Row>
		</Table.Body>
	</Table.Root>

	<h3 class="mt-8 mb-2 text-xl font-semibold">Configuration File</h3>
	<p class="mb-4">
		Create a <code class="bg-muted rounded px-1 py-0.5">.env</code> file for the agent:
	</p>
	<div class="w-full p-6">
		<Code.Root
			lang="bash"
			class="w-full"
			code={`# .env file example
AGENT_ID=arcane-agent-example
AGENT_LISTEN_ADDRESS=0.0.0.0
AGENT_PORT=3552
API_KEY=your-secret-api-key-here`}
		>
			<Code.CopyButton variant="ghost" size="sm" />
		</Code.Root>
	</div>

	<h2 class="mb-3 text-2xl font-semibold">Installation Options</h2>

	<h3 class="mt-8 mb-2 text-xl font-semibold">Docker Compose</h3>
	<div class="w-full p-6">
		<Code.Root
			lang="yaml"
			class="w-full"
			code={`name: arcane-agent
services:
    arcane-agent:
        container_name: arcane-agent
        restart: unless-stopped
        environment:
            - AGENT_ID=arcane-agent-example
            - AGENT_LISTEN_ADDRESS=0.0.0.0
            - AGENT_PORT=3552
            - API_KEY=your-secret-api-key-here
        volumes:
            - /var/run/docker.sock:/var/run/docker.sock
            - $(pwd)/compose-projects:/data/compose-projects
        image: ghcr.io/ofkm/arcane-agent:latest`}
		>
			<Code.CopyButton variant="ghost" size="sm" />
		</Code.Root>
	</div>

	<h3 class="mt-8 mb-2 text-xl font-semibold">Binary Installation</h3>
	<div class="w-full p-6">
		<Code.Root
			lang="bash"
			class="w-full"
			code={`# Download the binary
wget https://github.com/ofkm/arcane-agent/releases/latest/download/arcane-agent-linux-amd64

# Make executable
chmod +x arcane-agent-linux-amd64

# Create configuration
cat > .env << EOF
AGENT_ID=arcane-agent-example
AGENT_LISTEN_ADDRESS=0.0.0.0
AGENT_PORT=3552
API_KEY=your-secret-api-key-here
EOF

# Run the agent
./arcane-agent-linux-amd64`}
		>
			<Code.CopyButton variant="ghost" size="sm" />
		</Code.Root>
	</div>

	<h2 class="mb-3 text-2xl font-semibold">Updates</h2>
	<h3 class="mt-8 mb-2 text-xl font-semibold">Docker Updates</h3>
	<div class="mb-8 w-full p-6">
		<Code.Root
			lang="bash"
			class="w-full"
			code={`docker compose down
docker compose pull
docker compose up -d`}
		>
			<Code.CopyButton variant="ghost" size="sm" />
		</Code.Root>
	</div>
</ContentWrapper>
