# redwood-ecommerce

Snipcart [The Jamstack Goes Full-Stack: RedwoodJS Framework Tutorial](https://snipcart.com/blog/jamstack-framework-redwoodjs-tutorial)

Richard Haines [Redwood ecommerce with Snipcart](https://richardhaines.dev/redwood-ecommerce-with-snipcart/)

> **WARNING:** RedwoodJS software has not reached a stable version 1.0 and should not be considered suitable for production use. In the "make it work; make it right; make it fast" paradigm, Redwood is in the later stages of the "make it work" phase.

## Getting Started

- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.

## Local Development

[Develop a Snipcart Powered Website Locally Using ngrok](https://snipcart.com/blog/develop-a-snipcart-powered-website-locally-using-ngrok)

## Deploy

- [Deploy](https://redwoodjs.com/docs/deploy): deploy to Netlify.
- [Database](https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database): configure prisma shadow database for cloud-hosted databases.
