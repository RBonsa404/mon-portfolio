# Ajouter une publication ou une attestation

Tout se passe dans un seul fichier : `js/actualites.js`. La page `actualites.html` se met à jour toute seule.

## Ajouter une publication LinkedIn

1. Sur LinkedIn, ouvrez votre publication, cliquez sur **…** puis **Copier le lien de la publication**.
2. Collez ce lien dans votre navigateur et validez. Une fois la publication ouverte, copiez l'adresse complète dans la barre d'adresse : elle commence par `https://www.linkedin.com/posts/…`.
   Un lien court du type `https://lnkd.in/…` ne suffit pas, car l'aperçu a besoin du numéro de la publication présent dans l'adresse complète.
3. Dans `js/actualites.js`, ajoutez le lien **en haut** de la liste `posts`, entre guillemets et suivi d'une virgule :

```js
posts: [
  "https://www.linkedin.com/posts/abdoul-rachid-bonsa-64956031b_nouveau-post-ugcPost-7520000000000000000-AbCd/",
  "https://www.linkedin.com/posts/abdoul-rachid-bonsa-64956031b_masterclass-clubinformatique-ist-ugcPost-7519672698449412097-U_-Y/",
],
```

L'aperçu de la publication (texte, photos, réactions) s'affiche avec un bouton **Voir la publication**.
La publication doit être **publique** sur LinkedIn pour que l'aperçu apparaisse.

## Ajouter une attestation

1. Placez les fichiers dans `assets/attestations/` :
   - une image d'aperçu (`.jpg` ou `.png`), par exemple une photo ou une capture de l'attestation ;
   - le document complet si vous l'avez (`.pdf`), facultatif.
2. Dans `js/actualites.js`, ajoutez un bloc dans la liste `certificates` :

```js
certificates: [
  {
    title: { fr: "Attestation — Grand Salon de la Data en Afrique", en: "Certificate — Grand Salon de la Data en Afrique" },
    issuer: "Grand Salon de la Data en Afrique",
    date: { fr: "juil. 2026", en: "Jul 2026" },
    image: "assets/attestations/gsda-2026.jpg",
    file: "assets/attestations/gsda-2026.pdf"
  },
],
```

Un clic sur l'aperçu ouvre l'image en grand, et le bouton **Voir le document** ouvre le PDF.

## Mettre en ligne

Enregistrez, puis envoyez les modifications sur GitHub (`git add`, `git commit`, `git push`).
GitHub Pages met le site à jour en une à deux minutes.
