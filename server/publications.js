/**
 * Created by Anton on 03.08.2015.
 */
Meteor.publish('todos', function(){
   return Todos.find({"userId": this.userId});
});