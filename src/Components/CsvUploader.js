import React, { Component } from "react";
import CSVReader from "react-csv-reader";
import firebase from '../firebase';
import '../App.css';


class CsvUploader extends Component {
    constructor(props) {
        super(props);    
        this.ref = firebase.firestore().collection('csvData');
        this.state = {
            csvData: [],
        }
    }
    handleFile = data => {
        localStorage.setItem("csvData", JSON.stringify(data));
        const localStorageData = JSON.parse(localStorage.getItem("csvData"));
        this.setState({
            csvData: localStorageData
        });
        console.log(this.state.csvData);
    };
    handleButton(selectedValues) {
      
        var index;    
        if(selectedValues.length<4)
        {
            alert("Error!!! Inputs are missing")
        }
        else{               
                alert("Data Uploading..")
                for (index = 1; index < this.state.csvData.length - 1; index++) {
                this.ref.add({
                    'name':this.state.csvData[index][selectedValues[0]],
                    'Email':this.state.csvData[index][selectedValues[1]],
                    'Contact No':this.state.csvData[index][selectedValues[2]],
                    'Registration Id':this.state.csvData[index][selectedValues[3]]
                })    
        }   
        
             
    }
      
    }
 
    render() {
        let items = [];
        let tags = [];
        let selectedValues = [];
        let hardCodedValues = [];
    
        if (this.state.csvData.length === 0) {
            console.log("null")
        }
        else {
            hardCodedValues.push("Name:")
            hardCodedValues.push("Email:")
            hardCodedValues.push("Contact No.:")
            hardCodedValues.push("Registration Id:")
            items.push(<option key="d" value="d"></option>)
           
          
               for(var i = 0;i<this.state.csvData[0].length;i++)   
            {
            items.push(<option  key = {this.state.csvData[0][i]} value ={i}> {this.state.csvData[0][i]}</option>)
               
            }

        for (let i = 0; i < hardCodedValues.length; i++) {
                tags.push(<div className="i2">{hardCodedValues[i]}    <select className="i1" key = "Mapping" onChange={(e) => {
                    selectedValues.push(e.target.value)
                    console.log(hardCodedValues[i], "this is the index to check", e.target.value)
                }}>{items}</select></div>)

        }
        }
        return (
<div>
    <div className="h">
            <h1><i className="fas fa-file-csv"></i> <br></br>Select .CSV file</h1>
            <CSVReader className="btn" onFileLoaded={this.handleFile} />   
        </div>
            <br></br><br></br><br></br>
            {tags}
            <br></br><br></br> 
           <button type="button" className="btn btn-danger"  value="Upload" onClick={() => this.handleButton(selectedValues)}>Upload  
           
            </button>
            
</div>

        )    
    }
}

export default CsvUploader;