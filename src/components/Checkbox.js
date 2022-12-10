import React, {useState} from 'react';
//chose to put in directly instead, can delete this if doesnt need reuse
export function Checkbox(props) {
    const [checkedList, setCheckedList] = useState([]);
 
    const handleSelect = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;
    
        if (isChecked) {
        // Add checked item into checkList
            setCheckedList([...checkedList, value]);
            props.filterList(checkedList);
        } else {
        //Remove unchecked item from checkList
            const filteredList = checkedList.filter((item) => item !== value);
            setCheckedList(filteredList);
        }
    };
    return (
        <div className="col container">
            
                {checkedList.map((item, index) => {
                    return (
                        <div className="btn btn-success" key={index}>
                            {item}
                        </div>
                    );
                })}
                
                
                {props.filters.map((item, index) => {
                    return (
                        <div key={index} className="col checkbox-container">
                            <div className="col text-muted">
                                <div className="form-group">
                                    <input type="checkbox" value={item} onChange={handleSelect} />
                                    <label className="px-1" htmlFor="checkbox">{item}</label>
                                </div>
                            </div>
                        </div>
                    );
                })}
                
        </div>
    );
}
