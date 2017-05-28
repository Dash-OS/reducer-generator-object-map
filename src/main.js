export default 
  (initialState, handlers = {}, pcontext) => 
    (state = initialState, action, context) =>
      ! action || ! action.type || typeof handlers[action.type] !== 'function'
        ? state
        : handlers[action.type](state, action, { ...pcontext, ...context })