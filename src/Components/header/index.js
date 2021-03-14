import React, { useState } from 'react';
import { Colxx } from '../../customBootstrap'
import { Row, Button } from 'reactstrap';
import LogoHeader from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
	const[responsiveMenu, setResponsiveMenu] = useState(false);

	const handleHamburger = () => {
		console.log('handleHamburger called')
			setResponsiveMenu(!responsiveMenu);
		let headerEl = document.getElementById('batHeader');
		if(!responsiveMenu) {
			headerEl.classList.add('no-absolute');	
		} else {
			headerEl.classList.remove('no-absolute');
		}
	}

  	return (
		<div className="header">
			<Row className="row">
				<Colxx xs="6" sm="6" md="6" lg="4" xl="4">
				<div className="logo-wrapper" >
					<img
						src={LogoHeader}
						alt="logo-header"
						className="logo"
					/>
				</div>				
				</Colxx>
				<Colxx xs="6" sm="6" md="6" lg="8" xl="8">
					<div className="responsive-menu" id="batHeader">	
					{
						!responsiveMenu ?
						<div>
							<FontAwesomeIcon
								icon={faBars}
								onClick={handleHamburger} 
								style={{cursor: 'pointer'}}
								className="ham-burger"
							/>
						</div>
						:
						<div>
							<FontAwesomeIcon
								icon={faBars}
								onClick={handleHamburger} 
								style={{cursor: 'pointer'}}
								className="ham-burger"
							/>
						</div>
					}
					</div>
					<div className="navigation-container">
						<div className="navigation-items">
							Ground-Truth Data
						</div>
						<div className="navigation-items">
							How It Works
						</div>
						<div className="navigation-items">
							Fee Structure
						</div>
						<div className="navigation-items">
							Example Deliverables
						</div>
						<div className="navigation-items">
							Submission Portal
						</div>
						<div className="navigation-items">
							Contact Us
						</div>
						<Button 
							size="sm"
							className="header-btn"
						>
							Sign in
						</Button>
					</div>
				</Colxx>
				{
					responsiveMenu &&
					<div className= "responsive-Menu-wrapper">
						<div className="responsive-Menu">
							<div className="responsive-Menu-list">Ground-Truth Data</div>
							<div className="responsive-Menu-list">How It Works</div>
							<div className="responsive-Menu-list" >Fee Structure</div>
							<div className="responsive-Menu-list">Example Deliverables</div>
							<div className="responsive-Menu-list">Submission Portal</div>
							<div className="responsive-Menu-list">Contact Us</div>
							<Button size="sm" className="header-btn"> Sign in </Button>
						</div>
					</div>
				}
			</Row>
		</div>
  	);
}

export default Header;

