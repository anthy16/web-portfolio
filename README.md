# WebPortfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/9126be93-e16b-4733-94cb-0418de9b7a9f/deploy-status)](https://app.netlify.com/sites/akthygesen/deploys)

![Porfolio](https://raw.githubusercontent.com/anthy16/web-portfolio/main/src/assets/readme-front.png)

This is a webpage built to display my personal portfolio, projects, and other things I might find relevant and/or fun. It is implemented in [Angular](https://angular.io/).

## Development

Below is a quick walkthrough of how to set up the development environment, a summary of tooling used for the project, along with a guide on scripts and their actions.

### How to Run

**Clone**

```sh
$ git clone https://github.com/anthy16/web-portfolio.git
```

**Install Dependencies**

```sh
$ npm install
```

**Run Application**

```sh
$ npm run start
```

**Run Tests**

```sh
$ npm run test
```

### Tooling

| Tool                            | Purpose                                                                                    |
| ------------------------------- | ------------------------------------------------------------------------------------------ |
| [Angular](https://angular.io)   | Base SPA framework used. Angular provides good tooling and a fast development environment. |
| [Prettier](https://prettier.io) | Used to keep a consistent formatting style throughout the project.                         |
| [Jest](https://jestjs.io)       | Provides (faster than Karma) unit testing capabilities and coverage reporting.             |

### Scripts

| Script name     | Description                                                                         |
| --------------- | ----------------------------------------------------------------------------------- |
| `build`         | Makes a build of the Angular application (uses default `development` configuration) |
| `start`         | Runs the Angular development server (accessible from port `4200`)                   |
| `test`          | Runs all Jest unit tests                                                            |
| `test:coverage` | Runs all Jest unit tests and creates a coverage report                              |

## Deployment

WebPortfolio is hosted on [Netlify](https://www.netlify.com/) and is set to automatically build and publish when pushing to `main`.

## Page Styling

All styling on the page is largely inspired by Windows 98 - although it is far from 100% faithful to the design.

I have used references such as [98.css](https://github.com/jdan/98.css) and [Browso](https://www.browso.app/).
