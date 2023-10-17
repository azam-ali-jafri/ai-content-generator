# AI Content Generator

![img|100x100](https://res.cloudinary.com/dg18lu61g/image/upload/v1697522876/projects%20thumbnails/Screenshot_2023-10-17_at_11-23-38_AI_Content_Generator_vd2yej.png)

### Features:

- Clerk Authentication
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Stripe integration (monthly subscription)
- Tailwind CSS for design and animation

## Installation

#### Cloning the repository

```shell
git clone https://github.com/azam-ali-jafri/ai-content-generator.git
```

#### Install packages

```shell
npm install or yarn install
```

#### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
OPENAI_API_KEY=
REPLICATE_API_KEY=
DATABASE_URL=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

#### Setup Prisma

Add your database url then execute this command (I used mongoDB)

```shell
npx prisma db push

```

#### Start the app

```shell
npm run dev
```
