# Angular Learning Project

A small Angular application built from scratch as part of a mentorship program.
The goal is to learn the full professional workflow — project setup, Git and
GitHub, branching and pull requests, and Angular fundamentals — not just the code.

## Tech stack

- **Angular** 21 (standalone components, routing)
- **TypeScript** 5.9
- **SCSS** for styling
- **Vitest** for unit tests
- **ESLint** and **Prettier** for linting and formatting (enforced by a Husky pre-commit hook)
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

| Command                | What it does                                               |
| ---------------------- | ---------------------------------------------------------- |
| `npm start`            | Runs the dev server at `http://localhost:4200/`.           |
| `npm run build`        | Builds the app for production into the `dist/` folder.     |
| `npm run watch`        | Rebuilds automatically on every change (development mode). |
| `npm test`             | Runs the unit tests with Vitest.                           |
| `npm run lint`         | Lints the codebase with ESLint.                            |
| `npm run format`       | Formats all files with Prettier.                           |
| `npm run format:check` | Checks formatting without changing files.                  |

## Code quality

Code style and quality checks are automated so they don't have to be argued about
in review:

- **ESLint** checks code quality, including import sorting and unused-import
  detection. Run it with `npm run lint`.
- **Prettier** is the single source of truth for formatting (line length, quotes,
  spacing). Run `npm run format` to format everything, or `npm run format:check`
  to verify without writing.
- A **pre-commit hook** (Husky + lint-staged) runs ESLint and `prettier --check`
  on your staged files every time you commit, blocking changes that don't pass.
  The hook installs automatically via the `prepare` script when you run
  `npm install`.

## Project structure

```
angular-learning-project/
├── src/
│   ├── app/            # Application components, routes, and config
│   ├── index.html      # Single HTML page that hosts the app
│   ├── main.ts         # Entry point that bootstraps the app
│   └── styles.scss     # Global styles
├── public/             # Static assets served as-is (e.g. favicon)
├── eslint.config.js    # ESLint rules
├── .prettierrc         # Prettier formatting options
├── .lintstagedrc.json  # Which checks run on staged files at commit time
├── .husky/             # Git hooks (the pre-commit gate)
└── angular.json        # Angular CLI workspace configuration
```

## Development workflow

All changes go through a pull request — direct pushes to `master` are blocked
by a branch protection rule. The cycle is:

1. Create a branch (e.g. `TASK-1_short_description` or `EXTRA-1_short_description`).
2. Commit your work — the pre-commit hook lints and checks formatting on staged files.
3. Push the branch and open a pull request into `master`.
4. Review the changes, then merge.

## License

Released under the [MIT License](LICENSE).
