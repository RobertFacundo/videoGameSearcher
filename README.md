# 🎮 Video Game Searcher — Frontend

A modern React interface to explore video games. It includes an infinite carousel, an autocomplete search bar to filter games, and a responsive grid gallery with interactive cards that open YouTube trailers. All data is loaded from a local JSON file, styled with SCSS and subtle animations in a dark theme.

---
## 🌐 Live Demo

🔗 **Frontend App (Live)**: [https://videogame-searcher.vercel.app/](https://videogame-searcher.vercel.app/)

---
## 🚀 Tech Stack

- React 18 — Core UI library  
  
- SCSS — Custom styles and animations
    
- react-autosuggest — Autocomplete search functionality 
   
- Swiper — Infinite image carousel  
  
- Vercel — Frontend hosting and deployment  

---

## 🧠 Key Features

- Responsive grid rendering video game cards from a local JSON data file (`mockGames`).  
  
- Infinite carousel highlighting selected game images.  
  
- Autocomplete search bar that filters games by name and opens the official YouTube trailer on selection.  
  
- Modern dark theme styling with subtle glowing text and hover animations.  
  
- Fixed footer with developer credits and external links.

---
## 📁 Project Structure

```bash
src/
├── components/
│   ├── Footer.jsx
│   ├── InfiniteCarrousel.jsx
│   ├── SearchBar.jsx
│   ├── VideoGameCard.jsx
│   └── VideoGameContainer.jsx
├── data/
│   └── games.js
├── hooks/
│   └── useSearchBar.js
├── views/
│   └── Home.jsx
├── App.jsx
├── index.js
├── styles/
│   ├── Footer.scss
│   ├── InfiniteCarrousel.scss
│   ├── SearchBar.scss
│   ├── VideoGameCard.scss
│   └── VideoGameContainer.scss
└── 
```

---

## 📬 Contact

Created by **Facundo Robert** – [GitHub](https://github.com/RobertFacundo)  

Feel free to reach out for collaboration or feedback!!

----