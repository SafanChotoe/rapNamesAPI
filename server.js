const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
    },

    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Jonathan Bennett',
        'birthLocation': 'Chicago, US',
    },

    'unkown': {
        'age': 0,
        'birthName': 'unkown',
        'birthLocation': 'unkown',
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')//__dirname makes sure that server looks in this directory to look for html//
    
})

app.get('/api/:name', (request,response) => {
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName])/*whaterver rapperName is, check if it is in rappers. We use brackets because it can handle spaces in between strings.*/ {
        response.json(rappers[rapperName])/*if rapperName is inside rappers, then return this rapperName*/
    }else {
        response.json(rappers['unkown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})