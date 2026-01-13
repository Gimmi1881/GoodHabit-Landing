# GoodHabit - Landing Page

Landing page professionnelle pour l'application mobile GoodHabit, destinée aux seniors souhaitant faire de l'activité physique depuis chez eux.

## 📋 Description

GoodHabit est une application mobile qui permet aux seniors de :
- Faire de l'activité physique depuis chez eux
- Suivre leur progression de manière personnalisée
- Bénéficier d'exercices adaptés à leurs pathologies spécifiques (arthrose, problèmes cardiaques, mobilité réduite, etc.)

Cette landing page présente l'application et ses fonctionnalités de manière claire et accessible.

## ✨ Fonctionnalités de la landing page

### Sections principales
1. **Header/Navigation** - Navigation fixe avec menu responsive
2. **Hero Section** - Présentation principale avec CTAs de téléchargement
3. **Fonctionnalités** - 6 fonctionnalités clés de l'application
4. **Bénéfices** - 4 bénéfices pour la santé des utilisateurs
5. **Témoignages** - 3 témoignages d'utilisateurs satisfaits
6. **Comment ça marche** - Processus en 4 étapes
7. **FAQ** - Questions fréquentes avec système d'accordéon
8. **CTA de téléchargement** - Section d'appel à l'action
9. **Footer** - Liens, réseaux sociaux et informations de contact

### Caractéristiques techniques
- ✅ **HTML5 sémantique** - Structure propre et accessible
- ✅ **CSS3 moderne** - Flexbox, Grid, animations CSS
- ✅ **JavaScript vanilla** - Aucune dépendance externe
- ✅ **Design responsive** - Mobile-first, parfaitement adapté à tous les écrans
- ✅ **Accessibilité** - ARIA labels, navigation au clavier, contraste élevé
- ✅ **Performance** - Code optimisé, animations fluides
- ✅ **SEO** - Meta tags optimisés pour les moteurs de recherche

## 🎨 Design

### Palette de couleurs
- **Bleu principal** : `#4a90a4` - Couleur rassurante et professionnelle
- **Vert accent** : `#7ab88f` - Santé et vitalité
- **Orange secondaire** : `#e8834f` - Énergie et motivation
- **Texte** : `#2c3e45` - Lisibilité optimale

### Typographie
- Taille de base : 18px (lisible pour les seniors)
- Hauteur de ligne : 1.7 (confort de lecture)
- Polices système pour des performances optimales

### Accessibilité
- Contraste WCAG AA minimum
- Navigation au clavier complète
- Support des lecteurs d'écran
- Support de la réduction de mouvement
- Tailles de police adaptées

## 🚀 Installation et utilisation

### Prérequis
Aucun ! Cette landing page est entièrement statique et ne nécessite aucune installation.

### Démarrage rapide

1. **Cloner ou télécharger le projet**
```bash
git clone https://github.com/Gimmi1881/GoodHabit-Landing.git
cd GoodHabit-Landing
```

2. **Ouvrir le fichier index.html**
   - Double-cliquez sur `index.html` pour l'ouvrir dans votre navigateur
   - Ou utilisez un serveur local pour un développement optimal

### Serveur local (recommandé pour le développement)

Avec Python :
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Avec Node.js :
```bash
npx http-server
```

Avec PHP :
```bash
php -S localhost:8000
```

Accédez ensuite à : `http://localhost:8000`

## 📁 Structure du projet

```
GoodHabit-Landing/
├── index.html              # Page principale
├── css/
│   ├── style.css          # Styles principaux
│   └── responsive.css     # Media queries et responsive
├── js/
│   └── main.js           # JavaScript pour les interactions
├── images/                # Dossier pour les images (actuellement placeholders SVG)
├── README.md             # Documentation (ce fichier)
└── Read.md               # Description courte du projet
```

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes (Grid, Flexbox, animations)
- **JavaScript ES6+** - Interactions et fonctionnalités
- **SVG** - Icônes et placeholders d'images

## 📱 Responsive Design

La landing page est entièrement responsive et optimisée pour :
- 📱 Smartphones (320px+)
- 📱 Tablettes (768px+)
- 💻 Ordinateurs portables (992px+)
- 🖥️ Grands écrans (1400px+)

### Points de rupture (breakpoints)
- **Mobile** : jusqu'à 768px
- **Tablette** : 769px à 992px
- **Desktop** : 993px et plus
- **Large Desktop** : 1400px et plus

## ⚡ Performance

