import React from 'react';
import IconRead from '../../assets/icon/read.png'
import IconWrite from '../../assets/icon/write.png'
import IconShare from '../../assets/icon/share.png'
import IconVote from '../../assets/icon/vote.png'
import IconRepeat from '../../assets/icon/repeat.png'
import bwLogo from '../../assets/bw-logo.png'


const WorksHeaderSection = () => {
  return (
<section className="worksHeader">
	<div className="container mt-4 mb-4">
		<div className="heading">
        <div className="mx-auto text-center">
				<h2 className="heading ">The Writing Bee is powered by <img src={bwLogo} alt="Bw splat" /></h2>
				<p className="lead">The Writing Bee employs BoomWriter’s unique content generation platform that allows students to compete and collaborate online as they:</p>
			</div>
		</div>
	</div>

	<div className="container works-header-icon-container mb-4 mt-4">
		<div className="works-header-icon-container">
			<div >
				<div className="worksBullet text-center animated bounceInDown">
					<img className="worksBulletIcon  " src={IconRead} alt="Works bullet read" />
					<h3 className="mb-4 worksBulletText"><span className="h3"><strong>Read/View</strong></span><br/>The prompt</h3>
				</div>
			</div>
			<div >
				<div className="worksBullet text-center animated bounceInDown">
					<img className="worksBulletIcon " src={IconWrite} alt="Works bullet write" />
					<h3 className="mb-4 worksBulletText"><span className="h3"><strong>Write</strong></span><br/>An entry</h3>
				</div>
			</div>			
			<div >
				<div className="worksBullet text-center animated bounceInDown">
					<img className="worksBulletIcon  " src={IconShare} alt="Works bullet share" />
					<h3 className="mb-4 worksBulletText"><span className="h3"><strong>Share</strong></span><br/>With peers</h3>
				</div>
			</div>								
			<div >
				<div className="worksBullet text-center animated bounceInDown">
					<img className="worksBulletIcon" src={IconVote} alt="Works bullet vote" />
					<h3 className="mb-4 worksBulletText"><span className="h3"><strong>Vote</strong></span><br/>For the favorite</h3>
				</div>
			</div>
			<div >
				<div className="worksBullet text-center animated bounceInDown">
					<img className="worksBulletIcon " src={IconRepeat} alt="Works bullet repeat" />
					<h3 className="mb-4 worksBulletText"><span className="h3"><strong>Repeat</strong></span><br/>Until complete</h3>
				</div>
			</div>
		</div>
	</div>
</section>
  );
};

export default WorksHeaderSection;