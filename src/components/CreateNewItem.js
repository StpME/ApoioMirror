import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Alert } from 'react-bootstrap';
const elem = <img id="arrow" src="pics/collapse_arrow.png"/>

export function CreateNewItem(props) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [loc, setLoc] = useState("");
    const [desc, setDesc] = useState("");
    const [typeBtn, setTypeBtn] = useState("Location Type");
    const [data, setData] = useState([]);
    const [alertMessage, setAlertMessage] = useState(null);
    
    function passData() {
        props.passback(data);
    }
	// Submits inputted name when user clicks out of input
	const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleLocChange = (event) => {
        setLoc(event.target.value);
    };
    const handleDescChange = (event) => {
        setDesc(event.target.value);
    };
    const handleTypeChange = (event) => {
        setType(event.target.name);
        setTypeBtn(event.target.name);
    };

    // CANT USE LOCAL DATA IN A LOCAL SERVER
    //const loadData = () => JSON.parse(JSON.stringify(data));
    /*const getData=()=>{
        fetch("./store_data.json") // doesnt do anything, use real data
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(dataset) {
            console.log(dataset);
            setData(dataset)
          })
          .catch(function(err) {
            setAlertMessage(err.message);
          })
      }; */

    const handleSubmit = (event) => {
        // New object to write into json file
        const obj = {
            placeName: name,
            type: type,
            location: loc,
            description: desc,
            favorited: true
        }
        
        setData([...props.stores, obj]);
        passData();

        console.log("SUBMITTED: Name: {"+name+"}" + " Location: {"+loc+"}" + " Description: {"+desc+"}" + " Type: {"+type+"}" );
        
        setName("");
        setType("");
        setLoc("");
        setDesc("");
        setTypeBtn("Location Type");
        console.log(data);
        event.preventDefault();
    }

    return (
        <div className="d-block p-5">
            {alertMessage &&
                <Alert variant="danger" dismissible onClose={() => setAlertMessage(null)}>{alertMessage}</Alert>
            }
            <div className="card">
                <div className="card-body">
                    <h3 className="text-center py-3"><strong>Add a New Location</strong></h3>
                    <form className="py-3">
                        <div className="row d-flex justify-content-between">
                            <div className="col">
                                <strong>Location Name:</strong>
                            </div>
                            <div className="col text-muted">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Location Name..." onBlur={(event) => {handleNameChange(event)}} />
                                </div>
                            </div>
                        </div>  
                        <div className="row py-3 d-flex justify-content-between">
                            <div className="col">
                                <strong>Address:</strong>
                            </div>
                            
                            <div className="col text-muted">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Address..." onBlur={(event) => {handleLocChange(event)}} />
                                </div>
                            </div>
                        </div>  
                        <div className="row d-flex justify-content-between">
                            <div className="col">
                                <strong>Description:</strong>
                            </div>
                            
                            <div className="col text-muted">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Add Text Here..." onBlur={(event) => {handleDescChange(event)}} />
                                </div>
                            </div>
                        </div>  
                        <div className="row py-3 d-flex justify-content-between">
                            <div className="col">
                                <strong>Type:</strong>
                            </div>
                            <Dropdown className="col">
                                <Dropdown.Toggle variant="success">
                                {typeBtn}
                                </Dropdown.Toggle >
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1" name={"Restaurant"} onClick={(event) => handleTypeChange(event)}>Restaurant</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" name={"Store"} onClick={(event) => handleTypeChange(event)}>Store</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-3" name={"Other"} onClick={(event) => handleTypeChange(event)}>Other</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <input className="m-2" type="submit" value="Add to List" onClick={(event) => handleSubmit(event)}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

