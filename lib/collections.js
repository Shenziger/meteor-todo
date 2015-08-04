/**
 * Created by Anton on 02.08.2015.
 */
Todos = new Meteor.Collection('todos');

Todos.allow({
    insert: function(userId, doc){
    //    console.log(userId);
    //    console.log(doc);
        return !! userId;
    }
});