import './App.css';
import {useState, useEffect} from "react";
import axios from "axios";
import {Button} from "@mui/material";
import MultipleSelectCheckmarks from "./components/radioGroup";
import MuiTable from "./components/table";
import FileUpload from "./components/fileUpload";

function App() {
    const [params, setParams] = useState(['알림없음']);
    const [data, setData] = useState('');
    // const [paramData, setParamData] = useState(['']);

    const [getBtn, setGetBtn] = useState(false);

    const getEventBtn = () => {
        setGetBtn(!getBtn);
    }


    useEffect(() => {
        axios.get('/api/api_test1')
            .then((res)=>{
                console.log(Object.keys(res.data[0]));
            setParams(Object.keys(res.data[0]));
            })
    },[params])

    useEffect(()=> {
        axios.get('/api/api_test1')
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
    }, [getBtn])

    // useEffect(()=>{
    //     axios.get('/api',{
    //         params : paramData,
    //     })
    //         .then((res) => {
    //             console.log(res.data)
    //             setData(res.data)
    //         })
    // }, )


    return (
        <div className="App">
            <div>
                <MultipleSelectCheckmarks params = {params}></MultipleSelectCheckmarks>
            </div>
            <div>
                <Button className = 'button' onClick = {getEventBtn}>get하기</Button>
                <div className = 'table-container'>
                    {getBtn && <MuiTable data = {data} maxHeight={"100%"}/>}
                </div>
            </div>
            <div className = 'file-upload-container'>
                <FileUpload/>
            </div>
        </div>
    );
}

export default App;
