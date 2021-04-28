# Bard Buddy API

<img src="https://img.shields.io/badge/LinkedIn-cameron--mackintosh-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0FBBD6"/>
<img src="https://img.shields.io/badge/Github-cbmackintosh-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>

##Abstract:##

The Bard Buddy API is an Express microservice built specifically for my app <a href="https://github.com/cbmackintosh/bard-buddy">Bard Buddy</a> - a study tool for high school students and undergraduates studying Shakespeare. The database for this API was downloaded from the <a href="https://www.opensourceshakespeare.org/">Open Source Shakespeare website</a> and was originally written in SQL. To facilitate deployment of the server to Heroku, PostgreSQL was used to query all the required data which was then printed to console and copy-pasted from Chrome dev tools into JavaScript files.

##Installation:##

The API is deployed on Heroku, so all endpoints are accessible from the base URL `http://bard-buddy-api.herokuapp.com/`. To install the server locally, follow these instructions:

* Clone down this repo: `git clone git@github.com:cbmackintosh/BardBuddy-API.git`
* Run `npm install`
* Run the server using `node server.js`
* Default port for the server is `http://localhost:3001`

##Endpoints:##

`/fullTitle/:title` GET request, returns the full title of a play from a given id. For example, `/fullTitle/allswell` returns All's Well That Ends Well.

`/allTitles/:genre` GET request, returns all the play titles associated with a specific genre: either histories, comedies or tragedies

`/play/:title` GET request, returns the full text of the specified play

`/characters/:title` GET request, returns a list of all characters for a specified play

`/sonnets` GET request, returns full text for all 154 of Shakespeare's Sonnets

`/poems` Get request, returns full text for all five of Shakespeare's poems.

##Technologies used:##

* ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![Node](https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/Express%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white)
* ![PostgreSQL](https://img.shields.io/badge/postgresql%20-%23E34F26.svg?&style=for-the-badge&logo=postgresql&logoColor=white)
