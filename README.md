# Itinov entretien Angular

## Lancer l'application 

Se placer dans le dossier itinov-angular-interview-template

Taper ```npm i```

Taper ```ng serve```

L'application est maintenant disponible sur http://localhost:4200

## L'exercice

L'application affiche simplement des films (le titre et le poster) sur une page movies disponible en cliquant sur le lien Movies sur la page principale.

Ici les films affichés sont instanciés à la création du composant.

1) Créer un bouton qui ajoute des films provenant du service créé dans app/movies.service.ts. Les films renvoyés par ce service doivent être ajoutés à l'existant
2) Le problème est qu'en rappuyant sur le bouton, on ajoute les mêmes films en boucle, donc trouver un moyen de n'ajouter que les films qui ne sont pas déjà affichés (pour tester on pourra ajouter un bouton ou autre pour retirer un film du tableau)

