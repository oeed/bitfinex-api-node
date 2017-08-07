'use strict'

const { isSnapshot } = require('./helper')

function normalizeBooks (data, prec) {
  if (prec !== 'R0') return data

  // v1 api has no nesting
  if (typeof data[0] === 'number') {
    return [ data[1], data[0], data[2] ]
  }

  let res
  if (isSnapshot(data)) {
    res = data.map((el) => {
      return [
        el[1], el[0], el[2]
      ]
    })

    return res
  }

  // its an update
  return [ data[1], data[0], data[2] ]
}

module.exports = normalizeBooks
