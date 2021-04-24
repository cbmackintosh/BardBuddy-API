const express = require('express');
const app = express();
const cors = require('cors');

app.locals.plays = require('./allPlays');
app.locals.chapters = require('./allChapters');
app.locals.titles = require('./allTitles');
app.locals.characters = require('./allCharacters');

app.use(cors());
app.locals.title = 'Bard Buddy API';

app.get('/allTitles', (request, response) => {
  const allTitles = app.locals.titles;
  if(!allTitles) {
    return response.sendStatus(404);
  }
  response.status(200).json(allTitles);
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

// app.set('port', process.env.PORT || 8000);

// app.listen(app.get('port'), () => {
//   console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
// });

var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});
