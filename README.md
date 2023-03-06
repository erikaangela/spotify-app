# Spotify App

A Spotify clone using the [Spotify API](https://developer.spotify.com/documentation/web-api/).

### Project Goals

* Apply React, Axios, and the [Spotify Web API JS npm package](https://github.com/jmperez/spotify-web-api-js).
* Use environment variables to store client ID and secret.
* Use the Spotify API through following the [Client Credentials Flow](https://developer.spotify.com/documentation/general/guides/authorization/client-credentials/).

### How the app works

The one-page app first displays a Spotify logo and searchbar. Users can search by inputting any keyword; upon submitting, the first 50 results are rendered as clickable cards containing the song image, title, and artist. Clicking any will open the song on Spotify in a new tab.

### Technologies Used

* JavaScript
* HTML/CSS
* React JS
* APIs&mdash;[Spotify](https://developer.spotify.com/documentation/web-api/)
* environment variables
* Axios

### Remaining Backlog Items

* Further styling, CSS themes.
* Explicit error messages when user has an invalid input or no results are found.

## Quick Start

* This app requires a Spotify account to run, log in through the [dashboard](https://developer.spotify.com/dashboard/login) to generate your client ID and client secret.
* Clone the app onto your local machine and open it.
* Create an .env file within the root directory and enter your client ID and client secret as shown below:

````
REACT_APP_CLIENT_ID=XXXXXXXXXXXXXXXXXX
REACT_APP_CLIENT_SECRET=XXXXXXXXXXXXXXXXXX
````

* ````npm install```` within the cloned app.
* ````npm start```` after previous command done. It will open in localhost:3000.
