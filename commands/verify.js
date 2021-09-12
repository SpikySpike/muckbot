module.exports = {
    name: 'verify',
    description: "this is a verify command!",
    execute(message, args){

        if(message.member.roles.cache.has('863413406152785978')){
            message.channel.send('Already Verified! <:wedoalittletrolling:831252296109129758>')

        } else {
            message.channel.send("Verified succesfully! Now you have access to all chats! :partying_face:")
            message.member.roles.add('863413406152785978')
        }


    }
}