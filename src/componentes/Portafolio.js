import React, { useState, useEffect } from 'react';
import Card from '../componentes/Card';

const Portafolio = () => {
    const [data,setData] = useState([]);useEffect(() => {
        fetch('http://localhost:3000/portafoliodb')
            .then(response => response.json())
            .then(data => setData(data))
    },[]);

    return (
        <section className="site-section" id="section-portfolio">
		<div className="container">
			<div className="row">
				<div className="section-heading text-center col-md-12">
					<h2>Featured <strong>Portfolio</strong></h2>
				</div>
			</div>
			<div className="filters">
				<ul>
					<li className="active" data-filter="*">All</li>
					<li data-filter=".packaging">Packaging</li>
					<li data-filter=".mockup">Mockup</li>
					<li data-filter=".typography">Typography</li>
					<li data-filter=".photography">Photography</li>
				</ul>
			</div>

			<div className="filters-content">
				<div className="row grid">
					{data.portafolio ? data.portafolio.map(card => (
						<Card title={card.title} image={card.image} subtitle={card.subtitle} />
					)) : <div>cargando</div> }
				</div>
			</div>
		</div>
	</section>
    );
}

export default Portafolio;