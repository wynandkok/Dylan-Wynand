'use strict';

describe('Service: Todostorage', function () {

  // load the service's module
  beforeEach(module('TodoApp'));

  // instantiate service
  var Todostorage;
  beforeEach(inject(function (_Todostorage_) {
    Todostorage = _Todostorage_;
  }));

  it('should do something', function () {
    expect(!!Todostorage).toBe(true);
  });

});
