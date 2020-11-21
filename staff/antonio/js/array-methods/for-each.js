function forEach(array, callback) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (!(callback instanceof Function)) throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < array.length; i++) {
        callback(array[i])
    }
}