const express = require('express') // Для сервера
const axios = require('axios') // Для запросов
const cheerio = require('cheerio') // Для парсинга

const app = express()
const port = 3000

const url = 'https://jut.su/'
const releaseMainClass = 'all_anime ya-grid-template'

let releasesMain = [

]

const toStr = json => {return JSON.stringify(json)}
const getError = error => {return {'error': error}}
const strError = error => {return toStr(getError(error))}
const getData = dataArray => {return {'data': dataArray}}
const strData = dataArray => {return toStr(getData(dataArray))}

app.get('/', (req, res) => {
    res.send(strError('Not found'))
})

app.get('/anime', (req, res) => {
    axios.get(url)
        .then(res => {
            const $ = cheerio.load(res.data)
            $(releaseMainClass).each((index, element) => {
                const releaseImg = $(element).find()
                const releaseTitle = $(element).find('ya-unit-title ya-grid-template').text()
                const releaseGenres = 
            })
        })
    res.send(strData(releasesMain))
})
app.listen(port, () => console.log(`Слушаю на порте ${port}.`))