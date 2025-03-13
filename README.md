# 🛠️ Cyna Backend – Documentation API

## 📌 Introduction
Ce projet est le backend du projet **Cyna**, une application permettant la gestion des utilisateurs via une API REST sécurisée avec **JWT**. Ce backend est développé avec **Django Ninja** et utilise **MySQL** comme base de données.

---

## 🚀 Installation & Lancement

### 1️⃣ Prérequis
- **Python 3.9+**
- **Django 4+**
- **MySQL**
- **Docker (optionnel)**
- **Postman / cURL pour tester l’API**

### 2️⃣ Installation du projet
Clone le repository et installe les dépendances :
```bash
git clone https://github.com/votre-repo/cyna-backend.git
cd cyna-backend
pip install -r requirements.txt
```

### 3️⃣ Configuration de l’environnement
Créer un fichier `.env` à la racine du projet :
```env
SECRET_KEY="votre_clé_secrète"
DEBUG=True
DATABASE_URL="mysql://mesdev:mesdev@127.0.0.1:3306/mesdev_db"
```

### 4️⃣ Appliquer les migrations et lancer le serveur
```bash
python manage.py migrate
python manage.py runserver
```
L’API sera disponible sur **http://127.0.0.1:8000**

---

## 🔐 Authentification
L'API utilise **JWT** pour sécuriser les routes.
- 🔑 **Token d’accès** : Généré lors du `login` ou `register`.
- 🔄 **Token de rafraîchissement** : Permet de renouveler le token d’accès.

Le token doit être envoyé dans l’en-tête **Authorization** sous cette forme :
```
Authorization: Bearer <votre_access_token>
```

---

## 📡 **Documentation des Routes**

### 🔹 **Auth Routes**
#### ➤ **📌 Inscription**
- **Méthode :** `POST`
- **Endpoint :** `/api/auth/register`
- **Description :** Crée un nouvel utilisateur.
- **Body :**
  ```json
  {
    "firstName": "Quentin",
    "lastName": "Stempfer",
    "email": "quentin.stempfer@gmail.com",
    "password": "Test123!",
    "confirmPassword": "Test123!"
  }
  ```
- **Réponse :**
  ```json
  {
    "code": 200,
    "message": "Utilisateur créé avec succès"
  }
  ```

#### ➤ **📌 Connexion**
- **Méthode :** `POST`
- **Endpoint :** `/api/auth/login`
- **Description :** Connecte un utilisateur et retourne les tokens JWT.
- **Body :**
  ```json
  {
    "email": "quentin.stempfer@gmail.com",
    "password": "Test123!"
  }
  ```
- **Réponse :**
  ```json
  {
    "access": "eyJhbGciOiJIUzI1NiIs...",
    "refresh": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "id": 1,
      "firstName": "Quentin",
      "lastName": "Stempfer",
      "email": "quentin.stempfer@gmail.com"
    }
  }
  ```

#### ➤ **📌 Déconnexion**
- **Méthode :** `POST`
- **Endpoint :** `/api/auth/logout`
- **Description :** Invalide le token de l'utilisateur.
- **Réponse :**
  ```json
  {
    "code": 200,
    "message": "Déconnexion réussie"
  }
  ```

---

### 🔹 **User Routes**
#### ➤ **📌 Récupérer un utilisateur par ID**
- **Méthode :** `GET`
- **Endpoint :** `/api/users/get/{id}`
- **Description :** Retourne les informations d'un utilisateur par son ID.
- **Exemple de réponse :**
  ```json
  {
    "id": 1,
    "firstName": "Quentin",
    "lastName": "Stempfer",
    "email": "quentin.stempfer@gmail.com"
  }
  ```

#### ➤ **📌 Récupérer un utilisateur par Email**
- **Méthode :** `POST`
- **Endpoint :** `/api/users/getByEmail/{email}`
- **Description :** Retourne un utilisateur à partir de son adresse email.
- **Exemple de réponse :**
  ```json
  {
    "id": 1,
    "firstName": "Quentin",
    "lastName": "Stempfer",
    "email": "quentin.stempfer@gmail.com"
  }
  ```

#### ➤ **📌 Mise à jour des informations utilisateur**
- **Méthode :** `PUT`
- **Endpoint :** `/api/users/update`
- **Description :** Modifie les informations d'un utilisateur.
- **Body :**
  ```json
  {
    "id": 1,
    "firstName": "Titi",
    "lastName": "Toto",
    "email": "titi.toto@exemple.com"
  }
  ```
- **Exemple de réponse :**
  ```json
  {
    "id": 1,
    "firstName": "Titi",
    "lastName": "Toto",
    "email": "titi.toto@exemple.com"
  }
  ```

#### ➤ **📌 Mise à jour du mot de passe**
- **Méthode :** `PUT`
- **Endpoint :** `/api/users/updatePassword`
- **Description :** Change le mot de passe de l'utilisateur.
- **Body :**
  ```json
  {
    "id": 1,
    "password": "Toto123!"
  }
  ```

#### ➤ **📌 Suppression d’un utilisateur**
- **Méthode :** `DELETE`
- **Endpoint :** `/api/users/delete/{id}`
- **Description :** Supprime un utilisateur par son ID.
- **Réponse :**
  ```json
  true  // Si l'utilisateur a été supprimé
  ```
  ```json
  false  // Si l'utilisateur n'a pas été supprimé
  ```

---

## 🛠️ **Technologies Utilisées**
- **Backend :** Django, Django Ninja
- **Authentification :** JWT
- **Base de données :** MySQL
- **Containerisation :** Docker
- **Linting & Formatage :** Black, Flake8
- **CI/CD :** SonarQube pour l’analyse statique du code

---

## 🔥 **Améliorations Futures**
✅ Ajouter une gestion des rôles utilisateurs  
✅ Implémenter une récupération de mot de passe  
✅ Supporter l’upload de fichiers et avatars  
✅ Optimisation des requêtes SQL avec Django ORM  

---

## 📬 **Contact & Contributeurs**
📧 Contact : `contact@cyna.com`  
👥 Projet développé par l'équipe **Cyna**
