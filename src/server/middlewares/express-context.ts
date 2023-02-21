// express-context.ts
//
// This utility can be used for managing the context of the express request and response lifecycle.
// There are many use cases this utility can fit. 
import { Context } from 'preact'

// This utility is following the facade pattern. hence it is not convenient to use it,
//
export default {
  _context: null,

  setContext<T>(ctx: Context<T>) {
    this._context = ctx
  },

  // Accessing the _context prop directly in this facade is considered an anti-pattern,
  // instead use this getter to access it from this object.
  getContext<T>() {
    return this._context as Context<T>
  },
}