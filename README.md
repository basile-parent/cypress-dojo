# DOJO cypress
Ce DOJO a pour but de vous faire pratiquer Cypress et acquérir les premières bases pour faire des tests de bout en bout.

## Installation
Cloner ce repo puis lancer les commandes suivantes:

```
npm install
npm run cypress:install-local
```

## Démarrage
```
npm run cypress:ui
```

## Exercices
Nous allons tester l'application **https://example.cypress.io/todo**

### Exercice 1
Fichier `cypress/integration/first-test.spec.js`:
1. Visitez la page
   <br/>⇒ Vérifiez qu'il y a 2 items dans la TODO list
2. Saisissez une valeur dans le champ texte et appuyez sur Entrée (type(`${newItem}{enter}`)
   <br/>⇒ Vérifiez qu’il y a maintenant 3 items
3. Complétez l’item “Pay electric bill” (clic sur la checkbox)
   <br/>⇒ Vérifiez que l’item a maintenant la classe completed.
4. Double cliquez sur l’item “Walk the dog”, changez le texte en “Walk the doggo” puis cliquez sur l’élément h1.
   <br/>⇒ Vérifiez que le texte a bien été modifié.
