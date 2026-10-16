[Voir la maquette DigiCoStream sur Figma](https://www.figma.com/design/fvlqz5p2QWJNZWZxQx8Mff/DjiKoStream?node-id=1-3)

# DjikoStream — version propre et formatée

Cette version reprend le front-end précédent mais avec :

- HTML indenté et lisible ;
- une balise ou un bloc par ligne ;
- les nouvelles phrases d'accroche ;
- le footer : "Votre prochaine histoire commence ici." ;
- JavaScript laissé vide de toute solution.

## Raccourci VS Code utile

Pour reformater automatiquement un fichier :

- Windows / Linux : `Shift + Alt + F`

Si VS Code te demande un formateur, l'extension la plus utilisée est :

- **Prettier - Code formatter**

Pour l'utiliser automatiquement à chaque sauvegarde :

1. Ouvre les paramètres VS Code.
2. Recherche `Format On Save`.
3. Active `Editor: Format On Save`.
4. Choisis Prettier comme formateur par défaut pour HTML/CSS/JS.

## Structure CSS

1. `variables.css`
2. `typography.css`
3. `base.css`
4. `components.css`
5. CSS spécifique à la page
