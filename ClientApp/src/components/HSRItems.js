import React, { useState, useEffect } from 'react';

const HSRItems = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('attacker')
            .then((response) => response.json())
            .then(data => {
                setItems(data);
                console.log(data);
            })
    }, [])


    return (
        <main>
            {   
                /*(items != null) ? items.map((item) => <h3>{item.CharName}</h3>):<div>Loading...</div>*/
            }
        </main>
    )

}
export { HSRItems };