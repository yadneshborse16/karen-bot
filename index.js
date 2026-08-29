const { Telegraf } = require('telegraf');
const http = require('http');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Render ke port check ko satisfy karne ke liye chhota sa HTTP server
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('KAREN Bot is running!');
}).listen(PORT, () => {
    console.log(`HTTP server is listening on port ${PORT}`);
});

bot.command('watch', (ctx) => {
    const text = ctx.message.text || '';
    const args = text.split(' ').slice(1);
    
    if (args.length === 0) {
        return ctx.reply("Movie ka naam toh daal bhai! Example: '/watch Interstellar'", {
            reply_parameters: { message_id: ctx.message.message_id }
        });
    }
    
    const query = args.join(' ');
    const encodedQuery = encodeURIComponent(query);
    
    const imdbUrl = `https://www.imdb.com/find/?q=${encodedQuery}&ref_=hm_nv_srb_sm`;
    const server1Url = `https://new5.hdhub4u.cl/search.html?q=${encodedQuery}&page=1`;
    const server2Url = `https://cinevood.men/?s=${encodedQuery}`;
    const server3Url = `https://netmirror.center/search/${encodedQuery.toLowerCase()}`;
    
    const responseText = 
        `“🎬 Search results for '${query}”\n\n` +'
        `<a href="${imdbUrl}">IMDb Info</a>\n\n` +
        `Server 1 👉 <a href="${server1Url}">Click Here</a>\n\n` +
        `Server 2 👉 <a href="${server2Url}">Click Here</a>\n\n` +
        `Server 3 👉 <a href="${server3Url}">Click Here</a>\n\n` +
        `🤖 Bot Username: @Karen_mwag_bot\n` +
        `✨ Created By <a href="https://t.me/ultra_am_hub">Ultra AM Hub</a>`;
    
    ctx.reply(responseText, { 
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        reply_parameters: { message_id: ctx.message.message_id }
    });
});

bot.launch().then(() => {
    console.log("KAREN is running successfully on Render!");
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
        
