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
	fullWidth={true}
>
	<div slot="content">
		<slot />

		<footer class="site-footer">
			<div class="sf-inner">
				<div class="sf-brand">DATA 123 · INSIGHTS HUB</div>
				<h2 class="sf-title">Need intelligence built for <span class="sf-accent">your organisation?</span></h2>
				<p class="sf-sub">
					The Insights Hub publishes open, sector-wide intelligence. For research,
					dashboards, and analytics tailored to your data — start a conversation.
				</p>
				<a class="sf-cta" href="mailto:info@data123.online">Start a Conversation →</a>

				<div class="sf-links">
					<a href="/">Insights Hub</a>
					<span class="sf-sep">·</span>
					<a href="/crime-statistics-2024/overview">Crime Statistics 2024</a>
					<span class="sf-sep">·</span>
					<a href="/crime-statistics-2024/methodology">Methodology</a>
					<span class="sf-sep">·</span>
					<a href="https://www.data123.online" target="_blank" rel="noreferrer">data123.online</a>
				</div>

				<div class="sf-bottom">
					© {new Date().getFullYear()} Data 123 · Gaborone, Botswana · info@data123.online · +267 71 965 383
				</div>
			</div>
		</footer>
	</div>
</EvidenceDefaultLayout>

<style>
	.site-footer {
		margin-top: 56px;
		background:
			radial-gradient(ellipse at 85% 0%, rgba(81, 173, 223, 0.18), transparent 55%),
			linear-gradient(135deg, #1c0b28 0%, #3d1b52 60%, #2a1238 100%);
		border-radius: 24px 24px 0 0;
		padding: 56px 32px 28px;
		text-align: center;
		color: white;
	}

	.sf-inner {
		max-width: 720px;
		margin: 0 auto;
	}

	.sf-brand {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.18em;
		color: #9ad6e1;
		margin-bottom: 18px;
	}

	.sf-title {
		font-size: 28px;
		font-weight: 800;
		line-height: 1.2;
		letter-spacing: -0.02em;
		color: white;
		margin: 0 0 12px;
	}

	.sf-accent {
		background: linear-gradient(90deg, #9ad6e1, #51addf);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.sf-sub {
		font-size: 14.5px;
		line-height: 1.75;
		color: rgba(255, 255, 255, 0.7);
		margin: 0 auto 26px;
		max-width: 54ch;
	}

	.sf-cta {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		background: #51addf;
		color: #0f172a !important;
		font-size: 14px;
		font-weight: 700;
		padding: 13px 30px;
		border-radius: 999px;
		text-decoration: none !important;
		transition: all 0.25s ease;
		box-shadow: 0 10px 26px rgba(81, 173, 223, 0.35);
	}

	.sf-cta:hover {
		transform: translateY(-2px);
		background: #9ad6e1;
		box-shadow: 0 14px 34px rgba(81, 173, 223, 0.5);
	}

	.sf-links {
		margin-top: 34px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 8px 12px;
		font-size: 13px;
	}

	.sf-links a {
		color: rgba(255, 255, 255, 0.75);
		text-decoration: none;
		font-weight: 600;
		transition: color 0.2s ease;
	}

	.sf-links a:hover {
		color: #9ad6e1;
	}

	.sf-sep {
		color: rgba(255, 255, 255, 0.3);
	}

	.sf-bottom {
		margin-top: 26px;
		padding-top: 20px;
		border-top: 1px solid rgba(255, 255, 255, 0.12);
		font-size: 11.5px;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.45);
	}

	@media (max-width: 640px) {
		.site-footer {
			padding: 40px 20px 22px;
			border-radius: 18px 18px 0 0;
		}
		.sf-title {
			font-size: 22px;
		}
		.sf-cta {
			width: 100%;
			justify-content: center;
		}
	}
</style>
