const plugin = require('./')
const Bn = require('bn.js')
const chai = require('chai')

chai.should()

const dec = '3735928559'
const hex = 'deadbeef'

describe('amorph-bn', () => {
  describe('converters', () => {
    it('bn-hex', () => {
      plugin.converters.get('bn', 'hex')(new Bn(dec, 10)).should.equal(hex)
    })
    it('bn-hex', () => {
      plugin.converters.get('hex', 'bn')(hex).toString(10).should.equal(dec)
    })
  })
  describe('equivalenceTests', () => {
    it('bn', () => {
      plugin.equivalenceTests.bn(
        new Bn(hex, 16),
        new Bn(hex, 16)
      ).should.equal(true)
      plugin.equivalenceTests.bn(
        new Bn(hex, 16),
        new Bn(dec, 10)
      ).should.equal(true)
      plugin.equivalenceTests.bn(
        new Bn(hex, 16),
        new Bn(dec, 16)
      ).should.equal(false)
    })
  })
})
