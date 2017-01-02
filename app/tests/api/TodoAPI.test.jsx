var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set todos when valid todos array entered', () => {
      var todos = [{
        id: 11,
        text: 'Test',
        completed: true
      }];

      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });

    it('should not set todos when invalid todos entered', () => {
      var badTodos = {text: 'Test'};

      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localstorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localstorage', () => {
      var todos = [{
        id: 11,
        text: 'Test',
        completed: true
      }];

      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'Example 1',
      completed: true
    },{
      id: 2,
      text: 'Example 2',
      completed: false
    },{
      id: 3,
      text: 'Example 3',
      completed: true
    }];

    it('should return all todos when showCompleted is true', () => {
      var showCompleted = true;
      var searchText = '';
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      expect(filteredTodos.length).toBe(3);
    });

    it('should return incomplete todos when showCompleted is false', () => {
      var showCompleted = false;
      var searchText = '';
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      expect(filteredTodos.length).toBe(1);
    });
  });
});
