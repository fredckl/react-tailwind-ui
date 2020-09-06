## Reta-ui

Create beautiful application with (React.js)[https://reactjs.org/] and (Tailwindcss)[https://tailwindcss.com/]
This library includes simple components based on classes.

### Get started

#### Installation

```bash
npx create-react-app react-tailwindcss && cd react-tailwindcss

yarn add tailwindcss postcss-cli autoprefixer
yarn add reta-ui
```

#### Configuration

create a tailwindcss config file

```
npx tailwindcss init
```

now, you have a new file tailwind.config.js in the root of project

---

Using tailwind with PostCSS.
Create a postcss.config.js file in the root of project

```js
module.exports = {
  plugins: [
    // ...
    require("tailwindcss"),
    require("autoprefixer"),
    // ...
  ],
};
```

Create a new tailwind.css file in src/assets

#### Run application

modify scripts on packages

```json
{
  // ...
  "scripts": {
    "start": "yarn run watch:css && react-scripts start",
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
  }
  // ...
}
```

run application

```bash
yarn start
```

now visit (http://localhost:3000)[http://localhost:3000]
