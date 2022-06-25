module.exports = function reverse (n) {
  const stringFromNumber = n.toFixed()
  return +stringFromNumber.replace(/^-/, '').split('').reverse().join('')
}
