# sweden

Mutex for JavaScript.
Waiting in line.
Forming a queue.
Like a Swede.

## How do use

```
const Mutex = require('sweden');
const mutex = new Mutex();

mutex.lock(unlock => {
	doAsyncStuff()
		.then(() => unlock());
});
```

