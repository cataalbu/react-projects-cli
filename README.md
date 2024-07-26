# React Projects CLI

Bored of setting up my frontend projects, so I've decided to create this CLI to do it faster. This contains all the libraries, the folder structure, and approaches I like to use when working on my personal frontend projects.

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Generate Project](#generate-project)
  - [Add Router](#add-router)

## Introduction

This CLI tool is designed to streamline the process of creating React projects and adding common templates such as routers and Redux setup. It uses Vite with TypeScript and SWC, and Sass for stylng.

## Features

- **Project Initialization**: Quickly set up a new React project with all necessary configurations. (Vite + React + Typescript + SWC). This will also add all the dependencies, create the folder structure and transform all `css` files to `scss` files
- **Router Templates**: Add different router templates including simple routers, routers with outlets, and routers requiring authentication.

## Installation

```
git clone git@github.com:cataalbu/react-projects-cli.git
cd react-projects-cli
```

Using Yarn

```
yarn link
```

Using npm

```
npm link
```

## Usage

### Generate Project

To generate a new React project, use the `generate-project` command followed by the project name:

```
react-project-cli generate-project <project-name>
```

### Add Router

To add a router to your project, use the `add-router` command. This command supports several options to customize the router setup:

```
react-project-cli add-router [options]
```

Options:

- `-y`, `--yes`: Automatically agree to override files without prompting.
- `--outlet`: Create a router structure with an AppLayout and an outlet.
- `--require-auth`: Create a router with components that require authentication.
