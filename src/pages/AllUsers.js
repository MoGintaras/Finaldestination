import {useState as state, useEffect} from 'react';
import {useParams} from "react-router-dom";

import http from "../plugins/Fetch";

function AllUsers() {
    let param = useParams()
    const [users, setUsers] = state([])

    useEffect(() => {
        let link = "/getUsers"
        http.get(link).then(res => {
            setUsers(res.users)
        })
    }, [param])

    function deleteUser(param){
        let link = "/deleteUser/"
        let id = param.target.id
        http.get(link+id).then(res => {
            setUsers(res.users)
        })}
        function updateUser(param){

        }

    return (
        <div className="d-flex allUsers">
            {users.length > 0 ? users.map((item, index) =>
                <div key={index}>
                <div className="card">
                    <img className="userImg" src={item.image} alt=""/>
                    <h3>Vardas : {item.name}</h3>
                    <p>Elektroninis pastas : {item.email}</p>
                    <p>Amzius : {item.age}</p>
                    <p>Miestas : {item.city}</p>

                    <button id={item._id} onClick={deleteUser}>Istrinti vartotoja</button>
                    <button onClick={updateUser}>Pakeisti informacija</button>
                </div>




            </div>) : null
            }


        </div>
    );
}

export default AllUsers;