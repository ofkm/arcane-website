<script lang="ts">
	import * as Code from '$lib/components/ui/code/index.js';

	const registryCode = `{
    "$schema": "https://templates.arcane.ofkm.dev/schema.json",
    "name": "My Company Templates",
    "description": "Docker templates for internal applications",
    "version": "1.0.0",
    "author": "Your Team",
    "url": "https://github.com/yourcompany/docker-templates",
    "templates": [
        {
            "id": "internal-app",
            "name": "Internal Application",
            "description": "Company application stack with database",
            "version": "1.0.0",
            "author": "DevOps Team",
            "compose_url": "https://raw.githubusercontent.com/yourcompany/docker-templates/main/internal-app/docker-compose.yml",
            "env_url": "https://raw.githubusercontent.com/yourcompany/docker-templates/main/internal-app/.env.example",
            "documentation_url": "https://github.com/yourcompany/docker-templates/tree/main/internal-app",
            "tags": ["internal", "webapp", "postgres"],
            "updated_at": "2024-12-01T10:00:00Z"
        }
    ]
}`;
</script>

<div class="w-full">
	<Code.Root lang="json" class="w-full" code={registryCode}>
		<Code.CopyButton variant="ghost" size="sm" />
	</Code.Root>
</div>
