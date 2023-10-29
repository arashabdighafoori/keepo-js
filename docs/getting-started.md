<h1 align="center">
   <b>
        Getting started
    </b>
</h1>

<p align="center">Set the project up and use it.</p>
<br />

## Table of Contents

- [Getting a value](#getting-a-value)

<br />

## Getting a value

The `get` function exported by module returns a `Promise<T>` where `T` is the Generic type of value.
To get a value from keepo import the get function and use the key of secret:

```ts
import { get as keepo } from "keepo";

keepo<T>("<key>").then((value) => {
  // do stuff
});
```

To check for errors, import `constants` as well:

```ts
import { get as keepo, constants } from "keepo";

...
    .catch((reason)=>{
        if(reason.startsWith("key")){
            // the key was not found
        }
        else if (reason === constants.nokeeperror){
            // no .keep file - local or global - was found
        }
    });

```

<br />
