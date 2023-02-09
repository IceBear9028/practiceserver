import React from "react";
import {useState} from "react";
import {Button} from "@mui/material";
import axios from "axios";

const FileUpload = () => {
    const [file, setFile] = useState();
    const [filename, setFilename] = useState();
    const handleFile = (event) => {
        setFile(event.target.files[0]);
        setFilename(event.target.files[0].name);
        console.log(event.target.files[0].name);
    }
    const uploadFile = () => {
        const formData = new FormData();
        formData.append('filename', filename);
        formData.append('file', file);

        axios.get('/api/endpoint', formData)
            .catch((err, res) => {
                if(!err){
                    console.log(res);
                    console.log(err);
                }
            })
    }
    return(
        <form id = 'upload-file'>
            <input type = 'file' name = 'file' onChange = {handleFile}/>
            <Button form = 'upload-file' onClick = {uploadFile}>upload</Button>
        </form>
    )
}

export default FileUpload