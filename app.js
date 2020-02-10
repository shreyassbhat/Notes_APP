const fs = require('fs');
const yargs = require('yargs')
const chalk = require('chalk')

const notes = require('./notes');

yargs.command({
    command:'add',
    describe:'TO ADD THE NOTE',
    builder:{
        title:{
            describe:'Title for the Notes',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Description for Notes',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){

        notes.addNotes(argv.title,argv.body)

    }

})


yargs.command({

    command:'remove',
    describe:'To remove the Notes',
    builder:{
        title:{
            describe:'Title to remove the note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
         notes.removeNotes(argv.title)
        
    }
})

yargs.command({

    command:'list',
    describe:'To list the Notes',

    handler(argv){
         notes.listNotes(argv.title)
        
    }
})



yargs.command({

    command:'read',
    describe:'To read the Notes',
    builder:{
        title:{
            describe:'Title to read',
            demandOption:true,
            type:'string'

        }
    },

    handler(argv){
         notes.readNotes(argv.title)
        
    }
})







yargs.parse()
