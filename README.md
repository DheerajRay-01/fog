# 🌟 Full-Stack Product Management Application  
_Assessment Submission – Software Developer Role (Future of Gaming)_

---

## 🔗 Live Project
- **Frontend:** [fog-one.vercel.app](https://fog-one.vercel.app/)  
- **Repository:** [github.com/DheerajRay-01/fog](https://github.com/DheerajRay-01/fog)  

---

## 👨‍💻 Candidate Details
- **Name:** Dheeraj Ray  
- **Email:** dheerajray2003@gmail.com  
- **Phone:** +91 7999768117  
- **Resume:** [dheerajRayResume](#)  

---

## 📌 Project Overview
This project is a **full-stack product management web application** developed as part of the **Round 1 – Online Assessment**.  
The system enables **CRUD operations**, **sorting, filtering, pagination**, and provides a **responsive, user-friendly interface**.

The goal was to design a **scalable, maintainable, and production-ready application** with strong focus on **user experience and backend efficiency**.

---

## ✨ Key Features
✅ **Responsive UI** – Works seamlessly on mobile & desktop.  
✅ **CRUD Operations** – Add, edit, and delete products using interactive popups.  
✅ **Server-Side Sorting** – By **brand name** and **price**.  
✅ **Server-Side Filtering** – By **brand name**, **category**, and **price range**.  
✅ **Server-Side Pagination** – Smooth navigation across product lists.  
✅ **Hover Effects** – Interactive icons for update & delete on product cards.  
✅ **Global State Management** – Redux Toolkit ensures instant state updates.  

---

## 🛠️ Tech Stack
**Frontend**  
- React.js  
- Tailwind CSS  
- Redux Toolkit (State Management)  
- Axios  

**Backend**  
- Node.js + Express.js  
- MongoDB + Mongoose  
- RESTful APIs  

**Deployment**  
- Frontend → Vercel  
- Backend → Render  

---

## 🏗️ High-Level Approach
1. **Backend (API Development)**  
   - Built a RESTful API with Express.js and MongoDB.  
   - Implemented pagination, sorting, filtering at database query level.  
   - Created routes for CRUD operations with proper validation & error handling.  

2. **Frontend (UI & UX)**  
   - Developed a responsive layout using React + Tailwind.  
   - Displayed products in a grid with interactive hover actions.  
   - Used popups for Add & Update product actions (static image for demo).  

3. **State Management**  
   - Managed global state using Redux Toolkit.  
   - API calls handled via Redux Thunks for async actions.  
   - Ensured real-time UI updates after every operation.  

4. **Testing & Deployment**  
   - Verified API endpoints using Postman.  
   - Cross-device testing for responsiveness.  
   - Deployed seamlessly with environment configurations.  

---

## ⚡ Quick Start (Local Setup)
```bash
# Clone repository
git clone https://github.com/DheerajRay-01/fog.git
cd fog
````

### Backend

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file in `backend/`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Access frontend at: `http://localhost:5173`
Access backend at: `http://localhost:5000`

---

## 📸 Screenshots

### Product Grid with Hover Actions

<img width="1896" height="2489" alt="fog-one vercel app_ (1)" src="https://github.com/user-attachments/assets/101cd669-fc4c-4b9d-bfb0-33cb2c9e3489" />

---

## 🎯 Why This Solution?

* **Scalable Architecture** – Separation of frontend, backend, and state management.
* **Production-Ready Design** – Error handling, environment configs, and responsive UI.
* **Developer-Friendly** – Clean code structure, reusable components, and readable APIs.
* **User-Centric** – Smooth interactions with modals, hover effects, and pagination.

---
