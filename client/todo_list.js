/**
 * Created by Anton on 02.08.2015.
 */
Meteor.subscribe('todos');

Template.todoList.helpers({
    'todos': function(){
        return Todos.find();
    }
});

Template.todoList.events({
    'keypress #todo-input': function(e, tmpl){
 //       console.log(e);
 //       console.log(tmpl);
        if(e.which === 13 && e.currentTarget.value !=''){
           if ( Todos.insert({"todo": e.currentTarget.value, "userId": Meteor.userId()}) )
               e.currentTarget.value = '';
 //           console.log('Нажат Enter');
        }
    }
});