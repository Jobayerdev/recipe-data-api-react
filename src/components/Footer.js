import React, { Component } from 'react';
import axios from 'axios'


 class Footer extends Component {
 	constructor(props){
 		super(props)
 		this.state = {
 			photos : []
 		}
 	}
 	 componentDidMount() {
	    const APP_ID = 'f75874ca';
	    const APP_KEY = 'eda1384922444fcaa9caf56e9921ea96';
	    const exampleRequ =`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`;
	    axios.get(`${exampleRequ}`).then(response => this.setState({
	          photos:response.data.hits
	    }))

  }






	render() {
		return (
			
				<footer className="footer">
					<div className="container">
						<div className="row">
							<div className="col-md-3">
								<div className="footer-item">
									<h4>About US</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem fugit libero a, possimus quidem placeat, error nemo, accusamus voluptatum ullam voluptatem impedit sed ab vero sequi totam perspiciatis odit doloribus!</p>
								</div>
							</div>
							<div className="col-md-3">
								<div className="footer-item">
									<h4>Importent Links</h4>
									<ul>
										<li><a href="/">Home</a></li>
										<li><a href="/">About</a></li>
										<li><a href="/">Sorting</a></li>
										<li><a href="/">Social</a></li>
										<li><a href="/">API</a></li>
										<li><a href="/">Next</a></li>
									</ul>
								</div>
							</div>	
							<div className="col-md-3">
								<div className="footer-item">
									<h4>Services</h4>
									<ul>
										<li><a href="/">Home</a></li>
										<li><a href="/">About</a></li>
										<li><a href="/">Sorting</a></li>
										<li><a href="/">Social</a></li>
										<li><a href="/">API</a></li>
										<li><a href="/">Next</a></li>
									</ul>
								</div>
							</div>
							<div className="col-md-3">
								<div className="footer-item">
										<h4>Latest Instrga</h4>
										<div className="instrgram-picture">
										<ul>
											{this.state.photos.map((photo,i) => (
												<li key={i}><a href="/"><img src={photo.recipe.image} alt=""/></a></li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			
		);
	}
}

export default Footer;
