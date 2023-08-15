# NodeJS Integration

In a Node environment, you should use the flagAsync and flagsAsync methods. Please note that the flags and flag methods are not supported in Node environments due to missing features from the browser.

Start by installing the library following the instructions below.

Quick links

- [About](https://basestack.co/)
- [Documentation](https://docs.basestack.co/feature-flags/sdks/javascript#node-implementation)

## Installation

First, let's install some packages!

```bash
npm install --save @basestack/flags-js
```

or with yarn

```bash
yarn add @basestack/flags-js
```

## Create a new instance

This params values can be found on the on your project's settings

```js
const FlagsJS = require("@basestack/flags-js-sdk").default;

const sdk = new FlagsJS({
  apiUrl: "https://your-basestack-hosted-app-domain.com/api/v1",
  projectKey: "xxxxx",
  envKey: "xxxxx",
});
```

That's it! Now your app is ready to start using feature flags and other features. Follow the instructions of the supported methods to make the most of the Basestack Feature Flags functionalities.

## Usage

```js
const FlagsJS = require("@basestack/flags-js-sdk").default;

const sdk = new FlagsJS({
  apiUrl: "https://your-basestack-hosted-app-domain.com/api/v1",
  projectKey: "xxxxx",
  envKey: "xxxxx",
});

//async/await
const MyFeature = async () => {
  try {
    const flag = await sdk.flagAsync("header");
    //flag.enabled true | false
    //  ...code
  } catch (e) {
    throw e;
  }
};

//Promises
const AnotherFeature = async () => {
  sdk
    .flagAsync("my_flag")
    .then((flag) => {
      //flag.enabled
      //...code
    })
    .catch((e) => throw e);
};
```
