/**
 * Created by Anton on 02.08.2015.
 */
if (Todos.find().count() == 0) {
    Todos.insert({"todo": "Погладить белье"});
    Todos.insert({"todo": "Помыть посуду"});
}