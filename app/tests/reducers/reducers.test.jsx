var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducers', () => {
    it('should set searchText state with setSearchText action', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Example search'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted state', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Example todo'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo by id', () => {
      var todos = [{
        id: 1,
        text: 'Example text',
        completed: true,
        createdAt: 123,
        completedAt: 223
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });
});
