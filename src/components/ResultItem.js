import React from 'react';

export function ResultItem(props) {
    return (
        <div class="d-flex flex-row m-2 result-container">
            <a href="">
                <img src="/pics/food_pic.jpg" class="results-image" alt="company food image"></img>
            </a>
            <div class="row">
                <div class="col mx-3">
                    <a class="company-heading mb-0 mt-1" href="">Katsu Burger</a>
                    <p class="text-muted address-text">12700 SE 38th St, Bellevue</p>
                    <p>Come here for some delicious Japanese fusion burgers!</p>
                </div>
            </div>
        </div>
    );
}