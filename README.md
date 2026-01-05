## Introduction

GitHub Plus is a full-stack platform designed to enhance the GitHub workflow with AI-powered tools, developer utilities, and a modern, component-driven interface.  
Built with **Next.js**, the **T3 Stack**, and integrations like **LangChain** and **Google AI**, it delivers a fast, intelligent, and efficient developer experience.

If you need help getting started or run into issues, our community Discord is an active space where developers collaborate and provide support.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank">
  <img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" />
</a>

---

## Tech Stack

- **Next.js**
- **TypeScript**
- **T3 Stack**
- **Prisma**
- **tRPC**
- **Clerk Authentication**
- **LangChain**
- **Google AI**
- **TailwindCSS**
- **shadcn/ui**
- **React Hook Form + Zod**

---

## Features

**AI-Enhanced Developer Tools**  
Generate explanations, summaries, code insights, and more directly inside the platform.

**GitHub Integration**  
Fetch repositories, analyze code, and interact with GitHub data through a unified interface.

**Project Dashboard**  
View insights, recent activity, and AI-generated summaries for your repositories.

**Secure Authentication**  
Powered by Clerk with full SSR support.

**Modern UI/UX**  
Built with shadcn/ui and TailwindCSS for a clean, responsive interface.

**Extensible Architecture**  
Component-driven, reusable structure following T3 best practices.

…and more, with ongoing improvements and new features planned.

---

## Quick Start

Follow these steps to run the project locally.

### **Prerequisites**

Make sure you have:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- A package manager (npm, pnpm, or bun)

---

### **Cloning the Repository**

```bash
git clone https://github.com/<your-username>/githubplus.git
cd githubplus
```

### **Install Dependencies**
```bash
npm install
```

### **Environment Variables

Create a .env file following the sample in the project root:
```bash
# NEXT
NEXT_PUBLIC_APP_URL=

# CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# DATABASE
DATABASE_URL=

# AI
GOOGLE_API_KEY=
```

### **Running the Project**
```bash
npm run dev
```

Your application will be available at:

http://localhost:3000
