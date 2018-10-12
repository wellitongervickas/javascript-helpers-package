# Javascript Helpers Packages
> Most used helpers packages

## Install
> npm install javascript-helpers-package

## Availables Helpers

#### Cookies
> import { cookiesHelper } from 'javascript-helpers-package';

##### Usage
```javascript
// Save in to Cookies
cookiesHelper.save(key, payload) // Save object

// Get from Cookies
cookiesHelper.get(key) // Return object

// Delete from Cookies
cookiesHelper.delete(key) // Clear on cookies
```
#### Email
> import { emailHelper } from 'javascript-helpers-package';

##### Usage
```javascript
emailHelper.isValid(email) // Return true/false
```
#### List
> import { listHelper } from 'javascript-helpers-package';

#### Location
> import { locationHelper } from 'javascript-helpers-package';

#### Text
> import { textHelper } from 'javascript-helpers-package';

#### Session
> import { sessionHelper } from 'javascript-helpers-package';

##### Usage
```javascript
// Save in to Session Storage
sessionHelper.save(key, payload)

// Get from Session Storage
sessionHelper.get(key)

// Delete from Session Storage
sessionHelper.delete(key)
```

#### Window
> import { windowHelper } from 'javascript-helpers-package';

#### Phone (Brazilian Phones)
import { phoneHelper } from 'javascript-helpers-package';

##### Usage
```javascript
phoneHelper.parse(number)
```
