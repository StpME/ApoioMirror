import React from 'react';

export function ResultFilter(props) {
    return (
        <div className="card shadow-none border">
            <div className="card-body">
                <div className="mb-3"><strong>Filters:</strong></div>
                <div className="my-2">Owner Status:</div>
                <div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                        <label className="form-check-label">
                            Female-owned
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                        <label className="form-check-label">
                            LGBTQ+-owned
                        </label>
                    </div>
                </div>
                <div className="my-2">Type of Food</div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label className="form-check-label">
                        Asian
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label className="form-check-label">
                        Mediterranean
                    </label>
                </div>
                <button className='mt-2 btn btn-outline-secondary'>Filter</button>
            </div>
        </div>
    );
}