## Introduction

Unity is a financial SaaS platform built with Next.js. It links multiple bank accounts, displays real-time transactions, enables user-to-user transfers, and provides a unified interface for managing personal finances.

---

## Tech Stack

- **Next.js**
- **TypeScript**
- **Appwrite**
- **Plaid**
- **Dwolla**
- **TailwindCSS**
- **Chart.js**
- **shadcn/ui**
- **React Hook Form + Zod**

---

## Features

- **Authentication**: Server-side authentication with strict validation and authorization.  
- **Bank Connections**: Plaid integration for linking multiple bank accounts.  
- **Dashboard**: Aggregated balance, recent transactions, and categorized spending insights.  
- **My Banks**: Full list of connected accounts with balances and details.  
- **Transaction History**: Pagination and filtering across all linked institutions.  
- **Real-Time Sync**: Immediate updates throughout the app when new accounts are added.  
- **Funds Transfer**: Dwolla-powered transfers with required fields and recipient bank verification.  
- **Responsive UI**: Consistent experience across desktop, tablet, and mobile.  
- Additional improvements in architecture, modularity, and code reusability.

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
git clone https://github.com/WLL1am/banking-app.git
cd banking-app
```

### **Install Dependencies**
```bash
npm install
```

### **Environment Variables

Create a .env file following the sample in the project root:
```bash
# NEXT
NEXT_PUBLIC_SITE_URL=

# APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

# PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

# DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```

### **Running the Project**
```bash
npm run dev
```

Your application will be available at:

http://localhost:3000
