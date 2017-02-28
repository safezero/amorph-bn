const Nobject = require('nobject')
const nobject = new Nobject
const Bn = require('bn.js')

nobject.set(['bn', 'hex'], (bn) => {
  return bn.toString(16)
})

nobject.set(['hex', 'bn'], (hex) => {
  return new Bn(hex, 16)
})

module.exports = {
  pluginVersion: 1,
  converters: nobject,
  equivalenceTests: {
    bn: (a, b) => {
      return a.eq(b)
    }
  }
}
