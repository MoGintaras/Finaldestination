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

    return (
        <div className="d-flex warehouse">
            {users.length > 0 ? users.map((item, index) =>
                <div key={index}>
                <div className="card">
                    <h3>Vardas : {item.name}</h3>
                    <p className="quant">Photo : {item.image}</p>
                    <p>Elektroninis pastas : {item.email}</p>
                    <p>Amzius : {item.age}</p>
                    <p>Miestas : {item.city}</p>

                    <button id={item._id} onClick={deleteUser}>Delete</button>
                </div>




            </div>) : null
            }


        </div>
    );
}

export default AllUsers;