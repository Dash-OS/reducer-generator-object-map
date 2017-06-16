export default 
  (initialState, handlers = {}, pcontext, ...initialArgs) => (
    (state = initialState, action, context, ...reducerArgs) => (
      ( ! action || ! action.type || typeof handlers[action.type] !== 'function' )
        ? state
        : handlers[action.type](state, action, { ...pcontext, ...context }, ...initialArgs, ...reducerArgs)
    )
  )