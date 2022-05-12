# Next Firebase Typescript Template

An app template for using Next.js with Firebase and Typescript!

## Demo: [next-firebase-ts.vercel.app](https://next-firebase-ts.vercel.app)

## Project Overview / Technologies

- Framework: [Next.js](https://nextjs.org/) (which uses [React](https://reactjs.org))
- Authentication and Database: [Firebase](https://firebase.google.com/)
  - Firebase makes secure authentication almost trivial, providing simple APIs and CLIs with minimal boilerplate
  - Firebase also provides handy UI components for sign-in with [FirebaseUI](https://firebase.google.com/docs/auth/web/firebaseui)
  - Some server-side authentication which makes use of [Nookies](https://www.npmjs.com/package/nookies)
  - Optional use of serverless Firebase [Cloud Functions](https://firebase.google.com/products/functions)
- Language: [Typescript](https://www.typescriptlang.org/)
- Styles: [Tailwind](https://tailwindcss.com/)
  - Also [Headless UI](https://headlessui.dev/), a handy set of styled UI components atop Tailwind
- Hosting and CD: [Vercel](https://vercel.com/)

---

## Getting Started

Start by forking the repository (since it is a template, click the **_Use this template_** button on the repo)

### I. ⚙️ Local Setup

1. Navigate to the project you forked and in a terminal run `npm i`
2. Copy or rename the file `sample.env.local` to `.env.local` for an environmental variable template

---

### II. 🔥 Firebase General Setup

1. Create a [Firebase](https://console.firebase.google.com) project and web app
   - You can choose whether to allow analytics. Analytics are not currently implemented in this template.
   - Add a web app to the project. Do not check the _"add Firebase hosting"_ box
2. Copy the config strings in the SDK setup (apiKey, authDomain, ...) into their corresponding entries in your `.env.local` file
   - Otherwise, you can ignore this part. We already installed the SDK in step I.1, and we are putting our config strings in the environment variables, instead of explicitly in the code
3. In the Firebase console, go to Project Settings > Service accounts. Here we will fill the remaining entries in our environment variables file
   1. Copy the Firebase service account string (starting in _"firebase-adminsdk"_) into the `FIREBASE_CLIENT_EMAIL` env entry
   2. Click the button to generate and download a new application private key. This will download a JSON file to your machine
   3. Open the JSON file. We are only interested in the pair with name `"private_key"`. Copy the _entire value_ of the key
   4. Paste the key into the `FIREBASE_PRIVATE_KEY` environment variable entry. The key should be surrounded with both double and single quotes, as displayed in the template. i.e. '"-----BEGIN PRIVATE KEY..."' Just trust me on this one 😉
4. Enable the Firestore Database

---

### III. 🔒 Firebase Authentication Setup

The template supports authentication by Google, GitHub, and Email/Password. You can easily add more if you wish. More details later.

1. Enable authentication on the Authentication tab of the Firebase console
2. Add Google as the first authentication method. Accept the defaults or play with them if you'd like. This can be done entirely from the Firebase console
3. Add Email/Password as a new authentication provider. This can be done entirely from the Firebase console
4. Add GitHub as an authentication provider. This one is a bit more complicated
   1. In the Firebase console, begin adding GitHub by sliding the _"Enable"_ slider
   2. Navigate to [GitHub](https://github.com/) > Settings > Developer settings > [OAuth Apps](https://github.com/settings/developers)
   3. Add a new auth app, with a distinguishable name. The Homepage URL can simply be `https://localhost:8080`
   4. Copy the callback URL from the bottom of the Firebase GitHub auth config page into the entry on GitHub. click Register Application
   5. Copy the Client ID displayed on the new GitHub page to the appropriate entry in Firebase
   6. Generate a new client secret with the GitHub OAuth app, and copy that into Firebase as well
   7. Finish the GitHub auth configuration by clicking save

#### Using different auth providers

1. First configure the auth providers you want to use in the Firebase console. [Documentation](https://firebase.google.com/docs/auth)
2. The application displays the auth providers on the /login page specified by the `uiConfig` object in `components/auth/Auth.tsx`. Edit the `signInOptions` to have the app reflect the auth options you prefer. [FirebaseUI Documentation](https://firebase.google.com/docs/auth/web/firebaseui)

---

**Note:** at this point, you have full local functionality of your app! To locally host your app, enter `npm run dev` on the terminal, and navigate to [localhost:8080](https://localhost:8080) in your browser

---

### IV. 🚀 Vercel Deployment Setup

1. Create a new hobby [Vercel](https://vercel.com/) account, and link your GitHub (or whichever Git provider application you are using) account
2. Create a new project, and link your project in the "Input Git Repository" step
3. The default configurations should work for you. Don't click Deploy yet!
4. In the Environment Variables dropdown, add all of the name/value pairs in your `.env.local` file
   > **Note:** for the `FIREBASE_PRIVATE_KEY`, _omit the single quotes!_ So the string should only be wrapped in double quotes. i.e. "-----BEGIN PRIVATE KEY..."
5. Now you are ready to deploy your app!

---

### V. ☁️ Optional: Firebase Cloud Function Setup

The Firebase Spark plan (free tier) does not support Cloud Functions. You'll have to upgrade to the Blaze pay as you go plan before integrating with Firebase Cloud Functions.

> Note that you have 2M cloud function invocations, so for a hobby app, you likely won't have to worry about paying anything. [Pricing Details](https://firebase.google.com/pricing)

This template contains a simple use case of cloud functions, which adds a user entry to the Firestore database whenever a new user is authenticated with our app.

1. Upgrade your Firebase account to the Blaze plan
2. Download and install the [Firebase CLI](https://firebase.google.com/docs/cli)
3. Log into the Firebase CLI with `firebase login` in your shell. (again see [documentation](https://firebase.google.com/docs/cli#sign-in-test-cli))
4. To deploy your Cloud Functions, simply run `firebase deploy --project <your-project-name>`. Alternatively, you can create a `.firebaserc` file in your project's top-level directory (sample below) and then simply run `firebase deploy` from within that directory.

**`.firebaserc:`**

```
{
  "projects": {
    "default": "next-firebase-typescript"
  }
}
```

---

## Acknowledgements and Resources

I used plenty of handy resources to help me understand how the different Next.js and Firebase pieces fit together. Here are a few I used to get started:

- Jarrod Watts's [NextJS + Firebase Tutorial](https://github.com/jarrodwatts/pineapple)
- Shreyas Jadhav's [next-firebase-starter](https://github.com/shreyas-jadhav/next-firebase-starter)

### Additional Documentation

- [Next.js docs](https://nextjs.org/docs)
- [Firebase docs](https://firebase.google.com/docs)
- [Tailwind docs](https://tailwindcss.com/docs/)
- [Vercel docs](https://vercel.com/docs)
