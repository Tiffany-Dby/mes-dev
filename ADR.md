ADR - Choix des Technologies

# Backend : Django + Django Ninja

**Titre :**

Utilisation de Django et Django Ninja pour la gestion de l’API backend.

**Contexte :**

Le backend doit être robuste, rapide à développer et facilement extensible. Django offre un ORM puissant, une gestion des migrations et un écosystème riche. Django Ninja, basé sur Pydantic et FastAPI, permet d’écrire une API performante tout en restant compatible avec Django.

**Décision :**
	•	Django est utilisé comme framework principal pour gérer la logique métier, l’authentification et l’ORM.
	•	Django Ninja est choisi pour exposer l’API REST avec une syntaxe plus simple et des performances améliorées.
	•	Django SimpleJWT est utilisé pour gérer l’authentification par tokens JWT.

**Conséquences :**

__Avantages :__
	•	Développement rapide avec un ORM intégré.
	•	Meilleure gestion des routes grâce à Django Ninja.
	•	Compatibilité avec Pydantic pour la validation des données.

__Inconvénients :__
	•	Nécessite une bonne compréhension de Django.
	•	Moins rapide que FastAPI en pur asynchrone, mais suffisant pour notre besoin actuel.

⸻

# Base de données : MySQL

**Titre :**

Choix de MySQL comme base de données principale.

**Contexte :**

Le projet a besoin d’une base de données relationnelle performante, fiable et compatible avec Django ORM. MySQL est un choix populaire avec un bon support pour Django et de bonnes performances en lecture/écriture.

**Décision :**
	•	MySQL est utilisé avec Django ORM pour gérer la persistance des données.
	•	L’instance MySQL est hébergée en conteneur Docker pour faciliter le déploiement et le développement local.

**Conséquences :**

__Avantages :__
	•	Bonne compatibilité avec Django ORM.
	•	Facilité d’intégration avec Docker et d’autres services.
	•	Performances solides pour les requêtes relationnelles.

__Inconvénients :__
	•	Peut être moins flexible que PostgreSQL pour certaines fonctionnalités avancées.
	•	Gestion des connexions simultanées à optimiser.

⸻

# Frontend : React.js + React Native

**Titre :**

Utilisation de React.js pour le front web et React Native pour le mobile.

**Contexte :**

L’application doit être disponible à la fois sur web et mobile. Pour mutualiser le code et réduire la charge de développement, React.js (web) et React Native (mobile) ont été choisis.

**Décision :**
	•	React.js est utilisé pour le front web car il offre une bonne modularité et réactivité.
	•	React Native est choisi pour le mobile, permettant un développement cross-platform avec une seule base de code.
	•	L’API Django Ninja est consommée via Axios et React Query pour gérer les appels réseau.

**Conséquences :**

__Avantages :__
	•	Un code mutualisé entre le web et le mobile.
	•	Performances natives avec React Native.
	•	Grande communauté et compatibilité avec l’API backend.

__Inconvénients :__
	•	React Native peut nécessiter des modules natifs pour certaines fonctionnalités.
	•	Nécessite une bonne gestion des états et des performances côté mobile.
