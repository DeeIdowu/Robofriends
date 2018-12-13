import React from 'react';
//to import the card information
import Card from './Card';

//CardList recieves cards and robots via parameter and import
const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i) => {
        return < Card key={i} id={robots[i].id} name= {robots[i].name} email= {robots[i].email}/>
    })
    return (
<div>
 {cardComponent}
</div>

    );
}

//export the list
export default CardList;