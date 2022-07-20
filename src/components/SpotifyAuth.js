import axios from "axios";
import SpotifyWebApi from "spotify-web-api-js";

const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;

const Spotify = require("spotify-web-api-js");
const s = new Spotify();

const spotifyApi = new SpotifyWebApi();

const Buffer = require("buffer/").Buffer;
const qs = require("qs");
