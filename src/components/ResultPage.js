import React from 'react';
import { ResultFilter } from './ResultFilter';
import { ResultPane } from './ResultPane';
import { Link } from 'react-router-dom';

export default function ResultPage(props) {
    return (
        <div>
            <div className="container mt-5">
                <div className="row m-auto">
                    <div className="col-md-4 col-lg-3">
                        <ResultFilter />
                        <div className="card shadow-none border">
                            <Link to="../new_item" className="card-body btn btn-danger">
                                <strong className="text-white">Add a New Location</strong> 
                            </Link>
                        </div>
                    </div>
                    <ResultPane storeCallback={props.storeCallback} favCallback={props.favCallback} stores={props.stores}/>
                </div>
            </div>
        </div>
    );
}