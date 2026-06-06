<script>
	import '@evidence-dev/tailwind/fonts.css';
	import '../app.css';
	import { EvidenceDefaultLayout } from '@evidence-dev/core-components';
	export let data;
</script>

<EvidenceDefaultLayout 
	{data}
	lightLogo="/logo-light.png"
	darkLogo="/logo-dark.png"
	hideBreadcrumbs= {true}
	neverShowQueries={true}
	builtWithEvidence={false}
	hideTOC={true}
	fullwidth= {true}
	
		
>
	<slot slot="content" />
</EvidenceDefaultLayout>
