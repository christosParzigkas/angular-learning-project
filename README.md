# Angular Learning Project

A small Angular application built from scratch as part of a mentorship program.
The goal is to learn the full professional workflow — project setup, Git and
GitHub, branching and pull requests, and Angular fundamentals — not just the code.

## Tech stack

- **Angular** 21 (standalone components, routing)
- **TypeScript** 5.9
- **SCSS** for styling
- **Vitest** for unit tests
- Built and served with the **Angular CLI**

## Prerequisites

- [Node.js](https://nodejs.org/) 22 LTS or newer
- npm 10+ (comes with Node)

## Getting started

```bash
# 1. Clone the repository
git clone https://github.com/christosParzigkas/angular-learning-project.git
cd angular-learning-project

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

Then open <http://localhost:4200/> in your browser. The app reloads
automatically whenever you change a source file.

## Available scripts

| Command         | What it does                                               |
| --------------- | ---------------------------------------------------------- |
| `npm start`     | Runs the dev server at `http://localhost:4200/`.           |
| `npm run build` | Builds the app for production into the `dist/` folder.     |
| `npm run watch` | Rebuilds automatically on every change (development mode). |
| `npm test`      | Runs the unit tests with Vitest.                           |

## Project structure

```
angular-learning-project/
├── src/
│   ├── app/            # Application components, routes, and config
│   ├── index.html      # Single HTML page that hosts the app
│   ├── main.ts         # Entry point that bootstraps the app
│   └── styles.scss     # Global styles
├── public/             # Static assets served as-is (e.g. favicon)
└── angular.json        # Angular CLI workspace configuration
```

## Development workflow

All changes go through a pull request — direct pushes to `master` are blocked
by a branch protection rule. The cycle is:

1. Create a branch (e.g. `TASK-1_short_description`).
2. Commit your work on that branch.
3. Push the branch and open a pull request into `master`.
4. Review the changes, then merge.

## License

Released under the [MIT License](LICENSE).
