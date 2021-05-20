import {useState as state} from 'react';
import http from "../plugins/Fetch"

function AddItems() {
    const [name, setName] = state('')
    const [image, setImage] = state('')
    const [age, setAge] = state('')
    const [email, setEmail] = state('')
    const [city, setCity] = state('')
    const [msg,setMsg] = state('')


    function upload() {
        const user = {
            name,
            image,
            age,
            email,
            city

        }
        http.post('/addUser', user).then(res => {
            setMsg(res.message)
        })
    }

    return <div className="pageSection">
        <div className="uploadForm">
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Vardas"/>
            <input type="text" onChange={(e) => setImage(e.target.value)} placeholder="Nuotrauka"/>
            <input type="text" onChange={(e) => setAge(e.target.value)} placeholder="Amzius"/>
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Elektroninis pastas"/>
            <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="Miestas"/>


            <div className="uploadBtn" onClick={upload}>Prideti vartotoja</div>
            <div>{msg}</div>

        </div>
    </div>

}

export default AddItems;