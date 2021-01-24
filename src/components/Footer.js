import React from 'react';
import BoomwriterLogo from '../assets/boomwriter-logo.png'
import FooterLogo from '../assets/footer-logo.png'
import PartnerLogo from '../assets/partner-logo.png'

import { Link } from "react-router-dom";


const Footer = () => {
  return (
<footer>
	<div className="footer-container">
		<div className="row">
			<div className=" text-center">
				<img className="footer-img " src={BoomwriterLogo} alt="Boomwriter logo" />
			</div>
			<div className=" text-center">
				<img className="footer-img-mid" src={FooterLogo} alt="Footer logo" />
			</div>
			<div className="text-center">
				<img className="footer-img" src={PartnerLogo} alt="Google partner logo" />
			</div>
		</div>
		<div className="row">
			<div className="col-12 text-center">
				<p className="mb-5">The Writing Bee is powered by BoomWriter<br/>To find out more visit 
					<Link to="http://boomwriter.com">www.boomwriter.com</Link>
				</p>
			</div>
		</div>				
	</div>
</footer>
  );
};

export default Footer;