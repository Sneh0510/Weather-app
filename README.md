# 🌤️ Weather Wizard  
> _A sleek, full-stack weather app built with modern web technologies._

![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Server-Express-000000?style=for-the-badge&logo=express&logoColor=white)
![OpenWeatherMap](https://img.shields.io/badge/API-OpenWeatherMap-FF6600?style=for-the-badge&logo=OpenWeatherMap&logoColor=white)

---

## ✨ Overview

**Weather Wizard** is a modern, full-stack weather application built with **React**, **Vite**, **Express**, and **Tailwind CSS**. Instantly get real-time weather updates for any city around the globe with a visually engaging and responsive UI.

---

## 🚀 Features

- 🌍 **Real-time Weather** – Live weather updates from OpenWeatherMap API  
- 🧩 **Beautiful UI** – Stylish, animated interface using Tailwind CSS  
- 📱 **Fully Responsive** – Mobile and desktop friendly  
- ❌ **Error Handling** – Clear feedback on invalid input or API issues  
- 🔐 **Secure Architecture** – Express backend handles API key safely  

---

## 🖼️ Demo Preview

<p align="center">
  <img src="client/public/ss.png" alt="Weather Wizard Screenshot" width="600" />
</p>

<p align="center">
  🔗 <a href="https://weather-app-nu-five-80.vercel.app/" target="_blank"><strong>Live Demo</strong></a>
</p>

---


## ⚙️ **Getting Started**

### 📦 Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

### 🔧 1. Clone the Repository

```bash
git clone https://github.com/your-username/weather-wizard.git
cd weather-wizard
```
### 📁 2. Install Dependencies

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 🔑 3. Set Up Environment Variables

```bash
# Create a .env file in the server directory:
OPENWEATHER_API_KEY=your_openweathermap_api_key
PORT=5000
```

### ▶️ 4. Run the Application

```bash
# In one terminal, start the backend
cd server
npm run dev

# In another terminal, start the frontend
cd ../client
npm run dev
```
🔗 Frontend: http://localhost:5173
🔗 Backend: http://localhost:5000

---

### 🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

---

### 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

### 🌐 Acknowledgements
OpenWeatherMap for the weather API
Vite
Tailwind CSS
