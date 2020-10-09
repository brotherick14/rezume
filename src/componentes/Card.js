import React from 'react';

function Card(props){
    return(
    <div className="single-portfolio col-sm-4 all mockup">
        <div className="relative">
            <div className="thumb">
                <div className="overlay overlay-bg"></div>
                <img className="image img-fluid" src={props.image} alt="" />
            </div>
            <a href={props.image} className="img-pop-up">  
                <div className="middle">
                    <div className="text align-self-center d-flex"><img src="images/preview.png" alt=""/></div>
                </div>
            </a>                                  
        </div>
        <div className="p-inner">
            <h4>{props.title}</h4>
            <div className="cat">{props.subtitle}</div>
        </div>                                         
    </div>
    );
}

export default Card;