<p align="center">
  <a href="https://gpt-flix-alpha.vercel.app/">
    <img src="./public/DevTube_Dark.png" alt="DubeevT Logo" />
  </a>
</p>

<h2 align="center">
    <b><i>'DevTube'</i> — YouTube-Inspired Video Streaming Platform</b>
</h2>

DevTube is a **modern, feature-rich YouTube-inspired web application** built with **React, Redux, and Tailwind CSS**.  
It focuses on **clean UI, real-time interactions, performance optimization, and scalable architecture**, while following industry-level best practices.

> ⚡ Built as a **desktop-first application** with advanced features like **AI-like search suggestions**, **live chat simulation**, **nested comments**, **dark/light theme**, and **Redux-powered state management**.

---

## 🚀 Live Demo
🔗 https://dev-tube-gilt.vercel.app


## 📸 Screenshots

<div align="center">
      <img src = "https://iili.io/fXQtGd7.md.png" width ="400" /> 
      <img src = "https://iili.io/fXQp2Ev.md.png" width ="400" /> 
      <br/>
      <img src = "https://i.ibb.co/8L3kSRwg/Search-Bar-Light.png" width ="400" /> 
      <img src = "https://i.ibb.co/27c2z3vs/Search-Bar-Dark.png" width ="400" /> 
      <br/> 
      <img src = "https://i.ibb.co/bRRxd932/Watch-Page-Light.png" width ="400" />
      <img src = "https://i.ibb.co/bRYmZ8RX/Watch-Page-Dark.png" width ="400" /> 
      <br/>
</div>
<br/>


## 🧠 Key Features

### 🔍 Smart Search System
- **Auto-suggest search** with debouncing
- Keyboard navigation (⬆️ ⬇️ Enter)
- Click-to-select suggestions
- Search results page with video grid
- URL-based search (`/results?search_query=`)

---

### 💬 Live Chat (Real-Time Simulation)
- YouTube-style **Live Chat UI**
- Blinking 🔴 live indicator
- Auto-generated messages using polling
- Redux-based message store
- Smooth scrolling with hidden scrollbar
- User message input & submission

---

### 🗨️ Nested Comments System
- YouTube-like **threaded comments**
- Parent comments with replies
- Vertical connector lines
- HTML-safe comment rendering
- Like / Dislike / Reply actions
- Optimized API fetch handling

---

### 🎨 Dark & Light Theme
- Global **Dark / Light mode**
- Redux-controlled theme state
- Theme persists across reloads
- Fully themed:
  - Header
  - Sidebar
  - Watch page
  - Live chat
  - Comments
  - Search suggestions
- Smooth hover & transition effects

---

### 📂 Sidebar Navigation
- Icon-based sidebar using `react-icons`
- Collapsible sidebar (Desktop)
- Animated labels
- Nested sections:
  - Home
  - Shorts
  - Subscriptions
  - History
  - Playlists
  - Watch Later
  - Liked Videos
  - Explore Categories
- Show more / Show less functionality

---

### 🎬 Watch Page
- Responsive **16:9 video player**
- Video metadata & channel info
- Subscribe / Unsubscribe system
- Suggested videos section
- Live chat integration
- Auto sidebar collapse on watch page

---

### 🧠 Performance Optimizations
- **Lazy loading** with `React.lazy` + `Suspense`
- Redux caching of:
  - Video details
  - Trending videos
- Prevents unnecessary API calls
- Skeleton loaders & spinners

---

### 🧱 Desktop-Only UX Strategy
- Mobile & tablet devices see a **Desktop-Only animated screen**
- Prevents broken layouts on small screens
- Clean and intentional UX decision

---

## 🧰 Tech Stack

### ⚛️ Frontend
- **React 19**
- **React Router v7**
- **Redux Toolkit**
- **Tailwind CSS**
- **React Icons**

---

### 🗄️ State Management
- Redux Store
- Feature-based slices:
  - `appSlice` (theme, menu state)
  - `videosSlice` (trending, caching)
  - `chatSlice` (live chat messages)

---

### 🌐 APIs
- **YouTube Data API v3**
  - Search videos
  - Video details
  - Channel info
  - Comments
- Optimized API usage with caching

---

### 🧪 UX Enhancements
- Keyboard accessibility
- Hover & transition animations
- Hidden scrollbars
- Sticky headers
- Aspect-ratio safe video embeds



## 🗂️ Folder Structure

```txt
src/
├── components/
│   ├── Header/
│   ├── Sidebar/
│   ├── SearchComponent/
│   ├── WatchComponent/
│   ├── LiveChat/
│   ├── Comments/
│   ├── DesktopOnly.jsx
│   └── ...
├── store/
│   ├── appSlice.js
│   ├── videosSlice.js
│   ├── chatSlice.js
│   └── appStore.js
├── utils/
│   ├── constants.js
│   └── helpers.js
├── assets/
│   └── avatars/
├── App.jsx
├── main.jsx
└── index.css
```

## 🎯 Future Improvements

- Mobile-responsive layout

- Real backend for live chat

- Authentication & user profiles

- Video upload feature

- Playlist creation

- Infinite scrolling

## 👨‍💻 Author

**Ansh Gupta** <br/>

<i>Aspiring Full-Stack & AI Engineer</i>

⭐ If you like this project ❤️

**Give it a ⭐ on GitHub — it helps a lot!**

---
