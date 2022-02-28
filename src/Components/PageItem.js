import { Link } from "react-router-dom";
import { Data } from "../data";

function PageItem(){

    const items = Data.map(item =>(
        <div class="col">
            <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#55595c"/>
                <image href={item.img} height="225" width="100%" preserveAspectRatio="none"/>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">{item.country}</text>
                </svg>

                <div class="card-body">
                <p class="card-text">{item.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group col-6 mx-auto">
                     <Link  to={`/${item.country}`} class="btn btn-sm btn-outline-secondary">See More</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    ))
    return(
        <div>
            <section class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <p class="lead text-muted">Below are recipes from various countries. Click on one and explore!</p>
                    </div>
                </div>
            </section>
            <div class="album py-5 bg-light">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {items}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageItem