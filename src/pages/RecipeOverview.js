import React, {useContext, useEffect, useState} from "react";
import Header from "../Components/Header";
import { Data } from "../data";
import {useParams, Outlet, Link} from 'react-router-dom'
import {Context} from "../Context"



function RecipeOverview(){
    const [isDisabled, setDisabled] = useState(false)

    const {favouriteRec, recInBook} = useContext(Context)

    let params = useParams()

    const item = Data.find(
        item => params.country === item.country
        )
    
    function btnDisable(id){
        if (recInBook.some(item => item.name === id) === true){
            return true
        } else return false
    } 

    const items = item.recipes.map(item =>(
        <div class="col">
            <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#55595c"/>
                <image href={item.img} height="225" width="100%" preserveAspectRatio="none"/>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">{item.name}</text>
                </svg>

                <div class="card-body">
                <p class="card-text">{item.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group col-6 mx-auto">
                     <Link  to={`/${params.country}/${item.name}`} class="btn btn-sm btn-outline-secondary">See More</Link>
                    </div>
                    <div class="btn-group col-6 mx-auto">
                        <button disabled={btnDisable(item.name)} style={{marginLeft: "2px"}} type="button" class="btn btn-outline-warning btn-sm" onClick={() => favouriteRec(item)}>Add to Book</button>
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
                        <h1 class="fw-light">{item.country}</h1>
                        <p class="lead text-muted">Some text here about each countries "food style"</p>
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

export default RecipeOverview