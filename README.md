<h1 align="center">Get-Status-RockstargamesServices</h1>
<p align="center">Package to get the current status of RockstarGames Services</p>

> [!TIP]
> Project made based on the one made by Androz2091 ->
> https://github.com/Androz2091/rockstar-games-status/tree/main

# Usage examples
```js
import { fetchStatus } from './rockstarGames-status.js'

fetchStatus().then((statuses) => {
    // Obj json all items
    console.log('All...', statuses, '\n')

    // -> GTA PC: UP
    console.log('GTA PC:', statuses.gtao.PC)
})
```

### With specific Timezone | Languages
- Parameters:
    1. timezone
    2. language

```js
fetchStatus('Japan/Tokyo', 'es').then((statuses) => {
    // Obj json all items
    console.log('All...', statuses, '\n')

    // -> GTA PC: UP
    console.log('GTA PC:', statuses.gtao.PC)
})
```

> [!IMPORTANT]  
> Activate module, `"type": "module"` in package node

### How to use without `"type": "module"`
To
```js
export let fetchStatus = async (timezone = '', language = '') => {...}
```

This
```js
module.exports = async (timezone = '', language = '') => {...}

// Or
let fetchStatus = async (timezone = '', language = '') => {
    ...
}

module.exports.fetchStatus = fetchStatus
```
