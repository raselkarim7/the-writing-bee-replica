import React from 'react';

import IconWinner from '../../assets/icon/winners.png'
import IconWriting from '../../assets/icon/writing.png'


const TimelineSection = () => {
  return (
<section className="timeline-section panel-secondary py-md-4">
	<div className="container">
		<div className="row">
			<div className="col-12 text-center">
				<h2 className="pageTitle mb-4 mt-4">The Writing Bee Timeline</h2>
			</div>
		</div>
		<div className="row">
	       	<div className="col-12 col-md-8 mx-auto mb-5">
	    		<div className="qa-message-list" id="wallmessages">

					<div className="message-item" id="m1">
						<div className="message-inner">
							<div className="qa-message-content">
								<div className="media">
								  <div className="media-left media-middle">
								    <img  src={IconWinner} alt="Writing"  />
								  </div>
								  <div className="media-body">
							  		<div className="handle">December - March 2020 - Qualifying Sessions</div>
                
									  <p className="mt-1">Teachers are welcome to conduct classroom-based qualifying sessions with their students in Grades 4-6.</p>
								  </div>
								</div>
							</div>
						</div>
					</div>

					<div className="message-item" id="m1">
						<div className="message-inner">
							<div className="qa-message-content">
								<div className="media">
								  <div className="media-left media-middle">
								    <img className="mr-3 img-fluid" src={IconWriting} alt="Finals" />
								  </div>
								  <div className="media-body">
							  		<div className="handle">April 2020 - The Finals</div>
									  <p className="mt-1">Qualifying round winners and top vote-getters compete The Writing Finals. All Qualifying session participants are invited to read and cast votes to determine The Writing Bee Champion.</p>
								  </div>
								</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
		</div>			
	</div>
</section>
  );
};

export default TimelineSection;