/**
 * Created by Anton on 02.08.2015.
 */
Template.todoElement.events({
    'click a': function(e, tmpl){
  //      console.log(tmpl);
    var done = true;
        if (tmpl.data.done === true)
        done = false;
  // добавляем в базу Todos новое поле с именем done, которому присваиваем значение true
        //это делается по клику на любом предложении списка
  Todos.update({"_id": tmpl.data._id}, {$set: {"done": done}});
    }
});

Template.todoElement.helpers({
    'class': function(){
        if (this.done === true)
        return "checked";
    }
});