## NextJS Integration

When working with a Next.js project, you can use the React SDK. However, if you're using the App dir, make sure to add the use client on top of the file. While we're working on adding support for Server Components, you have the option to use the JavaScript SDK with Node or explore the REST API in the meantime.

Start by installing the library following the instructions below.

Quick links

- [About](https://basestack.co/)
- [Documentation](https://docs.basestack.co/feature-flags/sdks/react#nextjs-support)

## Installation

First, let's install some packages!

```bash
npm install --save @basestack/flags-js @basestack/flags-react
```

or with yarn

```bash
yarn add @basestack/flags-js @basestack/flags-react
```

## Create a client provider

With all the dependencies you installed, let's create your Basestack FlagsJS Client.

```js
"use client";

import FlagsJS from "@basestack/flags-js-sdk";
import { FlagsProvider } from "@basestack/flags-react-sdk";

const sdk = new FlagsJS({
  apiUrl: "https://your-basestack-hosted-app-domain.com/api/v1",
  projectKey: "xxxxx",
  envKey: "xxxxx",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FlagsProvider
          sdk={sdk}
          onSuccessfulInit={() => console.log("Successful Init FlagsJS SDK")}
        >
          {children}
        </FlagsProvider>
      </body>
    </html>
  );
}
```

That's it! Now your app is ready to start using feature flags and other features. Let's start using by importing some pre-built components inside of `@basestack/flags-react`.
