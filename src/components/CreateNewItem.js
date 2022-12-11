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
    const [checkedList, setCheckedList] = useState([]);
    // Callback function to add updated data to database
    function passData() {
        props.dataset(data);
    }
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
    const handleSelect = (event) => {
        if (event.target.checked) {
        // Add checked item into checkList
            setCheckedList([...checkedList, event.target.value]);
        } else {
        // Remove unchecked item from checkList
            const filteredList = checkedList.filter((item) => item !== event.target.value);
            setCheckedList(filteredList);
        }
    };
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
        // Validation check for image file
        function imageNameValidation(){
            if (imageFile === undefined) {
                return "invalid";
            }
            return imageFile.name;
        }
        console.log("SUBMITTED: \n Name: {"+obj.placeName+"}\n" + " Location: {"+obj.location+"}\n" + " Description: {"+obj.description+"}\n" + " Type: {"+obj.type+"}\n" + " Image Name: ",
        imageNameValidation() + "\n Image Url: " + obj.placeThumbnail + "\n Filter Tags: {" + checkedList + "}");
        // Reset states
        setName("");
        setType("");
        setLoc("");
        setDesc("");
        setImageUrl(initialURL);
        setImageFile(undefined);
        setCheckedList([]);
        //document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );
        setTypeBtn("Location Type");
        event.preventDefault();
    }
    return (
        <div className="d-block p-5">
            {alertMessage &&
                <Alert variant="danger" dismissible onClose={() => setAlertMessage(null)}>{alertMessage}</Alert>
            }
            <div className="card">
                <div className="card-body ">
                    <h3 className="text-center py-3 "><strong>Add a New Location</strong></h3>
                    <form className="py-3 ">
                        <div className="row d-flex justify-content-between">
                            <div className="col m-auto">
                                <strong>Location Name:</strong>
                            </div>
                            <div className="col text-muted">
                                <div className="form-group">
                                    <input type="text" className="form-control" value={name} placeholder="Location Name..." onChange={(event) => {handleNameChange(event)}}  />
                                </div>
                            </div>
                        </div>  
                        <div className="row py-3 d-flex justify-content-between">
                            <div className="col m-auto">
                                <strong>Address:</strong>
                            </div>
                            
                            <div className="col text-muted">
                                <div className="form-group">
                                    <input type="text" className="form-control" value={loc} placeholder="Address..." onChange={(event) => {handleLocChange(event)}} />
                                </div>
                            </div>
                        </div>  
                        <div className="row d-flex justify-content-between">
                            <div className="col m-auto">
                                <strong>Description:</strong>
                            </div>

                            <div className="col text-muted">
                                <div className="form-group">
                                    <input type="text" className="form-control" value={desc} placeholder="Add Text Here..." onChange={(event) => {handleDescChange(event)}} />
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
                        <div className="row py-3 d-flex justify-content-between">
                            <div className="col m-auto">
                                <strong>Store Tags:</strong>
                                <div className="col">
                                    {checkedList.map((item, index) => {
                                        return (
                                            <div className="btn btn-success m-1" key={index}>
                                                {item}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="col">
                                {props.filters.map((item, index) => {
                                    return (
                                        <div key={index} className="col checkbox-container">
                                            <div className="col text-muted">
                                                <div className="form-group">
                                                    <input type="checkbox" value={item} onChange={handleSelect} checked={checkedList.includes(item)} />
                                                    <label className="px-1" htmlFor="checkbox">{item}</label>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {/* <Checkbox className="col" filters={props.filters} activeFilters={filterList} /> */}
                            
                        </div>
                        
                        <input className="w-100 btn btn-success mt-5" type="submit" value="Add to List" onClick={(event) => handleSubmit(event)}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

