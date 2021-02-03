console.log("here we gooooo");
const Discord = require('discord.js');
const client = new Discord.Client();
client.login('ODA1ODMwODkxNjQxMjQxNjYw.YBgmgA.L7a2g-zIFkdX_7I_Ou98fsIzkrM');
client.on('ready',startmagik);
function startmagik()
{
    client.on("message",checkMessage);

}
function checkMessage(msg)
{
    var i,r1,r2,r3;
    var repl;
    const str=msg.content.toLowerCase();
    if(str==='reassign' && msg.channel.id==="746257533613899777")
    {
        repl="The new sanin(mods) are : "
        let roleID = "516171529508093956";
        let membersWithRole = msg.guild.roles.cache.get(roleID).members;
       for (const element of membersWithRole)
        {
            let role = msg.guild.roles.cache.find(r => r.name === "sanin");
            let member = msg.guild.members.cache.find(member => member.id === element[0]);
            member.roles.remove(role).catch(console.error);
        }
        roleID = "508937973161656321";
        membersWithRole = msg.guild.roles.cache.get(roleID).members;
        //console.log(membersWithRole);
        i=0;
        r1=Math.random()*membersWithRole.size;
        r2=Math.random()*membersWithRole.size;
        r3=Math.random()*membersWithRole.size;
        console.log(r1,r2);
        k=0;
        for (const element of membersWithRole )
        {
            if (i==Math.floor(r1) || i==Math.floor(r2) || i==Math.floor(r3))
            {
                let role = msg.guild.roles.cache.find(r => r.name === "sanin");
                let member = msg.guild.members.cache.find(member => member.id === element[0]);
                repl+=member.user.username+" ";
                member.roles.add(role).catch(console.error);
                if(k==0)
                {
                    repl+=", ";
                }
                if(k==1)
                {
                    repl+="and ";
                }
                k++;
            }
            i++;
        }
        msg.channel.send(repl);
        msg.channel.send(`<@&${'516171529508093956'}>${msg}`+"ment complete");
    }   
    const arr=str.split(" ");
    if(arr[0]==='gimme' && arr.length===2 && msg.channel.id==="746257533613899777")
    {
        const new_role = msg.guild.roles.cache.find(role => role.name === arr[1]);
        const ch_mod = msg.guild.roles.cache.find(role => role.name === "chunin");
        //console.log(new_role);
        if(new_role===undefined)
        {
            msg.channel.send(arr[1]+" is not a valid role");
        }
        else if(new_role.rawPosition<ch_mod.rawPosition )
        {
            //console.log(msg.author.id);
            let member = msg.guild.members.cache.find(member => member.id === msg.author.id);
            member.roles.add(new_role).catch(console.error);
            msg.channel.send("done");
        }
        else
        {
            msg.channel.send("https://tenor.com/view/blank-stare-really-idontbelieveyou-side-gif-6151149");
            msg.reply(" bruh ,how stupid do u think i am?");
        }

    }
    else if(arr[0]==='removerole'&& arr.length===2 && msg.channel.id==="746257533613899777")
    {
        const new_role = msg.guild.roles.cache.find(role => role.name === arr[1]);
        const ch_mod = msg.guild.roles.cache.find(role => role.name === "chunin");
        if(new_role===undefined)
        {
            msg.channel.send(arr[1]+" is not a valid role");
        }
        else if(new_role.rawPosition<ch_mod.rawPosition )
        {
            //console.log(msg.author.id);
            let member = msg.guild.members.cache.find(member => member.id === msg.author.id);
            member.roles.remove(new_role).catch(console.error);
            msg.channel.send("done");
        }
    }
    else if (str==='myroles' && msg.channel.id==="746257533613899777")
    {
        repl="your roles are:";
        let member = msg.guild.members.cache.find(member => member.id === msg.author.id);
        let cur_role = msg.guild.roles.cache.find(role => role.name === "jonin");
        for(elem of member._roles)
        {
            cur_role = msg.guild.roles.cache.find(role => role.id === elem);
            repl+="\n"+cur_role.name;
        }
        msg.reply(repl);
    }
}