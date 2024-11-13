var express = require('express');
var router = express.Router();

/*
const roomData = [
  {
    'id': '10',
    'name': 'Einzelarbeitsplatz',
    'location': 'Zürich',
    'price': '50',
    'rating': '4.6',
    'imageURL': 'https://thumbs.dreamstime.com/b/gesch%C3%A4ftsbuchhaltungsteambesprechung-im-raumb%C3%BCro-unter-verwendung-des-stiftes-zeigend-auf-schreibarbeit-finanzierung-konzept-154771088.jpg',
    'isFavourite': 'true',
    'isNew': 'false'
  },
  {
    'id': '2',
    'name': 'Meetingraum',
    'location': 'Zürich',
    'price': '50',
    'rating': '4.6',
    'imageURL': 'https://thumbs.dreamstime.com/b/gesch%C3%A4ftsbuchhaltungsteambesprechung-im-raumb%C3%BCro-unter-verwendung-des-stiftes-zeigend-auf-schreibarbeit-finanzierung-konzept-154771088.jpg',
    'isFavourite': 'true',
    'isNew': 'false'
  },
  {
    'id': '3',
    'name': 'Meetingraum',
    'location': 'Basel',
    'price': '50',
    'rating': '4.6',
    'imageURL': 'https://thumbs.dreamstime.com/b/gesch%C3%A4ftsbuchhaltungsteambesprechung-im-raumb%C3%BCro-unter-verwendung-des-stiftes-zeigend-auf-schreibarbeit-finanzierung-konzept-154771088.jpg',
    'isFavourite': 'true',
    'isNew': 'false'
  },
  {
    'id': '4',
    'name': 'Meetingraum',
    'location': 'Zürich',
    'price': '50',
    'rating': '4.6',
    'imageURL': 'https://thumbs.dreamstime.com/b/gesch%C3%A4ftsbuchhaltungsteambesprechung-im-raumb%C3%BCro-unter-verwendung-des-stiftes-zeigend-auf-schreibarbeit-finanzierung-konzept-154771088.jpg',
    'isFavourite': 'true',
    'isNew': 'false'
  },
];
*/
 
// Route für GET-Anfragen an /rooms
router.get('/', function(req, res, next) {
  const search = req.query.search || '';
  let results = roomData;

  // Wenn ein Suchbegriff vorhanden ist, filtern Sie die Ergebnisse
  if (search) {
    results = roomData.filter(room => {
      // Einfacher String-Vergleich für den Standort, kann nach Bedarf erweitert werden
      return room.location.toLowerCase().includes(search.toLowerCase());
    });
  }

  // Senden Sie die gefilterten oder vollständigen Daten als JSON zurück
  res.json({
    message: "RoomData",
    data: results
  });
});

module.exports = router;