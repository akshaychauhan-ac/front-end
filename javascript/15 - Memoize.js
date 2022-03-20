// Memoize

const cache = {}

function slow(a) {
    if (cache[a]) {
        return cache[a];
    }

    const result = /* Complex logic */
    cache[a] = result
    return result
}

// When same input results in same output & we don't want the complex logic to be executed every time,
// we cache the input/output as key value pairs so next time for same input we read from the cache.
