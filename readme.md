# Simple Text Encryption Website

This is a simple website made with **HTML, CSS and Javascript** which receives text through a textarea and follows some rules in order to give as an output a text which is very lightly encrypted.

## The encryption Rules
 - La letra "e" es convertida para "enter"
 - La letra "i" es convertida para "imes"  
 - La letra "a" es convertida para "ai"  
 - La letra "o" es convertida para "ober"  
 - La letra "u" es convertida para "ufat"

## Oracle Next Education / Alura
This project was done as a part of the **Oracle Next Education (One)** program. This is the challenge of the formation: "Principiante en Programación G6" imparted by **ALURA**

**#challengeonecodificador6**

## The encryption/decryption logic

The encryptor uses a series of function to verify and clean the text before performing any actions with it. (preventing UPPERCASE characters and accents (á, é, í, etc)).
For the encryption process it simply traverses the string entering a switch statement each time checking for any vowel, if the character is not a vowel it will simply be transfered to the new string. However, if the character is a vowel, it will change it for its required encrypted version.
The decryption is done similarly but on a reversed way.