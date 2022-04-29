# LeadsBridge React Code Challenge Quick Start

This is a standard ReactJS web application bundled using Webpack, while TypeScript is transpiled using `ts-loader`.

Style (CSS) is done using Styled-Components.

NodeJS (v.12+) and npm are both required.

### How to run development server

As developer, you can work in development mode, by running on your machine `webpack-dev-server` which is already
configured with hot-reload and fast-refresh.

To launch local dev server run the following commands in your terminal:

1. `npm install`
2. `npm run start`

### Import of files from absolute paths

File, functions and other components can be imported using absolute paths.
- `@app/` points to content in `/src/` folder
- `@components/` points to content in `/src/components/` folder
- `@assets/` points to content in `/src/assets/` folder

Example: 
```
import { Title } from @components/examples/Title
```

### Build process

To bundle the React application, type in your terminal `npm run build`.

Once done, a local server can be started with `npm run serve`.

### Unit Tests

This environment includes a configuration to run unit test with Jest and React Testing Library.
You can write your own test by creating a new file and name it `filename.test.ts` or `filename.test.tsx` (in case of React components).
To run the test suite run in your terminal `npm run test`

### Linting and code style

We use ESLinst and Prettier to enforce coding rules and formatting style. So be sure your IDE have the right plugin installed.
As code formatting style we use `standard-js`.