### Optimisations
- Code CSS et JavaScript optimisé
- Animations performantes avec `transform` et `opacity`
- Lazy loading des images (si implémenté)
- Pas de dépendances externes lourdes
- Utilisation de `passive: true` pour les event listeners de scroll

### Scores attendus
- ✅ Performance : 95+
- ✅ Accessibilité : 95+
- ✅ Bonnes pratiques : 95+
- ✅ SEO : 95+

## ♿ Accessibilité

### Fonctionnalités d'accessibilité
- Navigation au clavier complète (Tab, Enter, Espace, Échap)
- Support des lecteurs d'écran (ARIA labels)
- Contraste de couleurs WCAG AA
- Tailles de police lisibles
- Focus visible sur tous les éléments interactifs
- Support de `prefers-reduced-motion`
- Texte alternatif pour les images

### Touches clavier
- **Tab** : Navigation entre les éléments
- **Enter / Espace** : Activer les boutons et liens
- **Échap** : Fermer le menu mobile
- **↑↓** : Navigation dans les menus (si applicable)

## 🎯 Personnalisation

### Modifier les couleurs
Éditez les variables CSS dans `css/style.css` :
```css
:root {
    --primary-color: #4a90a4;  /* Votre couleur principale */
    --secondary-color: #e8834f; /* Votre couleur secondaire */
    /* ... */
}
```

### Modifier le contenu
- **Textes** : Éditez directement dans `index.html`
- **Images** : Remplacez les placeholders SVG par vos images dans le dossier `images/`
- **Liens** : Modifiez les `href` des boutons de téléchargement

### Ajouter des images
1. Placez vos images dans le dossier `images/`
2. Remplacez les placeholders SVG dans `index.html`
3. Utilisez des formats optimisés (WebP, JPEG optimisé, SVG pour les icônes)

## 🔧 Fonctionnalités JavaScript

### Menu mobile
- Toggle du menu responsive
- Fermeture automatique au clic sur un lien
- Fermeture au clic en dehors
- Support du clavier

### FAQ Accordion
- Ouverture/fermeture des questions
- Un seul item ouvert à la fois
- Accessible au clavier

### Animations au scroll
- Apparition en fondu des éléments
- Détection automatique de la visibilité
- Performance optimisée avec `requestAnimationFrame`

### Smooth Scroll
- Défilement fluide vers les sections
- Prise en compte de la hauteur du header fixe

## 📊 SEO

### Meta tags inclus
- Description de la page
- Mots-clés pertinents
- Open Graph pour les réseaux sociaux
- Twitter Cards
- Viewport pour le responsive

### Bonnes pratiques SEO
- Structure sémantique HTML5
- Titres hiérarchisés (H1, H2, H3)
- Texte alternatif pour les images
- URLs propres et descriptives
- Temps de chargement optimisé

## 🌐 Navigateurs supportés

- ✅ Chrome (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Edge (dernières versions)
- ✅ Opera (dernières versions)
- ⚠️ Internet Explorer 11 (support partiel)

## 🚀 Déploiement

### GitHub Pages
1. Poussez le code sur GitHub
2. Activez GitHub Pages dans les paramètres
3. Sélectionnez la branche principale
4. Votre site sera disponible à : `https://username.github.io/GoodHabit-Landing`

### Netlify
1. Connectez votre dépôt GitHub
2. Configurez le build (aucune commande nécessaire)
3. Déployez automatiquement

### Vercel
1. Importez le projet depuis GitHub
2. Déployez en un clic
3. Configuration automatique

## 📝 TODO / Améliorations futures

- [ ] Ajouter de vraies images (remplacer les placeholders SVG)
- [ ] Implémenter un formulaire de contact fonctionnel
- [ ] Ajouter une newsletter avec backend
- [ ] Créer des versions en plusieurs langues
- [ ] Ajouter Google Analytics ou autre outil de tracking
- [ ] Optimiser les images avec WebP
- [ ] Ajouter un Service Worker pour le mode offline
- [ ] Implémenter un mode sombre

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Auteur

**GoodHabit Team**

## 📞 Contact

- Email : contact@goodhabit.fr
- Téléphone : 01 23 45 67 89
- Localisation : Paris, France

## 🙏 Remerciements

- Merci à tous les seniors qui utilisent notre application
- Merci aux professionnels de santé qui nous conseillent
- Merci à la communauté open source

---

**Note** : Cette landing page est un projet statique qui ne nécessite aucun backend. Pour les fonctionnalités nécessitant un serveur (formulaire de contact, newsletter), vous devrez implémenter votre propre backend ou utiliser des services tiers (FormSpree, Mailchimp, etc.).

Fait avec ❤️ pour les seniors actifs
