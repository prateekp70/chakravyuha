const fs = require('fs');
const readline = require('readline');
const path = require('path');

const transcriptPath = 'C:/Users/Prateek Kashyap/.gemini/antigravity/brain/1725939e-6ed5-4641-b251-b045ffbceeef/.system_generated/logs/transcript_full.jsonl';
const mdOutputPath = path.resolve('CONVERSATION_HISTORY.md');
const htmlOutputPath = path.resolve('CONVERSATION_EXPORT.html');

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

async function exportConversation() {
    const rl = readline.createInterface({
        input: fs.createReadStream(transcriptPath),
        crlfDelay: Infinity
    });

    let turns = [];
    let currentTurn = null;

    for await (const line of rl) {
        if (!line.trim()) continue;
        let step;
        try {
            step = JSON.parse(line);
        } catch (e) {
            continue;
        }

        if (step.source === 'USER_EXPLICIT' && step.type === 'USER_INPUT') {
            if (currentTurn) turns.push(currentTurn);
            let rawContent = step.content || '';
            const match = rawContent.match(/<USER_REQUEST>([\s\S]*?)<\/USER_REQUEST>/);
            const userText = match ? match[1].trim() : rawContent.trim();

            currentTurn = {
                timestamp: step.created_at || new Date().toISOString(),
                user: userText,
                assistant: '',
                toolCalls: []
            };
        } else if (step.source === 'MODEL' && step.type === 'PLANNER_RESPONSE') {
            if (currentTurn) {
                if (step.content) {
                    currentTurn.assistant += (currentTurn.assistant ? '\n\n' : '') + step.content.trim();
                }
                if (step.tool_calls && Array.isArray(step.tool_calls)) {
                    for (const tc of step.tool_calls) {
                        const summary = (tc.args && tc.args.toolSummary) || tc.name;
                        currentTurn.toolCalls.push(summary);
                    }
                }
            }
        }
    }
    if (currentTurn) turns.push(currentTurn);

    // 1. Generate Markdown
    let md = `# 📜 Chakravyuha / RoadTripApp — Complete Conversation History\n\n`;
    md += `> **Conversation ID:** \`1725939e-6ed5-4641-b251-b045ffbceeef\`  \n`;
    md += `> **Export Date:** ${new Date().toLocaleString()}  \n`;
    md += `> **Total Dialog Exchanges:** ${turns.length}  \n`;
    md += `> **Project Workspace:** \`roadtripapp\` (Chakravyuha)  \n\n`;
    md += `---\n\n`;

    turns.forEach((t, idx) => {
        const turnNum = idx + 1;
        const timeStr = t.timestamp ? new Date(t.timestamp).toLocaleString() : '';
        md += `## Turn ${turnNum} [${timeStr}]\n\n`;
        md += `### 👤 User\n\n${t.user || '*(Attachment / Prompt)*'}\n\n`;
        if (t.assistant) {
            md += `### 🤖 Assistant (Antigravity)\n\n${t.assistant}\n\n`;
        }
        if (t.toolCalls && t.toolCalls.length > 0) {
            md += `<details>\n<summary>⚡ <i>Tool Actions Executed (${t.toolCalls.length})</i></summary>\n\n`;
            t.toolCalls.forEach(call => {
                md += `- \`${call}\`\n`;
            });
            md += `\n</details>\n\n`;
        }
        md += `---\n\n`;
    });
    fs.writeFileSync(mdOutputPath, md, 'utf8');

    // 2. Generate Standalone HTML
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chakravyuha — Conversation Export</title>
    <style>
        :root {
            --bg: #030816;
            --card-bg: #081126;
            --border: #1e293b;
            --accent: #38bdf8;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --user-bubble: #0f2744;
            --assistant-bubble: #0a192f;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            background: var(--bg);
            color: var(--text-main);
            line-height: 1.6;
            padding: 30px 20px;
        }
        .container { max-width: 900px; margin: 0 auto; }
        header {
            border-bottom: 1px solid var(--border);
            padding-bottom: 24px;
            margin-bottom: 30px;
        }
        h1 { font-size: 1.8rem; color: var(--accent); margin-bottom: 8px; }
        .meta { color: var(--text-muted); font-size: 0.9rem; }
        .turn {
            margin-bottom: 32px;
            border-left: 2px solid var(--border);
            padding-left: 20px;
        }
        .turn-header {
            font-size: 0.85rem;
            color: var(--accent);
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 12px;
            font-weight: 700;
        }
        .bubble {
            border-radius: 10px;
            padding: 16px 20px;
            margin-bottom: 14px;
            border: 1px solid var(--border);
            white-space: pre-wrap;
            word-break: break-word;
            font-size: 0.95rem;
        }
        .user-bubble { background: var(--user-bubble); border-color: rgba(56, 189, 248, 0.3); }
        .assistant-bubble { background: var(--assistant-bubble); }
        .speaker { font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; }
        .speaker.user { color: #67e8f9; }
        .speaker.assistant { color: #a78bfa; }
        details {
            background: rgba(15, 23, 42, 0.6);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 10px 14px;
            margin-top: 10px;
            font-size: 0.85rem;
            color: var(--text-muted);
        }
        summary { cursor: pointer; color: var(--accent); font-weight: 600; }
        ul { margin-top: 8px; padding-left: 20px; }
        li { margin-bottom: 4px; }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>🛡️ Chakravyuha — Conversation Archive</h1>
            <div class="meta">
                <div>Conversation ID: <code>1725939e-6ed5-4641-b251-b045ffbceeef</code></div>
                <div>Exchanges: ${turns.length} turns | Exported on: ${new Date().toLocaleString()}</div>
            </div>
        </header>
`;

    turns.forEach((t, idx) => {
        const turnNum = idx + 1;
        const timeStr = t.timestamp ? new Date(t.timestamp).toLocaleString() : '';
        html += `
        <div class="turn">
            <div class="turn-header">Turn ${turnNum} &bull; ${escapeHtml(timeStr)}</div>
            <div class="bubble user-bubble">
                <div class="speaker user">👤 User</div>
                <div>${escapeHtml(t.user || '(Attachment / Action)')}</div>
            </div>
`;
        if (t.assistant) {
            html += `
            <div class="bubble assistant-bubble">
                <div class="speaker assistant">🤖 Assistant (Antigravity)</div>
                <div>${escapeHtml(t.assistant)}</div>
            </div>
`;
        }
        if (t.toolCalls && t.toolCalls.length > 0) {
            html += `
            <details>
                <summary>⚡ Executed Actions (${t.toolCalls.length})</summary>
                <ul>
                    ${t.toolCalls.map(c => `<li><code>${escapeHtml(c)}</code></li>`).join('')}
                </ul>
            </details>
`;
        }
        html += `        </div>\n`;
    });

    html += `    </div>\n</body>\n</html>`;
    fs.writeFileSync(htmlOutputPath, html, 'utf8');

    console.log(`Exported Markdown: ${mdOutputPath}`);
    console.log(`Exported HTML: ${htmlOutputPath}`);
}

exportConversation().catch(console.error);
