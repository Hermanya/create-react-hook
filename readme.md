# create-react-hook

> CLI for creating reusable React hooks using Rollup and create-react-app.
> Inspired by the amazing [create-react-library](https://github.com/transitive-bullshit/create-react-library)

[![NPM](https://img.shields.io/npm/v/create-react-hook.svg)](https://www.npmjs.com/package/create-react-hook) [![Build Status](https://travis-ci.com/hermanya/create-react-hook.svg?branch=master)](https://travis-ci.com/hermanya/create-react-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[How and why I made this tool.](https://medium.com/@Hermanhasawish/how-to-create-a-reusable-react-hook-9e42e73b2f9a)

## Features

- Easy-to-use CLI
- Handles all modern JS features
- Bundles `cjs` and `es` module formats
- [create-react-app](https://github.com/facebookincubator/create-react-app) for example usage and local dev
- [Rollup](https://rollupjs.org/) for bundling
- [Babel](https://babeljs.io/) for transpiling
- [Jest](https://facebook.github.io/jest/) for testing
- Supports complicated peer-dependencies
- Optional support for TypeScript
- Sourcemap creation

## Install

This package requires `node >= 4`, but we recommend `node >= 8`.

```bash
npm install -g create-react-hook
```


## Creating a New Hook

```bash
create-react-hook
```

Answer some basic prompts about your module, and then the CLI will perform the following steps:

- copy over the template
- install dependencies via yarn or npm
- link packages together for local development
- initialize local git repo

## Development

Local development is broken into two parts (ideally using two tabs).

First, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
npm start # runs rollup with watch flag
```

The second part will be running the `example/` create-react-app that's linked to the local version of your module.

```bash
# (in another tab)
cd example
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your library in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.


#### Publishing to NPM

```bash
npm publish
```

This builds `cjs` and `es` versions of your module to `dist/` and then publishes your module to `npm`.

Make sure that any npm modules you want as peer dependencies are properly marked as `peerDependencies` in `package.json`. The rollup config will automatically recognize them as peers and not try to bundle them in your module.

#### Deploying to Github Pages

```bash
npm run deploy
```

This creates a production build of the example `create-react-app` that showcases your library and then runs `gh-pages` to deploy the resulting bundle.

## Examples

### Libraries

Here are some example libraries that have been bootstrapped with `create-react-hook`.

- [use-suspense-today](https://github.com/Hermanya/use-suspense-today) - Use React Suspense with any library
- [use-typing-effect](https://github.com/hermanya/use-typing-effect) - React hook for "Human Typing" effect
- [use-scroll-to-reveal](https://github.com/hermanya/use-scroll-to-reveal) - React hook for revealing content upon scroll
- [use-interval](https://github.com/Hermanya/use-interval) - React hook for setting intervals [properly](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)
- [react-indicative-hooks](https://github.com/marceloadsj/react-indicative-hooks) - Hooks for [indicative](https://indicative.adonisjs.com/) validation library
- [use-3d-effect](https://github.com/Hermanya/use-3d-effect) - Hook for the 3D tilt card effect
- [react-rxjs-hook](https://github.com/jarlah/react-rxjs-hook) - A useStore hook to be used in conjunction with react-rxjs
- [use-pusher](https://github.com/mayteio/use-pusher) - Easy as hooks that integrate with the pusher-js library
- [use-axios-hooks](https://github.com/zaingz/use-axios-hooks) - Axios hook
- [react-shortcuts-hook](https://github.com/macfire10/react-shortcuts-hook) - Keyboards shortcuts
- [use-auto-progress](https://github.com/ZengLawrence/use-auto-progress) - Hook based on [best practices for animated progress indicators](https://www.smashingmagazine.com/2016/12/best-practices-for-animated-progress-indicators/)
- [use-marked-hook](https://github.com/this-fifo/use-marked-hook) - Marked.js wrapper
- [use-leet](https://github.com/taystack/use-leet) - turn your given text value into 1337 SP34K
- [use-debounce-input](https://github.com/GuySerfaty/use-debounce-input) - debounce inputs
- [use-media-set](https://github.com/cvkline/use-media-set) - make components responsive to media query changes
- ... and maybe more!

Want to add yours to the list? Submit an [issue](https://github.com/hermanya/create-react-hook/issues/new).


## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
MIT © [Herman Starikov](https://github.com/hermanya)
