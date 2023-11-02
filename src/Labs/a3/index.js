import JavaScript from "./JavaScript";
import Nav from "../../Nav";
import Classes from "./Classses";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import Styles from "./Styles";
import PathParameters from "./PathParameters";
function Assignment3() {
    console.log('Hello World!');
    return(
       <div>
          <h1>Assignment 3</h1>
          <ConditionalOutput/>
          <Classes/>
          <JavaScript/>
          <TodoItem/>
            <TodoList/>
            <Styles/>
       </div>
    );
 }
 export default Assignment3