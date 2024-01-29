# Application design - TD1

Dans ce mini rapport, je vais présenter les principaux aspects de mon projet d'application en React Native avec Expo.

### Design Choisi

Pour ce projet j'ai choisi le design d'application avec les montres. J'ai donc implémenté la première page avec les quatres montres présentés. J'ai aussi implémenté une autre page avec des détails sur la montre comme indiqué sur le figma dans la partie bonus. 

### Fonctionnalités Bonus

En plus des fonctionnalités de base j'ai fais en sorte que la page de détail corresponde à la montre sur laquelle on a cliqué. Enfin, j'ai essayé, de faire en sorte que l'application s'adapte à peu près à toute taille d'écran même si elle n'est pas totalement responsive. 

### Technologie Choisie

Pour le développement de cette application, j'ai choisi d'utiliser React Native en combinaison avec Expo. En effet je souhaitais utiliser un language hybride iOS et Android. Pour voir un apperçu de mon application, j'ai utilisé dans un premier temps Androïd Studio avec 'npx expo start' puis j'ai utilisé 'npm run web'.

### Descriptif de l'application

- **App.js** : Dans ce fichier j'ai mis en place la navigation, déclaré les pages, et importé les polices d'écritures. 

- **Home_page** : Dans le dossier Home_page nous avons le fichier Home_page.js ainsi que le composant Card.js. Le fichier Home_page contient toute la page d'accueil. Dans Home_page on appelle utilise le composant Card. Le composant Card prend en paramètre les informations de la montre qui sont données dans Home_page

- **Watch_page.js** : Contient la page de détail pour chaque montre. Les informations pour la page sont données en paramètre depuis Home_page

- **Assets** : Dans le dossier asset j'ai importé dans Fonts les 4 polices d'écritures nécessaires. Dans le dossier Pictures j'ai importé les photos des 4 montres dans deux formats, un format petit trouvé sur le figma, et un format plus détaillé pour la page détaillée de chaque montre