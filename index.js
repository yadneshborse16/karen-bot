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

// Movie Search Command
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
        `“🎬 Search results for ${query}”\n\n` +
        `<a href="${imdbUrl}">🔍 IMDb Info</a>\n\n` +
        `Server 1 👉 <a href="${server1Url}">Click Here</a>\n\n` +
        `Server 2 👉 <a href="${server2Url}">Click Here</a>\n\n` +
        `Server 3 👉 <a href="${server3Url}">Click Here</a>\n\n` +
        `⚠️ If You Don't Get Your Results Then Use @KWRBTnybot\n\n` +
        `🤖 Bot Username: @Karen_mwag_bot\n` +
        `✨ Created By <a href="https://t.me/ultra_am_hub">Ultra AM Hub</a>`;
    
    ctx.reply(responseText, { 
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        reply_parameters: { message_id: ctx.message.message_id }
    });
});

// Anime Search Command
bot.command('anime', (ctx) => {
    const text = ctx.message.text || '';
    const args = text.split(' ').slice(1);
    
    if (args.length === 0) {
        return ctx.reply("Anime ka naam toh daal bhai! Example: '/anime One Piece'", {
            reply_parameters: { message_id: ctx.message.message_id }
        });
    }
    
    const query = args.join(' ');
    const encodedQuery = encodeURIComponent(query);
    const plusQuery = query.replace(/\s+/g, '+');
    
    const anilistUrl = `https://anilist.co/search/anime?search=${encodedQuery}`;
    const server1Url = `https://anikoto.cz/filter?keyword=${plusQuery}+`;
    const server2Url = `https://www.animehub4u.in/search?q=${encodedQuery}&m=1`;
    const server3Url = `https://watchanimeworld.one/?s=${encodedQuery.toLowerCase()}`;
    
    const responseText = 
        `“🌸 Anime search results for ${query}”\n\n` +
        `<a href="${anilistUrl}">🔍 Anime Info</a>\n\n` +
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

// APK Search Command
bot.command('apk', (ctx) => {
    const text = ctx.message.text || '';
    const args = text.split(' ').slice(1);
    
    if (args.length === 0) {
        return ctx.reply("App ka naam toh daal bhai! Example: '/apk Temple run'", {
            reply_parameters: { message_id: ctx.message.message_id }
        });
    }
    
    const query = args.join(' ');
    const plusQuery = query.replace(/\s+/g, '%20');
    
    const playStoreUrl = `https://play.google.com/store/search?q=${plusQuery}&c=apps&hl=en_ZA`;
    const an1Url = `https://an1.com/?story=${plusQuery}&do=search&subaction=search`;
    const aptoideUrl = `https://en.aptoide.com/search?query=${plusQuery}&type=apps`;
    const apkpureUrl = `https://apkpure.net/search?q=${plusQuery}`;
    const modyoloUrl = `https://modyolo.com/?s=${plusQuery}`;
    const apkdoneUrl = `https://apkdone.com/search/?q=${plusQuery}`;
    const getmodsapkUrl = `https://getmodsapk.com/search?query=${plusQuery}`;
    
    const responseText = 
        `“📱 APK search results for ${query}”\n\n` +
        `<a href="${playStoreUrl}">⚠️ Download From Official Source</a>\n\n` +
        `Server 1 👉 <a href="${an1Url}">Click Here</a>\n\n` +
        `Server 2 👉 <a href="${aptoideUrl}">Click Here</a>\n\n` +
        `Server 3 👉 <a href="${apkpureUrl}">Click Here</a>\n\n` +
        `Server 4 👉 <a href="${modyoloUrl}">Click Here</a>\n\n` +
        `Server 5 👉 <a href="${apkdoneUrl}">Click Here</a>\n\n` +
        `Server 6 👉 <a href="${getmodsapkUrl}">Click Here</a>\n\n` +
        `🤖 Bot Username: @Karen_mwag_bot\n` +
        `✨ Created By <a href="https://t.me/ultra_am_hub">Ultra AM Hub</a>`;
    
    ctx.reply(responseText, { 
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        reply_parameters: { message_id: ctx.message.message_id }
    });
});

// PC Software Search Command (/exe)
bot.command('exe', (ctx) => {
    const text = ctx.message.text || '';
    const args = text.split(' ').slice(1);
    
    if (args.length === 0) {
        return ctx.reply("Software ka naam toh daal bhai! Example: '/exe After effects'", {
            reply_parameters: { message_id: ctx.message.message_id }
        });
    }
    
    const query = args.join(' ');
    const encodedQuery = encodeURIComponent(query);
    
    const sourceForgeUrl = `https://sourceforge.net/software/?q=${encodedQuery}`;
    const fileCrUrl = `https://filecr.com/search/?q=${encodedQuery}`;
    const getIntoPcUrl = `https://getintopc.com/?s=${encodedQuery}`;
    const softpediaUrl = `https://www.softpedia.com/dyn-search.php?search_term=${encodedQuery}`;
    const fileHippoUrl = `https://filehippo.com/search/?q=${encodedQuery}`;
    
    const responseText = 
        `“💻 PC Software search results for ${query}”\n\n` +
        `<a href="${sourceForgeUrl}">🔍 Info About Software</a>\n\n` +
        `Server 1 👉 <a href="${fileCrUrl}">Click Here</a>\n\n` +
        `Server 2 👉 <a href="${getIntoPcUrl}">Click Here</a>\n\n` +
        `Server 3 👉 <a href="${softpediaUrl}">Click Here</a>\n\n` +
        `Server 4 👉 <a href="${fileHippoUrl}">Click Here</a>\n\n` +
        `🤖 Bot Username: @Karen_mwag_bot\n` +
        `✨ Created By <a href="https://t.me/ultra_am_hub">Ultra AM Hub</a>`;
    
    ctx.reply(responseText, { 
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        reply_parameters: { message_id: ctx.message.message_id }
    });
});

// PC Games Search Command (/pcplay)
bot.command('pcplay', (ctx) => {
    const text = ctx.message.text || '';
    const args = text.split(' ').slice(1);
    
    if (args.length === 0) {
        return ctx.reply("Game ka naam toh daal bhai! Example: '/pcplay God of War'", {
            reply_parameters: { message_id: ctx.message.message_id }
        });
    }
    
    const query = args.join(' ');
    const encodedQuery = encodeURIComponent(query);
    const slugQuery = query.toLowerCase().replace(/\s+/g, '-');
    
    const steamStoreUrl = `https://store.steampowered.com/search/?term=${encodedQuery}`;
    const steamRipUrl = `https://steamrip.com/?s=${encodedQuery}`;
    const oceansUrl = `https://oceansofgamess.com/?s=${encodedQuery}`;
    const steamUnlockedUrl = `https://steamunlocked.org/?s=${encodedQuery}`;
    const ankerGamesUrl = `https://ankergames.net/game/${slugQuery}`;
    
    const responseText = 
        `“🎮 PC Game search results for ${query}”\n\n` +
        `<a href="${steamStoreUrl}">🔍 Info About Game</a>\n\n` +
        `Server 1 👉 <a href="${steamRipUrl}">Click Here</a>\n\n` +
        `Server 2 👉 <a href="${oceansUrl}">Click Here</a>\n\n` +
        `Server 3 👉 <a href="${steamUnlockedUrl}">Click Here</a>\n\n` +
        `Server 4 👉 <a href="${ankerGamesUrl}">Click Here</a>\n\n` +
        `🤖 Bot Username: @Karen_mwag_bot\n` +
        `✨ Created By <a href="https://t.me/ultra_am_hub">Ultra AM Hub</a>`;
    
    ctx.reply(responseText, { 
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        reply_parameters: { message_id: ctx.message.message_id }
    });
});

// Scenepack Search Command (/scenepack)
bot.command('scenepack', (ctx) => {
    const text = ctx.message.text || '';
    const args = text.split(' ').slice(1);
    
    if (args.length === 0) {
        return ctx.reply("Naam toh daal bhai! Example: '/scenepack Iron Man' ya '/scenepack Naruto'", {
            reply_parameters: { message_id: ctx.message.message_id }
        });
    }
    
    const query = args.join(' ');
    const encodedQuery = encodeURIComponent(query);
    const plusQuery = query.replace(/\s+/g, '+');
    
    // Movie & Webseries Scenepack Links
    const scenepacksUrl = `https://scenepacks.com/search?q=${plusQuery}`;
    const editpacksMovieUrl = `https://editpacks.org/search?q=${plusQuery}`;
    const hdtwixtorUrl = `https://hdtwixtor.com/?s=${plusQuery.toLowerCase()}`;
    const videomonUrl = `https://videomon.biz/?q=${plusQuery}`;
    
    // Anime Scenepack Links
    const animeClipsUrl = `https://animeclips.online/?s=${encodedQuery.toLowerCase()}`;
    const editpacksAnimeUrl = `https://editpacks.org/search?q=${plusQuery}`;
    
    const responseText = 
        `🎬 <b>Movie & Webseries Scenepack</b>\n` +
        `<i>Search results for ${query}</i>\n\n` +
        `Server 1 👉 <a href="${scenepacksUrl}">Click Here</a>\n` +
        `Server 2 👉 <a href="${editpacksMovieUrl}">Click Here</a>\n` +
        `Server 3 👉 <a href="${hdtwixtorUrl}">Click Here</a>\n` +
        `Server 4 (Best For Hindi Movies) 👉 <a href="${videomonUrl}">Click Here</a>\n\n` +
        `━━━━━━━━━━━━━━━━━━━\n\n` +
        `🌸 <b>Anime Scenepack</b>\n` +
        `<i>Search results for ${query}</i>\n\n` +
        `Server 1 👉 <a href="${animeClipsUrl}">Click Here</a>\n` +
        `Server 2 👉 <a href="${editpacksAnimeUrl}">Click Here</a>\n\n` +
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
