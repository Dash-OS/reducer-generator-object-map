export default 
  function createObjectMapReducer(initialState, handlers = {}, ...initialArgs) {
    return (state = initialState, action, ...reducerArgs) => (
      ! action || ! action.type || typeof handlers[action.type] !== 'function'
        ? state
        : handlers[action.type](
            state, 
            action,
            ...initialArgs, 
            ...reducerArgs
          )
    )
  }