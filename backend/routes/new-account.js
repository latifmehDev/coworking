const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;
        await userController.registerNewUser(username, password);
        res.status(200).json({ message: 'Registrierung erfolgreich' });
    } catch (error) {
        res.status(500).json({ message: 'Fehler bei der Registrierung: ' + error.message });
    }
});

module.exports = router;