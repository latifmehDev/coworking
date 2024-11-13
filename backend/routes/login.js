const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userController.checkUser(username, password);

        if (user) {
            res.status(200).json({ success: true, message: 'Login erfolgreich' });
            // Authentifizierungstokens oder Sitzungsinformationen setzen
        } else {
            res.status(401).json({ success: false, message: 'Login fehlgeschlagen' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Fehler beim Einloggen' });
    }
});

module.exports = router;
