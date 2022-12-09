import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Alert } from 'react-bootstrap';

export function CreateNewItem(props) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [loc, setLoc] = useState("");
    const [desc, setDesc] = useState("");
    const [typeBtn, setTypeBtn] = useState("Location Type");
    const [data, setData] = useState([]);
    const [imageFile, setImageFile] = useState(undefined);
    let initialURL = '/pics/brows.png';
    const [imageUrl, setImageUrl] = useState(initialURL);
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
    const handleImgChange = (event) => {
        if (event.target.files.length > 0 && event.target.files[0]) {
            const imageFile = event.target.files[0]
            setImageFile(imageFile);
            setImageUrl(URL.createObjectURL(imageFile));
        }
    }
    const handleSubmit = (event) => {
        // New object to write into json file
        const obj = {
            placeName: name,
            location: loc,
            description: desc,
            placeThumbnail: imageUrl,
            type: type,
            favorited: true
        }
        setData([...props.stores, obj]);
        passData();
        //Validation check for image file
        function imageNameValidation(){
            if (imageFile === undefined) {
                return "invalid";
            }
            return imageFile.name;
        }
        console.log("SUBMITTED: \n Name: {"+obj.placeName+"}\n" + " Location: {"+obj.location+"}\n" + " Description: {"+obj.description+"}\n" + " Type: {"+obj.type+"}\n" + " Image Name: ", imageNameValidation() + "\n Image Url: " + obj.placeThumbnail);
        //Reset states
        setName("");
        setType("");
        setLoc("");
        setDesc("");
        setImageUrl(initialURL);
        setImageFile(undefined);
        event.preventDefault();
        setTypeBtn("Location Type");
        
    }

    return (
        <div className="d-block p-5">
            {alertMessage &&
                <Alert variant="danger" dismissible onClose={() => setAlertMessage(null)}>{alertMessage}</Alert>
            }
            <div className="card ">
                <div className="card-body ">
                    <h3 className="text-center py-3 "><strong>Add a New Location</strong></h3>
                    <form className="py-3 ">
                        <div className="row d-flex justify-content-between">
                            <div className="col m-auto">
                                <strong>Location Name:</strong>
                            </div>
                            <div className="col text-muted">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Location Name..." onBlur={(event) => {handleNameChange(event)}} />
                                </div>
                            </div>
                        </div>  
                        <div className="row py-3 d-flex justify-content-between">
                            <div className="col m-auto">
                                <strong>Address:</strong>
                            </div>
                            
                            <div className="col text-muted">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Address..." onBlur={(event) => {handleLocChange(event)}} />
                                </div>
                            </div>
                        </div>  
                        <div className="row d-flex justify-content-between">
                            <div className="col m-auto">
                                <strong>Description:</strong>
                            </div>

                            <div className="col text-muted">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Add Text Here..." onBlur={(event) => {handleDescChange(event)}} />
                                </div>
                            </div>
                        </div>  
                        <div className="row d-flex justify-content-between">
                            <div className="col m-auto">
                                <strong>Add an Image:</strong>
                                <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleImgChange} />
                            </div>
                            <div className="col py-5">
                                <div className="">
                                    <img alt="profile picture" src={imageUrl} className="rounded img-thumbnail d-block profile-img" />
                                </div>
                                <div className="my-0">
                                    <label htmlFor="imageUploadInput" className="btn btn-success btn-sm mx-auto ">Choose Image</label>
                                </div>
                            </div>
                        </div>  
                        <div className="row py-3 d-flex justify-content-between">
                            <div className="col m-auto">
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
                        <input className="w-100 btn btn-success mt-5" type="submit" value="Add to List" onClick={(event) => handleSubmit(event)}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

