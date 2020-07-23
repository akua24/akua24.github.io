import React from "react";
import afro from '../SEG/afro.jpg'
import coloring from '../SEG/coloring.jpg'
import haircut from '../SEG/haircut.jpg'
import straight from '../SEG/straight.jpg'
import wash from '../SEG/wash.jpg'
import styling from '../SEG/styling.jpg'

const Services = () =>{
    return(
        <div className="container">
            <h2 class="text-center">Services Offered</h2>
            <p class="text-center">We are able to deal with different hair types and textures. </p>            
            <table class="table table-primary table-hover">
                <thead class="bg-primary">
                <tr>
                    <th>Service</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody class="table-light">
                <tr>
                    <td>Hair Styling</td>
                    <td>Variety of hairstyles provided.<br/> <img alt="styling" src={styling}/><br/><img alt="straight" src={straight}/><br/><img alt="afro" src={afro} height="190px"/></td>
                </tr>
                <tr>
                    <td>Cutting/Trim</td>
                    <td>We cut hair to any requested length.<br/><img alt="haircut" src={haircut}/></td>
                </tr>
                <tr>
                    <td>Wash and Blow Dry</td>
                    <td>Washing and blow drying services available.<br/><img src={wash}/><img src="https://img.icons8.com/ios/50/000000/hair-dryer.png"/></td>
                </tr>
                <tr>
                    <td>Coloring</td>
                    <td>We offer bleaching services, coloring, toning, etc.<br/><img src={coloring}/></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Services