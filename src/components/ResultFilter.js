import React from 'react';

export function ResultFilter(props) {
    return (
        <div class="card shadow-none border">
            <div class="card-body">
                <div class="mb-3"><strong>Filters:</strong></div>
                <div class="my-2">Owner Status:</div>
                <div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                        <label class="form-check-label" for="flexCheckDefault">
                            Female-owned
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                        <label class="form-check-label" for="flexCheckDefault">
                            LGBTQ+-owned
                        </label>
                    </div>
                </div>
                <div class="my-2">Type of Food</div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label class="form-check-label" for="flexCheckDefault">
                        Asian
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label class="form-check-label" for="flexCheckDefault">
                        Mediterranean
                    </label>
                </div>
            </div>
        </div>
    );
}