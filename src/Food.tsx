function Food() 
{
    const food1 = "Pizza";
    const food2 = "Sushi";
    return(
        <ul>
            <li>{food1}</li> 
            <li>{food2.toUpperCase()}</li>
            <li>Ramen</li>
        </ul>
    );
}

export default Food