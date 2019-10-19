import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component {
	  constructor(props){
	    super(props)
	    this.state = {
	        itemDeatail:[]

	    }
  }

  

  componentDidMount() {
	    const APP_ID = 'f75874ca';
	    const APP_KEY = 'eda1384922444fcaa9caf56e9921ea96';
	    const exampleRequ =`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=16`;
	    axios.get(`${exampleRequ}`).then(response => this.setState({
	          itemDeatail:response.data.hits
	    }))

  }

	render() {
		console.log(this.state.itemDeatail);
		return (
			<div className="recipe-detail">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="recipe-big-thum">
								<h3>Recipe-Heading</h3>
								<img src="https://placehold.it/500x600" alt=""/>
							</div>
						</div>
						<div className="col-md-6">
							<div className="recipe-detail-content">
								<h4>Required</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum consequatur facere explicabo possimus distinctio nihil dolorem neque quas saepe omnis.</p>
								<ul>
									<li>Lorem ipsum dolor sit.</li>
									<li>Lorem ipsum dolor sit.</li>
									<li>Lorem ipsum dolor sit.</li>
									<li>Lorem ipsum dolor sit.</li>
									<li>Lorem ipsum dolor sit.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Details;