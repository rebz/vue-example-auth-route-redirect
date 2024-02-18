# Vue 3 Example: Route Guards

A Vue 3 example of how to use route guards to redirect users to the login page if they are not authenticated. This example uses Vue Router and Pinia for state management.

![alt text](./banner.png)

## Run the project locally

> This project uses Node 18+ <br />
> [Created using Vite and the Vue 3 template.](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)


1. Clone or download the repo to your local machine
1. Navigate to the project root using your terminal
1. Run `npm i` to install the project dependencies
1. Run `npm run dev` to start the development server

## Feature Requirements

1. Home page accessible to all users
1. Login page accessible to all users
1. Show Login button when User is not authenticated
1. Show Logout button when User is authenticated
1. Show Dashboard in navigation when User is authenticated
1. Dashboard page accessible only to authenticated users
1. Redirect User to Login page if attempting to visit the Dashboard page if not authenticated
1. Logout should redirect User to Home page
1. Login should redirect User to Dashboard
1. Redirect User to Dashboard page if attempting to visit the Login page while authenticated

## Highlights

1. Review `router/index.js` for `meta.auth` and `beforeEnter` usage.
1. Review `store/index.js` for `isAuthenticated` state and `login` and `logout` actions.
1. Review `components/Navigation.vue` for `v-show` usage to show/hide navigation links based on authentication status.

## Want to learn more?

Follow along at [rebz.me](https://rebz.me) for more Vue 3 examples, videos, tutorials.