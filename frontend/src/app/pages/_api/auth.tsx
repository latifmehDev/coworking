import NextAuth from "next-auth"
import AzureadB2CProvider from "next-auth/providers/azure-ad-b2c"
import EmailProvider from "next-auth/providers/email"
/*
import AppleProvider from "next-auth/providers/apple"
import GoogleProvider from "next-auth/providers/google"
import LinkedinProvider from "next-auth/providers/linkedin"
import AtlassianProvider from "next-auth/providers/atlassian"
import InstagramProvider from "next-auth/providers/instagram" // Korrektur des Namens
import WordpressProvider from "next-auth/providers/wordpress"
*/

export default NextAuth({
  providers: [
    // Azure Active Directory B2C-Anbieter
    AzureadB2CProvider({
      clientId: process.env.AzureadB2CProvider_CLIENT_ID,
      clientSecret: process.env.AzureadB2CProvider_CLIENT_SECRET,
    }),
    // E-Mail-Anbieter für Passwortlose Anmeldung
    EmailProvider({
      server: process.env.EMAIL_SERVER, // SMTP-Server-Details
      from: process.env.EMAIL_FROM, // Die E-Mail-Adresse, die als Absender verwendet wird
    }),
  ],
});
