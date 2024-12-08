![](.github/assets/svg/logo.svg)

# Potidev - React Vulpix Pack

[![](https://img.shields.io/badge/Beta-0.1.35-purple)](https://www.npmjs.com/package/@potidev/react-vulpix-pack)

# Description

TODO...

# Setup

## NextJS

Create your `vulpipx.config.js`in root folder to customize your Vulpix Components:

```javascript
module.exports = {
  theme: {
    primaryColor: '#00bcd4',
  }
}
```

In your `next.config.js`, import `getVulpixSassAdditionalData` method and the `vulpipx.config.js` file like this: 

```javascript
import { getVulpixSassAdditionalData } from "@potidev/react-vulpix-pack/next-config";
import * as vulpixConfig from "./vulpix.config";
```


To finish, add this configuration to your nextConfig:

```javascript
const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: getVulpixSassAdditionalData(vulpixConfig),
    quietDeps: true,
  }
};
```

Your `next.config.js` should look like this:

```javascript
import type { NextConfig } from "next";

import { getVulpixSassAdditionalData } from "@potidev/react-vulpix-pack/next-config";
import * as vulpixConfig from "./vulpix.config";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: getVulpixSassAdditionalData(vulpixConfig),
    quietDeps: true,
  }
};

export default nextConfig;
```
