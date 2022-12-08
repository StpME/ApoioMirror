import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton';
import { Alert } from 'react-bootstrap';


export function CreateNewItem(props) {
    console.log(props);
	//const [user, setUser] = useState({name: "", type: ""});
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [typeBtn, setTypeBtn] = useState("Location Type");
    const [data, setData]=useState([]);
    const [alertMessage, setAlertMessage] = useState(null);

	// Submits inputted name when user clicks out of input
	const handleNameChange = (event) => {
        setName(event.target.value);
        //setUser({...user, [event.target.element]: event.target.value});
    };
    const handleTypeChange = (event) => {
        setType(event.target.name);
        setTypeBtn(event.target.name);
        //setUser({...user, [event.target.element]: event.target.value});
    };

    // HOW TO USE LOCAL DATA IN A LOCAL SERVER BRO
    const loadData = () => JSON.parse(JSON.stringify(data));
    const getData=()=>{
        fetch('./data/store_data.json')
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
      };

    const handleSubmit = (event) => {
        // object to write into json file?
        const potato = {
            placeName: name
        }
        getData();
        console.log("SUBMITTED: Location Name: {"+name+"}" + " Location Type: {"+type+"}");
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
                                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Location Name..." onBlur={(event) => {handleNameChange(event)}} />
                                </div>
                            </div>
                        </div>                      
                    
                        <div className="row py-5 d-flex justify-content-between">
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
                        <input className="m-2" type="submit" value="Submit" onClick={(event) => handleSubmit(event)}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

