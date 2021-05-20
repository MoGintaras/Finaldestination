import {useState as state} from 'react';
import http from "../plugins/Fetch"

function AddItems() {
    const [name, setName] = state('')
    const [img, setImg] = state('')
    const [age, setAge] = state('')
    const [email, setEmail] = state('')
    const [password, setPassword] = state('')
    const [msg,setMsg] = state('')


    function upload() {
        const user = {
            name,
            img,
            age,
            email,
            password

        }
        http.post('/addItem', user).then(res => {
            setMsg(res.message)
        })
        setName("")
        setImg("")
        setAge("")
        setEmail("")
        setPassword("")
    }

    return <div className="pageSection">
        <div className="uploadForm">
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Vardas"/>
            <input type="text" onChange={(e) => setImg(e.target.value)} placeholder="Nuotrauka"/>
            <input type="text" onChange={(e) => setAge(e.target.value)} placeholder="Amzius"/>
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Elektroninis pastas"/>
            <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="slaptazodis"/>


            <div className="uploadBtn" onClick={upload}>Prideti vartotoja</div>
            <div>{msg}</div>

        </div>
    </div>

}

export default AddItems;