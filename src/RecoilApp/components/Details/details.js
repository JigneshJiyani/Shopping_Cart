import React, { Suspense } from "react";
import Card from '../Card/card'


const Details = () => {
    return(
        <div className="container">
            <div className="card">
                <Suspense fallback={<h3>Loading Details....</h3>}>
                    <Card/>
                </Suspense>
            </div>
        </div>
    )
}

export default Details;