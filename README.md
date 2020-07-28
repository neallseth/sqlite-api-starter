# sqlite-api-starter
This project is meant to serve as a simple example of an SQLite-backed REST API built with Node.js and Express.  It can be used as a starter template, or alternatively, just to learn what an implemenation with this tech stack may look like in practice.

## Installation
Run `npm i` to install all project dependencies

## Usage
1. Run `node server.js` to start the server
2. Try a GET request to one of the example endpoints:  [http://localhost:3000/playlists](http://localhost:3000/playlists).  This should return a JSON array of objects representing the items in the Playlists table of the example database (to see why, check out /routes/playlists.js)
