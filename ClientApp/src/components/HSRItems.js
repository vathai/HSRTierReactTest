import React, { useState, useEffect } from 'react';

const HSRItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/hsr-items').then((results) => {
            return results.json();
        }).then(data => { setItems(data); })
    }, [])


    return (
        <main>
            {   
                (items != null) ? items.map((item) => <h3>{item.CharName}</h3>):<div>Loading...</div>
            }
        </main>
    )
}
export { HSRItems };