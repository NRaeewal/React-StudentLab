import React from 'react';


const Score = (props) => (   
    <div>
        {props.scores.map(score => 
        <div>
            <p> <b>Date:</b> {score.date}  <b>Score:</b> {score.score}</p>
        </div>)}
     </div>
     );

export default Score;


