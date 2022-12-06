import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export function Test() {
	const [user, setUser] = useState({name: "", type: ""});
    const [name, setName] = useState("");
    const [type, setType] = useState("");

	// Submits inputted name when user clicks out of input
	const handleNameChange = (event) => {
        setName(event.target.value);
        //setUser({...user, [event.target.element]: event.target.value});
    };
    const handleTypeChange = (event) => {
        setType(event.target.name);
        //setUser({...user, [event.target.element]: event.target.value});
    };
    const handleSubmit = (event) => {
        console.log('potato');
        event.preventDefault();
        
    }
            
    return (
        <div className="d-block p-5">
            <div className="card">
                <div className="card-body">
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
                                Location Type
                                </Dropdown.Toggle >
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1" name={"Restaurant"} onClick={(event) => handleTypeChange(event)}>Restaurant</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" name={"Store"} onClick={(event) => handleTypeChange(event)}>Store</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-3" name={"Store"} onClick={(event) => handleTypeChange(event)}>Alternatives</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <input type="submit" value="Submit" onClick={(event) => handleSubmit(event)}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

