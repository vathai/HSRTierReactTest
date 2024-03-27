import React, { useState, useEffect } from 'react';

const HSRItems = () => {
    const [attackers, setAttackers] = useState([]);

    useEffect(() => {
        attackerFetch();
    }, [])


    return (
        <main>
            {
                //was returning json object with status code and value(array to extract) with results.ok
                (attackers != null) ? attackers.map((attacker, i) => <h3 key={i}>{attacker.charName}</h3>) : <div>Loading...</div>
            }
            <input id="charID"></input>
            <button onClick={getName}>submit</button>
        </main>
    )

    async function getName() {
        const id = document.getElementById("charID").value;
        const response = await fetch(`attacker/${id}`);
        const json = await response.json();
        //returns object, can't use .map
        setAttackers(json);
    }

    async function attackerFetch() {
        /*const options = { method: 'GET', headers: new Headers({ "content-type": "application/json" }), };*/
        const response = await fetch('attacker');
        const json = await response.json();
        setAttackers(json);
    }
}
export { HSRItems };