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
        return ctx.reply('Movie ka naam toh daal bhai! Example: /watch Interstellar');
    }
    
    const query = args.join(' ');
    const encodedQuery = encodeURIComponent(query);
    
    const imdbUrl = `https://www.imdb.com/find/?q=${encodedQuery}&ref_=hm_nv_srb_sm`;
    const server1Url = `https://new5.hdhub4u.cl/search.html?q=${encodedQuery}&page=1`;
    const server2Url = `https://cinevood.men/?s=${encodedQuery}`;
    const server3Url = `https://netmirror.center/search/${encodedQuery.toLowerCase()}`;
    
    const responseText = 
        `🎬 Search results for ${query}\n\n` +
        `IMDb Info: ${imdbUrl}\n\n` +
        `Server 1 👉 ${server1Url}\n\n` +
        `Server 2 👉 ${server2Url}\n\n` +
        `Server 3 👉 ${server3Url}\n\n` +
        `✨ Created By Ultra AM Hub (https://t.me/ultra_am_hub)\n` +
        `🤖 Bot Username: @Karen_mwag_bot`;
    
    ctx.reply(responseText, { 
        disable_web_page_preview: true 
    });
});

bot.launch().then(() => {
    console.log("KAREN is running successfully on Render!");
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
