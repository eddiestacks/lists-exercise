# Fetch Coding Exercise - Fun with Lists!
This app was built using [Next.js](https://nextjs.org/) and deployed using [Vercel](https://vercel.com).

The app consists of a simple UI built using [TailwindCSS](https://tailwindcss.com). It leverages [SWR](https://swr.vercel.app/) to fetch the data from the provided URL, groups the data by `listId`, and renders a dropdown component to let view the contents of each list. 

By default, it's sorting the content alphabetically, but you can use the toggle to resort the lists numerically, if so desired, providing the best of both worlds. 

Additionally, hovering over any list item will render a tooltip showing you the `id` of the list item (given that this data seemed redundant, I didn't feel it needed to be immediately present in the list).

**View a current version of the app [here](https://lists-exercise.vercel.app/).**

## File Structure
The project follows the standard file structure of any Next.js app, but has a couple additional folders to help with separation of concerns.

- `./api` contains logic for fetching the data using SWR.
- `./components` contains React TS components that can be re-used throughout the project.
- `./interfaces` contains TS definitions of interfaces. I opted to use interfaces so that they can be extended, as needed, when imported.
- `./lib` contains utilities for sorting and concatenating class names
- `./pages` this is a standard Next.js folder that contains the page components that will automatically generate routes. It also includes the `_app.tsx` component that builds the layout for the app.
- `/.public` this is a standard Next.js folder that contains public assets.
- `./styles` this is a standard Next.js folder that contains CSS styles

## Deployment
As mentioned previously, given the brevity of this exercise, I opted to use Next.js and deploy using Vercel because these two tools are optimized for each other, and make CI/CD a breeze. This strategy could be changed by using GitHub Actions to either build a docker image and deploy on any hosting service that supports Docker, or deploy to any provider that support Node servers, as well.

Currently, with the Vercel option, any time a change is pushed to a branch on GitHub, a new version of the app is deployed to a unique URL so that it can be previewed. Then, whenever a PR is merged to the `main` branch, Vercel will automatically create a production deployment and replace the existing deployment.


## Other Improvements

- Could be dockerized
- Could add integration tests using Cypress
- The loading and error components could be extracted from the main page component and expanded upon. For now, they are just simple rendered text to illustrate the SWR goodness.
- I used raw TailwindCSS classes to style the components. If I were building a more production-ready app, I'd consider creating custom CSS classes that use `@apply` Tailwind directives to compose the CSS class. This would clean up the code a bit more and provide more guardrails to keep consistent styling of components like buttons, links, etc across the project.

## Developer Experience - Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

API routes can be created by following the instructions [here](https://nextjs.org/docs/api-routes/introduction).

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
