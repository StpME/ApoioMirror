import React from 'react';
import Navbar from './Navbar';
import { ResultFilter } from './ResultFilter';
import { ResultPane } from './ResultPane';

export default function ResultPage(props) {
    return (
        <div>
            <div className="container mt-5">
                <div className="row m-auto">
                    <div className="col-md-4 col-lg-3">
                        <ResultFilter />
                    </div>
                    <ResultPane storeCallback={props.storeCallback} favCallback={props.favCallback}/>
                </div>
            </div>
        </div>
    );
}