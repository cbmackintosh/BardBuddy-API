const express = require('express');
const app = express();
const cors = require('cors');

app.locals.plays = require('./allPlays');
app.locals.chapters = require('./allChapters');
app.locals.titles = require('./allTitles');
app.locals.characters = require('./allCharacters');

app.use(cors());
app.locals.title = 'Bard Buddy API';

app.get('/fullTitle/:title', (request, response) => {
  const { title } = request.params
  const fullTitle = app.locals.titles.find(play => play.playTitle === title).fullTitle
  if(!fullTitle) {
    return response.sendStatus(404);
  }
  response.status(200).json(fullTitle)
})

app.get('/allTitles/:genre', (request, response) => {
  const { genre } = request.params
  const allTitles = app.locals.titles.filter(play => play.genre === genre);
  if(!allTitles) {
    return response.sendStatus(404);
  }
  response.status(200).json(allTitles);
})

app.get('/play/:title/:actNum/:sceneNum', (request, response) => {
  const { title } = request.params;
  const { actNum } = request.params;
  const { sceneNum } = request.params;
  const scene = app.locals.plays.filter(play => play.title === title && play.section === parseInt(actNum) && play.chapter === parseInt(sceneNum)).sort((a, b) => a.paragraphID - b.paragraphID)
  if (!scene) {
    return response.sendStatus(404)
  }
  response.status(200).json(scene)
})

app.get('/play/:title', (request, response) => {
  const { title } = request.params;
  const play = app.locals.plays.filter(play => play.title === title).sort((a, b) => a.paragraphID - b.paragraphID);
  if (!play) {
    return response.sendStatus(404);
  }
  response.status(200).json(play);
});

app.get('/chapters/:title', (request, response) => {
  const { title } = request.params;
  const chapters = app.locals.chapters.filter(play => play.title === title);
  if(!chapters) {
    return response.sendStatus(404);
  }
  response.status(200).json(chapters);
})

app.get('/characters/:title', (request, response) => {
  const { title } = request.params;
  const characters = app.locals.characters.filter(character => character.works === title);
  if (!characters) {
    return response.sendStatus(404);
  }
  response.status(200).json(characters);
})

var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});
