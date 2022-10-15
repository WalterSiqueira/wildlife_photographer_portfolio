import React, { useRef } from 'react';
import check from '../../Assets/Images/square-check-solid.svg';
import trash from '../../Assets/Images/trash-solid.svg';

function Task( {inputText, text, id} ) {
    const targetChild = useRef();
    const siblingFinder = (id) => {
      var siblings = targetChild.current.parentNode;
      var granpa = [siblings.parentNode.children];
      var granpsChildren = [...granpa];
      var childId = null;
      console.log(siblings.children);
      console.log(granpa);
      console.log(granpsChildren.length);
      for (var i = granpsChildren.length; i--;) {
        if (granpsChildren[i].props.id) {
          childId = granpsChildren[i];
          console.log(childId);
          break;
        }
      }
      console.log(childId);
}
    return (
        <div id={id} className='taskListBlock'>
            <li className='titleTaskList'>{text}</li>
            <button onClick={siblingFinder} id={text} ref={targetChild} className='checkBTN'>  
                <img className='checkIcon' src={check}/>
            </button>
            <button className='trashBTN' id={text}>
                <img className='trashIcon' src={trash}/>
            </button>
        </div>
    )
}

export default Task;
