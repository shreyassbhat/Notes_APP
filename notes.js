const fs = require('fs')
const chalk = require('chalk')


const loadNotes = () =>{

    try{

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson) 

    }
    catch(e){

        return []
    }

}

const saveNotes = (notes)=>{

    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json',data)

}


const addNotes = (title,body) => {
    const notes = loadNotes()

    const duplicate = notes.find((note)=>note.title===title)
if(!duplicate){
    notes.push({
        title:title,
        body:body
    })

    saveNotes(notes)

}
else{

    console.log(chalk.red.inverse("TITLE ALREADY TAKEN"))
    
}
}

const  removeNotes = (title) => {

    const notes = loadNotes()

    const notesTOKeep = notes.filter(function(note){
        return note.title !== title
    })
    
    
    if(notes.length > notesTOKeep.length ){

        console.log(chalk.green.inverse("NOte with" +title +"Removed"))
        saveNotes(notesTOKeep)

    }
    else{
        console.log(chalk.red.inverse("NOT REMOVED "))

    }



}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach((note)=>{
        console.log(note.title)
        
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((n)=>{
        return n.title =title
    })

    if(note){
        console.log(chalk.blue(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.redBright.inverse("NO TITLE AVAILABLE IN THIS NAME"))
    }
}








module.exports = {
    addNotes,
    removeNotes,
     listNotes,
    readNotes 
}