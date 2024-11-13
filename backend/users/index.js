var express = require('express');
var router = express.Router();

const userData = [];

module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request for the users API.');

    // Logik zur Handhabung der "users" API
    if (req.method === "GET") {

        const search = req.query.search || '';
        let results = roomData;

        if (search) {
            results = roomData.filter(room => {
              // Einfacher String-Vergleich
              return room.location.toLowerCase().includes(search.toLowerCase());
            });
          }

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: results, // Der body wird jetzt mit den Suchergebnissen gefüllt
            headers: {
                'Content-Type': 'application/json' // Stellt sicher, dass die Antwort als JSON formatiert ist
            }
        };
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
