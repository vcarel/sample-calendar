# Sample Calendar

This project is a sample calendar app.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Bun**: A fast JavaScript runtime and toolkit for managing dependencies, running scripts, and building the project. [Install Bun](https://bun.sh/docs/installation)
- **Biome**: A code linter and formatter for maintaining code quality and consistency. [Install Biome](https://biomejs.dev/docs/installation)

## Getting Started

#### Install dependencies

You need to install the project dependencies using Bun. The `--frozen-lockfile` flag ensures that the dependencies are installed with the exact versions specified during development, which helps prevent compatibility issues.

```sh
bun install --frozen-lockfile
```

## Troubleshooting installation issues

The following commands will reset your local project and dependencies to a clean state:

```sh
git clean -fd
git checkout .
rm -rf node_modules
bun upgrade
bun install --frozen-lockfile
```

## To update the project…

The following commands will update your local project to the latest version from the repository:

```sh
git pull
bun install --frozen-lockfile
```

## Development commands

#### Start the app

To start the app in development mode, run:

```sh
bun dev
```

#### Check code quality

1. TypeScript types:

```sh
bun check-types
```

2. Code style (Biome):

```sh
bun check
bun check --fix # Autofix errors
```

3. Unit tests:

```sh
bun test
```

#### Update bun dependencies

```sh
bun update
```

or for the latest versions:

```sh
bun update --latest
```
