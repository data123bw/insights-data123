<script>
	let open = false;
	let question = '';
	let messages = [];
	let loading = false;

	const API_URL = 'https://data123-ai-dmf6dsffakcdapgp.southafricanorth-01.azurewebsites.net/api/ask';

	async function sendQuestion() {
		const q = question.trim();
		if (!q || loading) return;

		messages = [...messages, { role: 'user', text: q }];
		question = '';
		loading = true;

		try {
			const res = await fetch(API_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ question: q })
			});
			const data = await res.json();
			messages = [...messages, { role: 'ai', text: data.answer || data.error }];
		} catch {
			messages = [...messages, { role: 'ai', text: 'Something went wrong. Please try again.' }];
		} finally {
			loading = false;
		}
	}

	function handleKey(e) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			sendQuestion();
		}
	}
</script>

<!-- Floating button -->
<button class="chat-fab" on:click={() => (open = !open)} aria-label="Ask AI">
	{#if open}
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
	{:else}
		<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
	{/if}
</button>

<!-- Chat panel -->
{#if open}
	<div class="chat-panel">
		<div class="chat-header">
			<span class="chat-title">Ask about crime data</span>
			<span class="chat-sub">Botswana 2024 statistics</span>
		</div>

		<div class="chat-messages">
			{#if messages.length === 0}
				<div class="chat-empty">
					<p>Ask me anything about Botswana crime statistics.</p>
					<div class="suggestions">
						<button on:click={() => { question = 'Which division had the most serious offences?'; sendQuestion(); }}>Which division had the most serious offences?</button>
						<button on:click={() => { question = 'What were the top 3 offence types in 2024?'; sendQuestion(); }}>What were the top 3 offence types?</button>
					</div>
				</div>
			{/if}

			{#each messages as msg}
				<div class="msg {msg.role}">
					<span>{msg.text}</span>
				</div>
			{/each}

			{#if loading}
				<div class="msg ai loading">
					<span class="dot"></span><span class="dot"></span><span class="dot"></span>
				</div>
			{/if}
		</div>

		<div class="chat-input-row">
			<textarea
				bind:value={question}
				on:keydown={handleKey}
				placeholder="Ask a question..."
				rows="1"
				disabled={loading}
			></textarea>
			<button class="send-btn" on:click={sendQuestion} disabled={loading || !question.trim()}>
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
			</button>
		</div>
	</div>
{/if}

<style>
	.chat-fab {
		position: fixed;
		bottom: 28px;
		right: 28px;
		width: 52px;
		height: 52px;
		border-radius: 50%;
		background: #1E3A5F;
		color: white;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 20px rgba(30, 58, 95, 0.45);
		z-index: 1000;
		transition: all 0.2s ease;
	}

	.chat-fab:hover {
		background: #2563EB;
		transform: scale(1.08);
	}

	.chat-panel {
		position: fixed;
		bottom: 92px;
		right: 28px;
		width: 340px;
		max-height: 480px;
		background: white;
		border-radius: 16px;
		box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);
		display: flex;
		flex-direction: column;
		z-index: 999;
		overflow: hidden;
	}

	.chat-header {
		background: #1E3A5F;
		padding: 14px 18px;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.chat-title {
		color: white;
		font-weight: 700;
		font-size: 14px;
	}

	.chat-sub {
		color: rgba(255,255,255,0.6);
		font-size: 11px;
	}

	.chat-messages {
		flex: 1;
		overflow-y: auto;
		padding: 14px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		min-height: 200px;
	}

	.chat-empty p {
		font-size: 13px;
		color: #64748b;
		margin: 0 0 10px;
	}

	.suggestions {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.suggestions button {
		text-align: left;
		background: #f1f5f9;
		border: none;
		border-radius: 8px;
		padding: 8px 12px;
		font-size: 12px;
		color: #1E3A5F;
		cursor: pointer;
		transition: background 0.15s;
	}

	.suggestions button:hover {
		background: #e2e8f0;
	}

	.msg {
		max-width: 85%;
		padding: 9px 13px;
		border-radius: 12px;
		font-size: 13px;
		line-height: 1.55;
	}

	.msg.user {
		background: #1E3A5F;
		color: white;
		align-self: flex-end;
		border-bottom-right-radius: 4px;
	}

	.msg.ai {
		background: #f1f5f9;
		color: #1e293b;
		align-self: flex-start;
		border-bottom-left-radius: 4px;
	}

	.msg.loading {
		display: flex;
		gap: 4px;
		align-items: center;
		padding: 12px 16px;
	}

	.dot {
		width: 7px;
		height: 7px;
		background: #94a3b8;
		border-radius: 50%;
		animation: bounce 1.2s infinite;
	}

	.dot:nth-child(2) { animation-delay: 0.2s; }
	.dot:nth-child(3) { animation-delay: 0.4s; }

	@keyframes bounce {
		0%, 80%, 100% { transform: translateY(0); }
		40% { transform: translateY(-6px); }
	}

	.chat-input-row {
		display: flex;
		align-items: flex-end;
		gap: 8px;
		padding: 10px 12px;
		border-top: 1px solid #e2e8f0;
	}

	textarea {
		flex: 1;
		resize: none;
		border: 1px solid #e2e8f0;
		border-radius: 10px;
		padding: 9px 12px;
		font-size: 13px;
		line-height: 1.4;
		outline: none;
		font-family: inherit;
		transition: border-color 0.2s;
	}

	textarea:focus {
		border-color: #1E3A5F;
	}

	.send-btn {
		width: 36px;
		height: 36px;
		border-radius: 10px;
		background: #1E3A5F;
		color: white;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: background 0.2s;
	}

	.send-btn:hover:not(:disabled) {
		background: #2563EB;
	}

	.send-btn:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	@media (max-width: 480px) {
		.chat-panel {
			right: 12px;
			left: 12px;
			width: auto;
			bottom: 84px;
		}
		.chat-fab {
			right: 16px;
			bottom: 20px;
		}
	}
</style>
