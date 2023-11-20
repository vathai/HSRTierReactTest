import React, { useState, useEffect } from 'react';

const HSRItems = () => {
    const [attackers, setAttackers] = useState([]);

    useEffect(() => {
        attackerFetch();
    }, [])


    return (
        <main>
            {   
                //returning json object with status code and value(array to extract)
                console.log(attackers)
                //(attackers != null) ? attackers.map((attacker) => <h3>{attacker.CharName}</h3>):<div>Loading...</div>
            }
        </main>
    )

    async function attackerFetch() {
        const response = await fetch('attacker');
        const json = await response.json();
        setAttackers(json);
    }
}
export { HSRItems };