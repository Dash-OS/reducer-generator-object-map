import { expect } from 'chai';

import createObjectMapReducer from '../../src/main';

const initialState = {
  initialKey: 'initialValue',
};

const successState = {
  newKey: 'newValue',
};

const actionsToTest = {
  success: {
    type: 'ACTION',
  },
  fail: {
    type: 'ANOTHER_ACTION',
  },
};

const generateReducer = () =>
  createObjectMapReducer(
    initialState,
    {
      ACTION: (state, action, ...args) => ({
        ...state,
        ...successState,
        args,
      }),
    },
    'arg1',
    'arg2',
  );

describe('- Generate & Test Reducer', () => {
  describe('Generate Object Map Reducer', () => {
    const reducer = generateReducer();
    let currentState;

    it('should generate a reducer function when called', () => {
      expect(reducer).to.be.a('function');
    });

    it('should initialize initialState when called without state', () => {
      currentState = reducer(currentState, actionsToTest.fail);

      expect(currentState).to.deep.include(initialState);
    });
  });

  describe('Handles Invalid Arguments', () => {
    it('should throw an error if the handlers argument is not an object', () => {
      expect(() => createObjectMapReducer(initialState, 'hello')).to.throw(TypeError);
    });
  });

  describe('[MATCH] | Test Action Dispatched', () => {
    const reducer = generateReducer();
    let anotherState,
      currentState = reducer(undefined, actionsToTest.success, 'arg3', 'arg4');

    it('should include the initialState when called and matched', () => {
      expect(currentState).to.deep.include(initialState);
    });

    it('should include the changed values when called and matched', () => {
      expect(currentState).to.deep.include(successState);
    });

    it('should include both merged initialState and new values when matched', () => {
      expect(currentState).to.deep.include({ ...initialState, ...successState });
    });

    it('should pass the initialArgs as arguments to the reducing function', () => {
      expect(currentState.args).to.be
        .a('array', 'args is not an array')
        .and.include.ordered.members(['arg1', 'arg2']);
    });

    it('should pass the reducerArgs as arguments to the reducing function after initialArgs', () => {
      expect(currentState.args).to.be
        .a('array', 'args is not an array')
        .and.include.ordered.members(['arg1', 'arg2', 'arg3', 'arg4']);
    });

    it('should return a new object when called and matched', () => {
      anotherState = reducer(currentState, actionsToTest.success, 'arg3', 'arg4');

      expect(currentState, 'first reduction').to.not.equal(initialState);

      expect(currentState, 'second reduction').to.not.equal(anotherState);
    });

    it('should be the same deep-equal object when called more than once with the same action', () => {
      expect(currentState).to.deep.equal(anotherState);
    });
  });

  describe('[NO MATCH] | Test Action Dispatched', () => {
    const reducer = generateReducer();

    const currentState = reducer(undefined, actionsToTest.fail, 'arg3', 'arg4');

    it('should include the initialState when called and not matched', () => {
      expect(currentState).to.deep.include(initialState);
    });

    it('should equal the initialState when called and not matched', () => {
      expect(currentState).to.equal(initialState);
    });
  });
});
