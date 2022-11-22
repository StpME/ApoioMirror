import React from 'react';

export function createList(props) {
    const testName = "My Food List";
    const handleClick = (event) => {
        console.log('clicked');
    }
    <div id='list_header' class="row p-4" onClick={handleClick}>
    <li class="list-group-item">
        <button type="button" id="edit_btn" class="btn btn-success pull-right me-3">Edit</button>
        <strong><h2 class="ms-3" id="list_name">{testName}</h2></strong>
    </li>
</div>
}

