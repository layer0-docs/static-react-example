# React with Layer0

This example is built with React to demonstrate the use and configuration of Layer0 serving a client-side-rendered application. We utilize the caching and speed optimizations provided by Layer0 to serve static resources that are rendered on the client.

### Demo

https://layer0-docs-layer0-static-react-example-default.layer0.link

### Try It Now

[![Deploy with Layer0](https://a.storyblok.com/f/117912/x/e4e996094a/frame-1.svg)](https://app.layer0.co/deploy?repo=https://github.com/layer0-docs/static-react-example/)

## Getting Started

### Clone This Repo

Use `git clone https://github.com/layer0-docs/static-react-example.git` to get the files within this repository onto your local machine.

### Install dependencies

On the command line, in the project root directory, run the following command:

```bash
npm install
```

### Run the React app locally using Layer0

Run the React app with the command:

```bash
npm run layer0:dev
```

Load the site: http://127.0.0.1:3000

Note that this is a static site build, and will not refresh on file changes. Layer0 acts as a reverse proxy to send API requests to an example API, running the app directly without Layer0, will mean no data will be served into the application.

### Testing production build locally with Layer0

You can do a production build of your app and test it locally using:

```bash
npm run layer0:production
```

## Deploying to Layer0

Deploying requires an account on Layer0. [Sign up here for free](https://app.layer0.co/signup). Once you have an account, you can deploy to Layer0 by running the following in the root folder of your project:

```bash
npm run layer0:deploy
```

See [deploying](https://docs.layer0.co/guides/deploying) for more information.
