var express = require('express');
var router = express.Router();
 
// Route für GET-Anfragen an /customer
router.get('/', function(req, res, next) {
    // Logik für die Antwort implementieren
    // Zum Beispiel:
    res.json({ message: "Kundendaten", data: {'Name': 'Mehmet'} });
  });
 
module.exports = router;