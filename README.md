# 🚀 GitHub User Explorer

A simple web application that allows users to:
- Browse a list of GitHub users
- Click on a user to view detailed profile information
- View avatar, bio, location, repo count, followers, and more

Built using **HTML**, **CSS**, and **JavaScript** with the **GitHub REST API**.

---

## 📸 Demo

> 📍 Visit live demo: _Add link if deployed (e.g., GitHub Pages, Vercel)_

---

## 📁 Project Structure

```
/users.html      → Main HTML file  
/users.css       → Styling using Flexbox  
/users.js        → Logic for fetching and rendering GitHub data
```

---

## 💡 Features

- 🔍 Fetches and displays GitHub users from the public API
- 🧑‍💻 Clickable user cards that show detailed profile info
- 🖼️ Avatar and profile details including bio, location, followers
- 🧾 API error handling and dynamic DOM rendering
- 📱 Responsive layout using Flexbox

---

## ⚙️ How to Run Locally

1. **Clone the repository**

```bash
git clone https://github.com/vidyabhandari/Git-Hub-Users/
cd Git-Hub-Users
```

2. **Open `users.html` in your browser**

No build tools required – it's pure HTML/CSS/JS.

---

## 🧪 Technologies Used

- **HTML5**
- **CSS3** (Flexbox layout)
- **JavaScript (Vanilla)**
- **GitHub REST API**: [`https://api.github.com/users`](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28)

---

## 📌 API Reference

- **GET** `/users` – Fetch a list of GitHub users  
- **GET** `/users/:username` – Fetch details of a specific user
