import React from 'react';

import AuthorImg1 from '../../assets/author/author1.jpg'
import AuthorImg2 from '../../assets/author/author2.jpg'
import AuthorImg3 from '../../assets/author/author3.png'
import AuthorImg4 from '../../assets/author/author4.jpeg'

const PastWritingBee = () => {
  return (
    <div className="past-writing-bee mb-4" style={{color: '#f2f2f2'}}>
      <div className="container"> 
        <div className="heading"> Past Writing Bees </div>
        <div className="img-cards"> 
          
          <div className="card">
            <img src={AuthorImg1} alt="Avatar" className="card-img-top" style={{width: '100%'}} />
            <div className="card-container">
              <div class="archived-author-text text-center">
                <div class="archive-date mb-1 ">Jan 2019 - May 2019</div>
                <div class="archive-title mb-2" >The Power of Spoken Word</div>
                <div class="story-start"> StoryStart by: </div>
                <div class="archive-author mt-1 mb-1"><b>Jamal Joseph</b></div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={AuthorImg2} alt="Avatar" className="card-img-top" style={{width: '100%'}} />
            <div className="card-container">
              <div class="archived-author-text text-center">
                <div class="archive-date mb-1 ">Jan 2019 - May 2019</div>
                <div class="archive-title mb-2" >The Power of Spoken Word</div>
                <div class="story-start"> StoryStart by: </div>
                <div class="archive-author mt-1 mb-1"><b>Mr. John</b></div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={AuthorImg3} alt="Avatar" className="card-img-top" style={{width: '100%'}} />
            <div className="card-container">
              <div class="archived-author-text text-center">
                <div class="archive-date mb-1 ">Jan 2019 - May 2019</div>
                <div class="archive-title mb-2" >The Power of Spoken Word</div>
                <div class="story-start"> StoryStart by: </div>
                <div class="archive-author mt-1 mb-1"><b>Mr. Doe</b></div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={AuthorImg4} alt="Avatar" className="card-img-top" style={{width: '100%'}} />
            <div className="card-container">
              <div class="archived-author-text text-center">
                <div class="archive-date mb-1 ">Jan 2019 - May 2019</div>
                <div class="archive-title mb-2" >The Power of Spoken Word</div>
                <div class="story-start"> StoryStart by: </div>
                <div class="archive-author mt-1 mb-1"><b>Mr. Test</b></div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default PastWritingBee;