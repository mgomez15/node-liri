# node-liri

"concert-this"

Marias-MacBook-Pro:liri Marifer$ node liri concert-this beyonce
this is loaded
Santa Clara, Levi's Stadium, 2018-09-29T19:30:00
Vancouver, BC Place, 2018-10-02T19:32:00
Seattle, CenturyLink Field, 2018-10-04T19:30:00


"spotify-this-song"

Marias-MacBook-Pro:liri Marifer$ node liri concert-this beyonce
this is loaded
Santa Clara, Levi's Stadium, 2018-09-29T19:30:00
Vancouver, BC Place, 2018-10-02T19:32:00
Seattle, CenturyLink Field, 2018-10-04T19:30:00
Marias-MacBook-Pro:liri Marifer$ node liri spotify-this-song beyonce
this is loaded
Beyoncé, Halo, https://p.scdn.co/mp3-preview/3c97985f3736fab6d4abcd2067f346a9b30955fa?cid=d2a35cbaf6ce479aa22480457f01ad2f, I AM...SASHA FIERCE
Ed Sheeran, Perfect Duet (Ed Sheeran & Beyoncé), https://p.scdn.co/mp3-preview/65ee4bf5cfdc8f2cd9cc1742f9d4b2ba10c83b2f?cid=d2a35cbaf6ce479aa22480457f01ad2f, Perfect Duet (Ed Sheeran & Beyoncé)
Beyoncé, Crazy In Love, https://p.scdn.co/mp3-preview/ce8ace0ec425840416be78db07cf50dd331eed4f?cid=d2a35cbaf6ce479aa22480457f01ad2f, Dangerously In Love
J Balvin, Mi Gente (feat. Beyoncé), null, Mi Gente (feat. Beyoncé)
Beyoncé, Love On Top, https://p.scdn.co/mp3-preview/9a7675cc7f71c524af1397cf1675b61a8fbc74ed?cid=d2a35cbaf6ce479aa22480457f01ad2f, 4
Beyoncé, Drunk in Love, https://p.scdn.co/mp3-preview/7052c45ae9298c38fdbd1b45bec7fc5f554fafa0?cid=d2a35cbaf6ce479aa22480457f01ad2f, BEYONCÉ [Platinum Edition]
Beyoncé, Run the World (Girls), https://p.scdn.co/mp3-preview/c5e90d8d93467fc4aeda29c2cbefaa494081232a?cid=d2a35cbaf6ce479aa22480457f01ad2f, 4
Beyoncé, Irreplaceable, https://p.scdn.co/mp3-preview/b1cd9ecf3b5108363846f497897b5bcbec44343a?cid=d2a35cbaf6ce479aa22480457f01ad2f, B'Day Deluxe Edition
Beyoncé, 7/11, https://p.scdn.co/mp3-preview/c17eaf47f9624029dadcd7672b7896c84923e28c?cid=d2a35cbaf6ce479aa22480457f01ad2f, BEYONCÉ [Platinum Edition]
Beyoncé, Partition, https://p.scdn.co/mp3-preview/8ecd5010e5a46f1c84f42bcfed50505395825d7a?cid=d2a35cbaf6ce479aa22480457f01ad2f, BEYONCÉ [Platinum Edition]
Eminem, Walk On Water (feat. Beyoncé), null, Revival
Beyoncé, Best Thing I Never Had, https://p.scdn.co/mp3-preview/86466c6e8a9c56977255b4ed91f22a335ed5467e?cid=d2a35cbaf6ce479aa22480457f01ad2f, 4
Beyoncé, If I Were a Boy, https://p.scdn.co/mp3-preview/f12c28a584052bea2731e3589644a77165b02f7c?cid=d2a35cbaf6ce479aa22480457f01ad2f, I AM...SASHA FIERCE
Nicki Minaj, Feeling Myself, null, The Pinkprint (Deluxe)
Lady Gaga, Telephone, null, The Fame Monster
Beyoncé, Flawless Remix, https://p.scdn.co/mp3-preview/89a75c3b0d197bc20f28ae18f586971638a4df6d?cid=d2a35cbaf6ce479aa22480457f01ad2f, BEYONCÉ [Platinum Edition]
Beyoncé, Single Ladies (Put a Ring on It), https://p.scdn.co/mp3-preview/69c8bae97df9121ee440b23053fe20f64c204408?cid=d2a35cbaf6ce479aa22480457f01ad2f, I AM...SASHA FIERCE
Beyoncé, Countdown, https://p.scdn.co/mp3-preview/ad046f8b135785f005bf84b63d657299cd6010ee?cid=d2a35cbaf6ce479aa22480457f01ad2f, 4
Beyoncé, Me, Myself and I, https://p.scdn.co/mp3-preview/c2fd6a04b5ef5e9ca5573c88679183aaaf9b356f?cid=d2a35cbaf6ce479aa22480457f01ad2f, Dangerously In Love
DJ Khaled, Top Off, https://p.scdn.co/mp3-preview/6a323067f2c990daacf689cb50149521a3721892?cid=d2a35cbaf6ce479aa22480457f01ad2f, Top Off


"movie-this"

Marias-MacBook-Pro:liri Marifer$ node liri.js movie-this
this is loaded
================ Movie Info ================
Title: Undefined
Release Year: 2014
IMdB Rating: N/A
Country: Lebanon
Language: Arabic
Plot: N/A
Actors: Dana Ahmed, Fouz Alfahad, Nour Arida, Soraya Bakhtiar
/Users/Marifer/Desktop/liri/liri.js:44
            console.log("Rotten Tomatoes Rating: " + body.Ratings[2].Value);
                                                                     ^

TypeError: Cannot read property 'Value' of undefined
    at Request._callback (/Users/Marifer/Desktop/liri/liri.js:44:70)
    at Request.self.callback (/Users/Marifer/Desktop/liri/node_modules/request/request.js:185:22)
    at emitTwo (events.js:126:13)
    at Request.emit (events.js:214:7)
    at Request.<anonymous> (/Users/Marifer/Desktop/liri/node_modules/request/request.js:1161:10)
    at emitOne (events.js:116:13)
    at Request.emit (events.js:211:7)
    at IncomingMessage.<anonymous> (/Users/Marifer/Desktop/liri/node_modules/request/request.js:1083:12)
    at Object.onceWrapper (events.js:313:30)
    at emitNone (events.js:111:20)
    at IncomingMessage.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:139:11)
    at process._tickCallback (internal/process/next_tick.js:181:9)
Marias-MacBook-Pro:liri Marifer$ node liri movie-this frozen
this is loaded
================ Movie Info ================
Title: Frozen
Release Year: 2013
IMdB Rating: 7.5
Country: USA
Language: English, Norwegian
Marias-MacBook-Pro:liri Marifer$ node liri movie-this frozenthis is loaded
================ Movie Info ================
Title: Frozen
Release Year: 2013
IMdB Rating: 7.5
Country: USA
Language: English, Norwegian
Plot: When the newly-crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.
Actors: Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad
Rotten Tomatoes Rating: 74/100
Rotten Tomatoes URL: http://www.rottentomatoes.com/m/frozen_2013/
================== THE END =================


"do-what-it-says"
   
Marias-MacBook-Pro:liri Marifer$ node liri do-what-it-says
this is loaded
================ Info ===================
spotify-this-song,"I Want it That Way"
================ THE END ================
Marias-MacBook-Pro:liri Marifer$
