import React from 'react';
import Score from '../Score/Score';

const Student = (props) => (   
   <div>
      {props.students.map(student => 
        <div>
            <h1>{student.name}</h1>
            <p>{student.bio}</p>
            <Score scores={student.scores}/>
        </div>)}
    </div>
    );



export default Student;


 