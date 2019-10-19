import React, { Component } from 'react';


 class Header extends Component {
	render() {
		return (
			<header className="header">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<h1 className="title">RendgoNes</h1>
							</div>
							<div className="col-md-6 text-right">
								<input type="text"/>
								<input type="submit"/>
							</div>
						</div>
					</div>
				</header>
		)
	}
}
export default Header;

