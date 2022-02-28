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
