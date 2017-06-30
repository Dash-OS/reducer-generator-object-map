export default function createObjectMapReducer(initialState, handlers, ...initialArgs) {
  if (typeof handlers !== 'object') {
    throw new TypeError(
      `[reducer-generator-object-map]: received an invalid "handlers" argument.  Expected object but got ${typeof handlers}`,
    );
  }

  return (state = initialState, action, ...reducerArgs) =>
    !action || !action.type || typeof handlers[action.type] !== 'function'
      ? state
      : handlers[action.type](state, action, ...initialArgs, ...reducerArgs);
}
