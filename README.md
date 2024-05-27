Introduction
Powered by Next.js, Horizon is a cutting-edge financial SaaS platform that seamlessly connects to multiple bank accounts. It offers real-time transaction monitoring, peer-to-peer money transfers within the platform, and comprehensive financial management tools.


Tech Stack
Next.js
TypeScript
Appwrite
Plaid
Dwolla
React Hook Form
Zod
TailwindCSS
Chart.js
ShadCN


Key Features
👉 Ultra-Secure Authentication: Benefit from server-side rendering (SSR) authentication with robust validations and authorization protocols, ensuring your data is always protected.

👉 Bank Integration: Seamlessly link multiple bank accounts through Plaid, providing a unified financial view.

👉 Comprehensive Home Page: Get an at-a-glance overview of your finances, including total balance across all linked accounts, recent transactions, and spending breakdowns by category.

👉 My Banks: Access a detailed list of all connected banks, complete with individual balances and account details.

👉 Transaction History: Easily navigate your transaction history with advanced pagination and filtering options for different bank accounts.

👉 Real-Time Updates: Experience instantaneous updates across all relevant pages whenever you connect new bank accounts.

👉 Funds Transfer: Effortlessly transfer funds using Dwolla, complete with all necessary fields and recipient bank ID for smooth transactions.

👉 Responsive Design: Enjoy a consistent and seamless user experience on any device, whether it's a desktop, tablet, or mobile.

And much more, including a focus on code architecture and reusability, ensuring a scalable and maintainable platform.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox

```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Appwrite](https://appwrite.io/?utm_source=youtube&utm_content=reactnative&ref=JSmastery), [Plaid](https://plaid.com/) and [Dwolla](https://www.dwolla.com/)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>.env.example</code></summary>

```env
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=sandbox
PLAID_PRODUCTS=auth,transactions,identity
PLAID_COUNTRY_CODES=US,CA

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```

</details>
