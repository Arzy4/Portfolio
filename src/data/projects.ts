export type Project = {
  id: string;
  title: string;
  category: string;
  period: string;
  description: string;
  technologies: string[];
  github: string;
  images: string[];
  imageTitle: string[];
  imageDesc: string[];
  summary: {
    overview: string;
    challenge: string;
  };
  scopeOfWork: string[];
  toolsAndMethods: string[];
  futureImprovement: {
    title: string;
    description: string;
  }[];
  liveUrl?: string;
  documentationUrl?: string;
};

export const projects: Project[] = [
  {
    id: "voltra",
    title: "VOLTRA",
    category: "Full Stack Development",
    period: "August 2026 - September 2026",
    description:
      "An EV charging platform for discovering charging stations, reserving charging slots, and managing bookings.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
    ],
    github: "https://github.com/Arzy4/Voltra_App",
    liveUrl: "https://voltra-app-xi.vercel.app",
    images: [
      "/projectDetail/voltra/voltra.png",
      "/projectDetail/voltra/loginPage.png",
      "/projectDetail/voltra/stationPage.png",
      "/projectDetail/voltra/chargingSlotDetail.png",
      "/projectDetail/voltra/bookingPage.png",
    ],
    imageTitle:[
      "Home Page",
      "Login Page",
      "Station Page",
      "Charging Slot Page",
      "Booking Page",
    ],
    imageDesc: [
      "Introduces VOLTRA and its key features, providing visitors with an overview of the EV charging platform.",
      "Allows users to securely access their accounts through a simple and user-friendly authentication interface.",
      "Displays available EV charging stations, allowing users to explore locations and find suitable charging options.",
      "Provides detailed information about charging slots, including charger types, power capacity, pricing, and availability.",
      "Allows users to view, track, and manage their EV charging reservations through a simple and intuitive interface.",
    ],
    summary: {
      overview:
      "VOLTRA is a full-stack EV charging reservation platform designed to provide a more convenient and efficient charging experience. The platform allows users to discover nearby charging stations, explore available charging slots, make reservations, and manage their bookings through an intuitive and responsive web interface. By simplifying the charging reservation process, VOLTRA aims to help EV drivers plan their charging sessions more effectively, minimize waiting times, and improve accessibility to charging facilities..",

      challenge:
      "As technology continues to advance, electric vehicles (EVs) are becoming increasingly popular, leading to a growing number of EV users. While this transition offers significant environmental and technological benefits, it also introduces new challenges, particularly the increasing demand for charging infrastructure. As more EV drivers rely on public charging stations, overcrowded facilities, limited charging slot availability, and long waiting queues can become major inconveniences. These challenges highlight the need for a more efficient and accessible charging reservation system that allows users to plan their charging sessions, reduce waiting times, and enjoy a more convenient EV charging experience."
    },

    scopeOfWork: [
      "Developed responsive frontend pages using Next.js and Tailwind CSS.",
      "Built REST API endpoints for charging stations, slots, bookings, users, and payments.",
      "Implemented JWT authentication and role-based authorization.",
      "Integrated PostgreSQL with Prisma ORM for database management.",
    ],

    toolsAndMethods: [
      "Frontend: Next.js, TypeScript, and Tailwind CSS.",
      "Backend: NestJS and REST API architecture.",
      "Database: PostgreSQL and Prisma ORM.",
      "Testing: Postman for API testing.",
      "Documentation: Swagger for API reference.",
    ],

    futureImprovement: [
      {
        title: "Payment Gateway Integration",
        description:
          "Integrate secure online payment methods to provide users with a faster and more convenient checkout experience.",
      },
      {
        title: "Real-Time Slot Availability",
        description:
          "Implement live availability updates to help users find available charging slots and avoid booking conflicts.",
      },
      {
        title: "Booking Notifications",
        description:
          "Introduce automated notifications to keep users informed about booking confirmations, reminders, and status changes.",
      },
      {
        title: "Advanced Station Filtering",
        description:
          "Enhance station discovery with filters for location, charger type, pricing, and availability to help users find suitable charging options.",
      },
    ],
  },
  {
    id: "fintrack",
    title: "FinTrack",
    category: "Backend Development",
    period: "",
    description:
      "A financial management REST API for managing accounts, transactions, and categories.",
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
    ],
    github: "https://github.com/Arzy4/Fintrack_API",
    documentationUrl:"https://nestjs-project-five.vercel.app/api/docs",
    images: [
      "/projectDetail/fintrack/api-overview.png",
      "/projectDetail/fintrack/erd.png",
      "/projectDetail/fintrack/fintrack.png",
    ],
    imageTitle: [
      "API Overview",
      "Database Relationships (ERD)",
      "API Documentation & Testing",

    ],
    imageDesc: [
      "FinTrack's REST API endpoints for managing accounts, transactions, categories, and users.",
      "The PostgreSQL database structure and relationships between users, accounts, transactions, and categories.",
      "FinTrack's documented REST API endpoints, request parameters, and response structures through Swagger.",
    ],
    summary:{
      overview:
      "FinTrack is a RESTful backend application designed to support personal financial management through secure and structured API operations. Built with NestJS, PostgreSQL, and Prisma ORM, the application enables users to manage multiple financial accounts, organize transaction categories, and track financial activities. It incorporates authentication, request validation, and automated balance calculations to maintain data integrity and provide reliable financial tracking.",

      challenge:
      "Managing financial information across multiple accounts can become challenging without a centralized system. Inconsistent transaction records, inaccurate account balances, and unauthorized data access can affect the reliability of financial management. FinTrack addresses these challenges by providing a structured backend system that securely manages financial data, maintains accurate account balances, and ensures consistent transaction processing."
    },

    scopeOfWork: [
      "Developed RESTful API endpoints using NestJS and Prisma ORM for managing users, accounts, categories, and transactions.",
      "Implemented automated account balance calculations and synchronization through a dedicated BalanceCalculatorService.",
      "Integrated JWT authentication, role-based authorization, and DTO validation to secure API operations and maintain data integrity.",
      "Documented API endpoints using Swagger, performed API testing with Postman, and deployed the backend to Vercel.",
    ],

    toolsAndMethods: [
      "Backend: NestJS, TypeScript, and RESTful API architecture.",
      "Database: PostgreSQL and Prisma ORM.",
      "Security: JWT authentication, bcrypt password hashing, role-based access control, and DTO validation.",
      "Testing: Postman for API testing and smoke tests.",
      "Documentation: Swagger (OpenAPI) for API reference.",
      "Deployment: Vercel for cloud hosting.",
    ],

    futureImprovement: [
      {
        title: "Financial Analytics Dashboard",
        description:
          "Develop an interactive dashboard to help users visualize account balances, spending patterns, and financial activities.",
      },
      {
        title: "Budget Management",
        description:
          "Introduce budgeting features that allow users to set spending limits and monitor expenses across different categories.",
      },
      {
        title: "Recurring Transactions",
        description:
          "Implement automated recurring transactions to simplify the management of regular income and expenses.",
      },
      {
        title: "Transaction Filtering & Reporting",
        description:
          "Enhance transaction management with advanced filtering, financial summaries, and downloadable reports.",
      },
    ],
  },
  {
    id: "revoshop",
    title: "RevoShop",
    category: "Frontend Development",
    period: "",
    description:
      "A responsive e-commerce application featuring product browsing, shopping cart functionality, and authentication.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    github:
      "https://github.com/Arzy4/RevoShop",
    liveUrl: "https://revoshop123.vercel.app",
    images: [
      "/projectDetail/revoshop/revoshop.png",
      "/projectDetail/revoshop/promotionPage.png",
      "/projectDetail/revoshop/faqPage.png",
      "/projectDetail/revoshop/productDetailPage.png",
      "/projectDetail/revoshop/addToCart.png",
    ],
    imageTitle: [
      "Product Listing Page",
      "Promotion Page",
      "FAQ Page",
      "Product Detail Page",
      "Shopping Cart Page",
    ],
    imageDesc: [
      "Explore a variety of products with organized listings, pricing information, and easy navigation to product details.",
      "View and manage selected products, remove items, and track the total shopping cart cost.",
      "Find answers to frequently asked questions about shopping, payments, shipping, and customer support.",
      "Explore detailed product information, including descriptions, pricing, and shopping cart functionality.",
      "Discover special offers, promotional discounts, and exclusive deals through an organized promotional page.",
    ],
    summary:{
      overview:
      "RevoShop is a responsive e-commerce web application designed to provide a convenient and user-friendly online shopping experience. Built with Next.js, React, TypeScript, and Tailwind CSS, the platform allows users to browse products, explore detailed product information, manage shopping carts, and navigate between different shopping features. The application also includes authentication, protected routes, and an administrative product management interface.",

      challenge:
      "Online shopping platforms require intuitive navigation, organized product information, and efficient shopping cart management to provide a seamless user experience. Maintaining cart data across page navigation, managing access to protected pages, and ensuring responsive layouts across different devices are important challenges in frontend development. RevoShop addresses these challenges by implementing reusable components, persistent cart storage, dynamic routing, and route protection."
    },

    scopeOfWork: [
      "Developed responsive e-commerce pages using Next.js, React, TypeScript, and Tailwind CSS.",
      "Implemented dynamic product routing, reusable UI components, and REST API integration for product data.",
      "Built an interactive shopping cart with persistent LocalStorage support, quantity tracking, and total price calculations.",
      "Implemented authentication workflows, middleware-based route protection, and an administrative interface for managing products.",
      "Deployed the application to Vercel for public access.",
    ],

    toolsAndMethods: [
      "Frontend: Next.js, React, TypeScript, and Tailwind CSS.",
      "API Integration: Integrated the Platzi Fake Store API to fetch and display product information dynamically.",
      "State Management: React Context API and LocalStorage for persistent shopping cart data.",
      "Authentication: Login and registration workflows with middleware-based route protection.",
      "Development Tools: Visual Studio Code, Git, and GitHub.",
      "Deployment: Vercel for application hosting.",
    ],

    futureImprovement: [
      {
        title: "Payment Gateway Integration",
        description:
          "Integrate secure online payment methods to support real transactions and provide a complete checkout experience.",
      },
      {
        title: "Product Search & Filtering",
        description:
          "Implement advanced product search and filtering options to help users find products based on categories, prices, and preferences.",
      },
      {
        title: "Order History & Tracking",
        description:
          "Develop an order management system that allows users to review previous purchases and monitor their order status.",
      },
      {
        title: "Wishlist Functionality",
        description:
          "Introduce a wishlist feature that enables users to save favorite products and revisit them later.",
      },
    ],
  },
];