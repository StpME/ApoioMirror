import React from 'react';
import { ResultFilter } from './ResultFilter';
import { ResultItem } from './ResultItem';

export default function ResultPage(props) {
    return (
        <div className="container mt-5">
            <div className="row m-auto">
                <div className="col-md-4 col-lg-3">
                    <ResultFilter />
                </div>
                 <div className="col-md-6 col-lg-9 flex-column">
                    <ResultItem />
                </div>
            </div>
        </div>
    );
}