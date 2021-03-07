const express = require('express');
const router = express.Router();

const songKickController = require('../controllers/songKickController');

const spotifyController = require('../controllers/spotifyController');

// SongKick API Routing
router.get(
  '/skapi',
  songKickController.getEventDetails,
  songKickController.eventParser,
  (req, res) => {
    return res.status(200).send(res.locals.event);
  }
);

// Spotify API Routing
router.post(
  '/spotapi',
  spotifyController.getArtistId,
  spotifyController.getTopTracks,
  spotifyController.buildPlaylist,
  (req, res) => {
    return res.status(200).send(res.locals.snapshot);
  }
);

// **** TEMPORARY ROUTE TO MOCK SONGKICK API **** //
router.get('/data', songKickController.serveJSON, (req, res) => {
  return res.status(200).send(res.locals.data);
});

module.exports = router;
