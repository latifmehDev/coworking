var express = require('express');
var router = express.Router();

const roomData = [
  {
    'id': '10',
    'name': 'Einzelarbeitsplatz',
    'location': 'Zürich',
    'price': '50',
    'rating': '4.6',
    'imageURL': 'https://thumbs.dreamstime.com/b/gesch%C3%A4ftsbuchhaltungsteambesprechung-im-raumb%C3%BCro-unter-verwendung-des-stiftes-zeigend-auf-schreibarbeit-finanzierung-konzept-154771088.jpg',
    'isFavourite': 'true',
    'isNew': 'false',
    'reviews': [
      {
        'reviewerName': 'programmerHacker',
        'comment': 'Super',
        'rateDate': '06.02.2024',
        'rating': '5'
      },
      {
        'reviewerName': 'theWorker91',
        'comment': 'Wow!! Great',
        'rateDate': '06.02.2024',
        'rating': '5'
      },
      {
        'reviewerName': 'youNameIt',
        'comment': 'Almost perfect, free drinks would be great',
        'rateDate': '06.02.2024',
        'rating': '4'
      },
    ],
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
  {
    'id': '20',
    'name': 'Büroraum im Herzen der Stadt',
    'location': 'Zürich',
    'price': '80',
    'rating': '5.0',
    'imageURL': 'https://thumbs.dreamstime.com/b/gesch%C3%A4ftsbuchhaltungsteambesprechung-im-raumb%C3%BCro-unter-verwendung-des-stiftes-zeigend-auf-schreibarbeit-finanzierung-konzept-154771088.jpg',
    'isFavourite': 'true',
    'isNew': 'false',
    'reviews': [
      {
        'reviewerName': 'programmerHacker',
        'comment': 'Super',
        'rateDate': '06.02.2024',
        'rating': '5'
      },
      {
        'reviewerName': 'theWorker91',
        'comment': 'Wow!! Great',
        'rateDate': '06.02.2024',
        'rating': '5'
      },
      {
        'reviewerName': 'youNameIt',
        'comment': 'Almost perfect, free drinks would be great',
        'rateDate': '06.02.2024',
        'rating': '4'
      },
    ],
  },
];

module.exports = async function (context, req) {
  context.log('HTTP trigger function processed a request for the users API.');

  if (req.method === "GET") {
    const roomId = req.params.id || (req.query.id ? req.query.id : null);
    if (roomId) {
      console.log('Raum ID -- ' + roomId);
      const room = roomData.find(r => r.id === roomId);
      console.log('Raum -- ' + room);
      if (room) {
        context.res = {
          // status: 200, /* Defaults to 200 */
          body: room,
          headers: {
            'Content-Type': 'application/json'
          }
        };
      } else {
        context.res = {
          status: 404,
          body: "Raum nicht gefunden"
        };
      };

    } else {
      const searchLocation = req.query.search || '';
      // Konvertiere page und limit in Zahlen mit Standardwerten
      const page = parseInt(req.query.page, 10) || 1;
      const limit = parseInt(req.query.limit, 10) || 10;

      // Filtere roomData basierend auf dem Suchparameter
      let filteredRooms = searchLocation ? roomData.filter(room => room.location.toLowerCase().includes(searchLocation.toLowerCase())) : roomData;

      // Berechne den Startindex basierend auf der Seite und dem Limit
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      // Extrahiere die Teilmenge von roomData basierend auf dem Startindex und dem Limit
      const paginatedRooms = filteredRooms.slice(startIndex, endIndex);

      // Optional: Berechne die Gesamtanzahl der Seiten
      const totalPages = Math.ceil(filteredRooms.length / limit);
      console.log('**************************');
      console.log('LOCATION: ', searchLocation);
      console.log(paginatedRooms);
      console.log('**************************');

      context.res = {
        body: {
          data: paginatedRooms,
          page,
          limit,
          totalPages, // Optional, aber nützlich für die Paginationslogik auf der Client-Seite
          totalCount: filteredRooms.length // Gesamtanzahl der Elemente nach dem Filtern
        },
        headers: {
          'Content-Type': 'application/json'
        }
      };
    }
  } else if (req.method === "POST") {
    // Logik einfügen, um die POST-Daten zu verarbeiten
    context.res = {
      // status: 201, /* Defaults to 200 */
      body: "This is a POST response from the users API"
    };
  } else {
    // Methode nicht unterstützt
    context.res = {
      status: 405,
      body: "Method not supported"
    };
  }
};
