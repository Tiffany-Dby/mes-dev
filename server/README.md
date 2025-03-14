# 🛠️ Documentation API

## 📌 Introduction
Ce projet est le backend du projet **Cyna**, une application permettant la gestion des utilisateurs via une API REST sécurisée avec **JWT**. Ce backend est développé avec **Django Ninja** et utilise **MySQL** comme base de données.

---

## 🚀 Installation & Lancement

### 1️⃣ Prérequis
- **Python 3.9+**
- **Django 4+**
- **MySQL**
- **Docker (optionnel)**

### 2️⃣ Installation du projet
Clone le repository et installe les dépendances :
```bash
git clone https://github.com/Tiffany-Dby/mes-dev
cd mes-dev
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
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "confirmPassword": "string"
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
    "email": "string",
    "password": "string"
  }
  ```
- **Réponse :**
  ```json
  {
    "access": "eyJhbGciOiJIUzI1NiIs...",
    "refresh": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "id": int,
      "firstName": "string",
      "lastName": "string",
      "email": "string"
    }
  }
  ````

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
    "firstName": "string",
    "lastName": "string",
    "email": "string"
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
    "firstName": "string",
    "lastName": "string",
    "email": "string"
  }
  ```

#### ➤ **📌 Mise à jour des informations utilisateur**
- **Méthode :** `PUT`
- **Endpoint :** `/api/users/update`
- **Description :** Modifie les informations d'un utilisateur.
- **Body :**
  ```json
  {
    "id": int,
    "firstName": "string",
    "lastName": "string",
    "email": "string"
  }
  ```
- **Exemple de réponse :**
  ```json
  {
    "id": int,
    "firstName": "string",
    "lastName": "string",
    "email": "string"
  }
  ```

#### ➤ **📌 Mise à jour du mot de passe**
- **Méthode :** `PUT`
- **Endpoint :** `/api/users/updatePassword`
- **Description :** Change le mot de passe de l'utilisateur.
- **Body :**
  ```json
  {
    "id": int,
    "password": "string"
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

---

## 🛠️ **Technologies Utilisées**
- **Backend :** Django, Django Ninja
- **Authentification :** JWT
- **Base de données :** MySQL
- **Containerisation :** Docker
- **Linting & Formatage :** Black
- **CI/CD :** SonarQube pour l’analyse statique du code
