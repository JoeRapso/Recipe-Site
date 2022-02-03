import React, {useContext} from "react";
import {Context} from "../Context"


function DownloadPage(){
    const {recInBook, removeRecipe} = useContext(Context)

    const items = recInBook.map(item =>(
        <li class="list-group-item d-flex justify-content-between align-items-center">
          {item.name}
        <button type="button" class="btn btn-danger btn-sm rounded-pill badge" onClick={() => removeRecipe(item.name)}>Remove</button>
      </li>
  ))
    
    function download(){
        
        let opt = {
            filename: "recipes"
        }
        const pdfEl = recInBook.map(element =>(
            `<h1 style="margin-bottom:30px;">${element.name}</h1>` +
            `<h4 style="padding-bottom:10px">Ingredients</h4>` +
            `<p>${element.ingredients.join('. ')}.</p> ` +
            `<h4 style="padding-bottom:10px">Instructions</h4>` +
            `<p>${element.instructions.join('<hr style="color: white;margin-bottom:5px;"/>')}</p> <hr style="line-height: 8px"/>`
        )).join('')
        window.html2pdf().set(opt).from(pdfEl, "string").save();

    }
    console.log(recInBook)

    return(
        <div>
            <ul class="list-group">
                {items}
            </ul>
            <button onClick={() => download()}>hjhjh</button>
        </div>
    )
}

export default DownloadPage