import React from 'react';

export function ListCard(props) {
    //const [something, set] = useState(null);
    //create list button
    //on click, pass to createnewlist
    console.log('List card');
    return (
        <div id='list_header' className="row p-4 mt-4">
            <li className="list-group-item btn btn-success stretched-link">
                <strong><h2 className="ms-3" id="list_name">Create New List</h2></strong>
            </li>
        </div>
    );
}

