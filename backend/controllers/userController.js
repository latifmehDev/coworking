const bcrypt = require('bcrypt');
const saltRounds = 10;

async function registerNewUser(username, password) {
  try {
    // Verbindung zur 'users'-Sammlung herstellen
    const usersCollection = req.app.locals.db.collection("users");

    // Überprüfen, ob der Benutzername bereits existiert
    const existingUser = await usersCollection.findOne({ username: username });
    if (existingUser) {
      throw new Error('Benutzername existiert bereits');
    }

    // Hashen des Passworts
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Speichern des neuen Benutzers in der Datenbank
    const newUser = { username: username, passwordHash: passwordHash };
    await usersCollection.insertOne(newUser);

    console.log('Benutzer erfolgreich registriert');
  } catch (error) {
    console.error('Fehler bei der Registrierung des Benutzers:', error.message);
  }
};

async function loginUser(username, password) {
  try {
    // Verbindung zur 'users'-Sammlung herstellen
    const usersCollection = req.app.locals.db.collection("users");

    // Suchen des Benutzers in der Datenbank
    const user = await usersCollection.findOne({ username: username });

    // Überprüfen, ob ein Benutzer gefunden wurde
    if (!user) {
      throw new Error('Benutzer nicht gefunden');
    }

    // Vergleichen des Passworts
    const match = await bcrypt.compare(password, user.passwordHash);

    if (match) {
      // Login erfolgreich
      console.log('Login erfolgreich');
      // Hier können Sie weitere Aktionen durchführen, z.B. eine Sitzung erstellen, Tokens generieren usw.
    } else {
      // Login fehlgeschlagen
      console.log('Login fehlgeschlagen');
    }
  } catch (error) {
    // Fehlerbehandlung
    console.error('Fehler beim Überprüfen des Benutzers:', error.message);
  }
};

module.exports = {registerNewUser, loginUser};