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
                (attackers != null) ? attackers.map((attacker, i) =>
                    <>
                        <h3 key={i}>{attacker.charName}</h3>
                        <h1>Level: {attacker.charLevel}</h1>
                        <p>Attack: {attacker.attack}</p>
                        <p>Crit Damage: {attacker.critDamage}</p>
                        <p>Break Effect: {attacker.breakEffect}</p>
                        <p>Damage Boost: {attacker.damageBoost}</p>
                        <p>Elemental Damage Boost: {attacker.elementalDmgBoost}</p>
                        <button onClick={(e) => { this.editChar(e, attacker.id) }}>Edit</button>
                    </>
                ) : <div>Loading...</div>
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
        //either return another component and setattackers to null or make object into array with 1 entry
        setAttackers([json]);
        console.log(attackers);
    }

    async function editChar(id) {

    }

    async function attackerFetch() {
        /*const options = { method: 'GET', headers: new Headers({ "content-type": "application/json" }), };*/
        const response = await fetch('attacker');
        const json = await response.json();
        setAttackers(json);
    }
}
export { HSRItems };