import React from 'react';
import './Card.css'


//Instead of doing the class building the function first
//Below is JSX
const Card = (props) => {
    const {name, email, id} = props;
    return (

        //for the images,names & email in the card, seperate divs 
        //images derive from robohash api
        // the /input changes the robot picture as well as size/example: ?100x100'
        //${props.id} to make sure the id's are always changing
        //className in-lines from tachyon
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='profile' src={`https://robohash.org/${id}?200x200`}/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        </div>
        
    )
}

//exporting of card
export default Card;