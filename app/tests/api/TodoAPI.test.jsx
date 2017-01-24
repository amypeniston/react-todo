var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'Example One',
      completed: true
    },{
      id: 2,
      text: 'Example Two',
      completed: false
    },{
      id: 3,
      text: 'Example Three',
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

    it('should sort by completed status', () => {
      var showCompleted = true;
      var searchText = '';
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      var showCompleted = true;
      var searchText = 'three';
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      expect(filteredTodos.length).toBe(1);
    });

    it('should filter todos by searchText if uppercase', () => {
      var showCompleted = true;
      var searchText = 'Three';
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      expect(filteredTodos.length).toBe(1);
    });

    it('should return all todos for empty searchText', () => {
      var showCompleted = true;
      var searchText = '';
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      expect(filteredTodos.length).toBe(3);
    });
  });
});
