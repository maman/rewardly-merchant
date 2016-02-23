/*global describe, afterEach, it*/
import { expect } from 'chai'

import persistence from 'utils/persistence'

describe('Persistence library', () => {
  afterEach(() => {
    persistence.clear()
    persistence.setEngine('sessionStorage')
  })

  describe('Basic functionality', () => {
    it('should respond to get command', () => {
      expect(persistence).itself.to.respondTo('get')
    })

    it('should respond to set command', () => {
      expect(persistence).itself.to.respondTo('set')
    })

    it('should respond to remove command', () => {
      expect(persistence).itself.to.respondTo('remove')
    })

    it('should respond to clear command', () => {
      expect(persistence).itself.to.respondTo('clear')
    })

    it('should respond to engine command', () => {
      expect(persistence).to.include.keys('engine')
    })

    it('should respond to setEngine command', () => {
      expect(persistence).itself.to.respondTo('setEngine')
    })
  })

  describe('Engines function', () => {
    it('should use sessionStorage as default', () => {
      expect(persistence.engine).to.equal('sessionStorage')
    })

    it('can change default engine to localStorage', () => {
      persistence.setEngine('localStorage')
      expect(persistence.engine).to.equal('localStorage')
    })

    it('should throw error when passing unsupported engine', () => {
      let engineFn = () => { persistence.setEngine('dummyStorage') }
      expect(engineFn).to.throw(Error)
    })
  })

  describe('Get/Set function', () => {
    it('should get/set value from sessionStorage', () => {
      persistence.set('a', {data: 'data'})
      let result = persistence.get('a')
      expect(persistence.engine).to.equal('sessionStorage')
      expect(result).to.deep.equal({data: 'data'})
    })

    it('should get/set value from localStorage', () => {
      persistence.setEngine('localStorage')
      persistence.set('a', {data: 'data'})
      let result = persistence.get('a')
      expect(persistence.engine).to.equal('localStorage')
      expect(result).to.deep.equal({data: 'data'})
    })
  })

  describe('Remove function', () => {
    it('should remove value from sessionStorage', () => {
      persistence.set('a', {data: 'data-a'})
      persistence.set('b', {data: 'data-b'})
      persistence.remove('a')
      let result = persistence.get('b')
      expect(persistence.engine).to.equal('sessionStorage')
      expect(result).to.deep.equal({data: 'data-b'})
    })

    it('should remove value from localStorage', () => {
      persistence.setEngine('localStorage')
      persistence.set('a', {data: 'data-a'})
      persistence.set('b', {data: 'data-b'})
      persistence.remove('a')
      let result = persistence.get('b')
      expect(persistence.engine).to.equal('localStorage')
      expect(result).to.deep.equal({data: 'data-b'})
    })
  })

  describe('Clear function', () => {
    it('should clear value from sessionStorage', () => {
      persistence.set('a', {data: 'data-a'})
      persistence.set('b', {data: 'data-b'})
      persistence.clear()
      let result = persistence.get('b')
      expect(persistence.engine).to.equal('sessionStorage')
      expect(result).to.be.null
    })

    it('should clear value from localStorage', () => {
      persistence.setEngine('localStorage')
      persistence.set('a', {data: 'data-a'})
      persistence.set('b', {data: 'data-b'})
      persistence.clear()
      let result = persistence.get('b')
      expect(persistence.engine).to.equal('localStorage')
      expect(result).to.be.null
    })
  })
})
