# Default vs Named Exports in JavaScript

## Named Export

You can export **multiple** things from a file using named exports.

```js
// testutils.js
export let BASE_URL = "https://app.vwo.com";

export function formatUpperCaseString(name) {
    return name.toUpperCase();
}
```

When importing, you **must use curly braces `{}`** and the **exact same name**:

```js
import { BASE_URL, formatUpperCaseString } from "./testutils.js";
```

You can rename on import using `as`:

```js
import { BASE_URL as bul_util, formatUpperCaseString } from "./testutils.js";
```

---

## Default Export

A file can have **only one** default export. Use the `default` keyword:

```js
// logger.js
export default function log(message) {
    console.log("[LOG] " + message);
}
```

When importing a default export, you **do NOT use curly braces** and you can use **any name** you want:

```js
import log from "./logger.js";        // using the original name
import myLogger from "./logger.js";   // any name works
```

---

## Mixing Both in One File

A file can have both a default export and named exports:

```js
// logger.js
export default function log(message) {       // default
    console.log("[LOG] " + message);
}

export function log2(message) {              // named
    console.log("[LOGS] " + message);
}
```

Import them together like this:

```js
import log, { log2 } from "./logger.js";
//     ^         ^
// default    named
```

---

## Quick Reference

| Feature              | Named Export          | Default Export         |
|----------------------|-----------------------|------------------------|
| Keyword              | `export`              | `export default`       |
| How many per file    | Unlimited             | Only one               |
| Import syntax        | `{ name }`            | No curly braces        |
| Import name          | Must match exactly    | Can be anything        |
| Rename on import     | `{ name as alias }`   | Just write a new name  |
