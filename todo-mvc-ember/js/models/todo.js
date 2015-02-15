Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js',
   isCompleted: true
 },
 {
   id: 2,
   title: 'Learn Rails JSON API',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Learn iOS development',
   isCompleted: false
 },
  {
   id: 4,
   title: 'Make millions!',
   isCompleted: false
 }
];