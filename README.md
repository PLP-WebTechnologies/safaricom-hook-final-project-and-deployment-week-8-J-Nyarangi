# 🛒 EverMall - Ecommerce Website

EverMall is a **simple frontend-based ecommerce website** where users can **browse products, add them to their cart, and simulate a checkout process**. Built with **HTML, CSS, and JavaScript**.

## 🌐 Live Site  
🔗 **[Visit EverMall](https://evermall.netlify.app)**  

---

## 🏗️ Project Architecture

```mermaid
graph TD
    A[EverMall - Ecommerce Website] --> B[Frontend]
    B --> C[HTML]
    B --> D[CSS]
    B --> E[JavaScript]
    C --> F[Static Pages]
    D --> G[Styling]
    E --> H[Interactivity]
    F --> I[index.html]
    F --> J[about.html]
    F --> K[shop.html]
    G --> M[style.css]
    G --> N[custom.css]
    H --> O[cart.js]
    H --> P[main.js]
```

---

## 🎯 Features

### **Visual Effects & Animations**
- Product cards with hover effects  
- Cart toast notification with animated stars ✨  
- Smooth transitions and loading animations  
- Mobile-first approach with responsive design  

```mermaid
mindmap
  root((Visual Effects & Animations))
    3D Effects
      Product Hover
    Animations
      Cart Toast
      Loading
    Styling
      Shadows
      Gradients
    Interactions
      Hover Effects
      Smooth Transitions
```

---

### **Layout & Design**
- Responsive grid layout for products  
- Customizable product card designs  
- Simple and intuitive UI  
- Mobile-optimized  

---

## 🔧 Technologies Used

| Tech Stack  | Description |
|-------------|-------------|
| **Frontend**  | HTML, CSS, JavaScript |
| **Styling**  | Custom CSS |
| **Interactivity** | Vanilla JavaScript |

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/PLP-WebTechnologies/safaricom-hook-final-project-and-deployment-week-8-J-Nyarangi.git
cd safaricom-hook-final-project
```

### 2️⃣ Open the Project
Simply open **`index.html`** in your browser.

OR, if you have **Live Server (VS Code Extension)** installed:
```sh
npx live-server
```

---

## 📊 User Flow

```mermaid
flowchart LR
    A[User Visit] --> B[Homepage]
    B --> C[Browse Products]
    C --> D[Add to Cart]
    D --> E[Show Notification]
    E --> F[Checkout Page]
    F --> G[Place Order]
```

---

## 📸 Screenshots

### 1️⃣ Homepage  
![Homepage Screenshot](link-to-homepage-screenshot)

### 2️⃣ Product Page  
![Product Page Screenshot](link-to-product-page-screenshot)

---

## 📝 Contribution Guidelines

We welcome contributions! Follow these steps:

1️⃣ **Fork the repository**  
2️⃣ **Create a feature branch** (`git checkout -b feature-name`)  
3️⃣ **Commit your changes** (`git commit -m "Added new feature"`)  
4️⃣ **Push to your branch** (`git push origin feature-name`)  
5️⃣ **Open a Pull Request**  

---

## 📜 License

This project is **open-source** under the [MIT License](LICENSE).

---

## 📬 Contact & Support

For any issues or contributions, reach out:  
📧 Email: **contact@evermall.com**  
📌 GitHub Issues: [Report Issues](https://github.com/PLP-WebTechnologies/safaricom-hook-final-project/issues)

---

## 🚀 Future Enhancements

- Add product search functionality 🔍  
- Implement product filtering by category and price  
- Add user wishlist feature 💖  
- Add product reviews and ratings 🌟  

---

## 🔥 Project Flow

### **Getting Started with Git**

```mermaid
gitGraph
    commit
    branch develop
    checkout develop
    commit
    branch feature
    checkout feature
    commit
    commit
    checkout develop
    merge feature
    checkout main
    merge develop
    commit
```

---

🛍️ **Enjoy shopping with EverMall!** 🚀
