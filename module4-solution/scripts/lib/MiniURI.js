'use strict';

class MiniURI {
    constructor(opts = {}) {
      this.arguments = {}
      Object.keys(opts).forEach(k => this[k]=opts[k])
    }
    compile(opts={}) {
      let args = Object.assign(this.arguments, opts)

      // this copying allows the setting of default arguments
      return this.baseURI + this.getArguments(args)
    }
    getArguments(args = {}) { // compile a list of args from
      if (Object.getOwnPropertyNames(args).length === 0)
        return ''
      return Object.keys(args)
        .reduce((p, c) => {
          p.push(`${c}=${args[c]}`)
          return p 
        }, ['?'])
        .join('&')
    }
  }
  