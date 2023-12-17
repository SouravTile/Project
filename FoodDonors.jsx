import React from 'react';
import '../src/FoodDonors.css';
// import { Carousel } from 'react-bootstrap';
import foodDonorsImage from '../src/images1/food.png';
import images1 from '../src/images1/tcs.png';
import images2 from '../src/images1/infosys.png';
import images3 from '../src/images1/landt.png';
import images4 from '../src/images1/adani.png';
import images5 from '../src/images1/dlf.png';
import images6 from '../src/images1/ibm.png';
import images7 from '../src/images1/deolite.png';
import images8 from '../src/images1/opera.png';
import images9 from '../src/images1/cog.png';
import images10 from '../src/images1/wipro.png';
import images11 from '../src/images1/ya.png';
import images12 from '../src/images1/google.png';
// import images13 from '../src/images1/eb.png';
import images14 from '../src/images1/fp.png';
import images15 from '../src/images1/am.png';
import images16 from '../src/images1/hp.png';
import images17 from '../src/images1/pp1.png';
import images18 from '../src/images1/pp2.png';
import images19 from '../src/images1/pp4.png';
import images20 from '../src/images1/pp3.png';

const FoodDonors = () => {

  return (
    <div className="container d-flex flex-column align-items-center">
      <img src={foodDonorsImage} alt=" " style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
      <h1>Become a Food Donor</h1>
      <p>As a Waste No Food volunteer, you can help us expand by signing up new food donors and charities, or you can help deliver thousands of meals to charities serving the hungry. <br/> 
      Sign up on our app to become a volunteer food runner. Contact us to receive a kit you can use to build a food recovery program in your community.<br/> 
      
      The Importance of Donating for Food and Helping Those in Need
      Food donation is a crucial part of helping vulnerable communities and needy people in a world where hunger and food insecurity still exist.<br/> 
      Giving people their basic needs extends beyond just satisfying their bellies; 
      it sustains lives, encourages optimism, and has a positive effect on society.<br/> 
      Food donation is a crucial part of helping vulnerable communities and needy people in a world where hunger and food insecurity still exist.<br/> 
      Giving people their basic needs extends beyond just satisfying their bellies; it sustains lives, encourages optimism, and has a positive effect on society. The Narayan Seva Sansthan recognizes the crucial role that food contributions play in resolving the urgent problem of hunger and seeks to significantly improve the lives of people who are experiencing food scarcity.
      </p>

      <img src={images17} alt="" width='640' />
      <h3>The Significance of Donating for Food</h3>
      <p>Donating food holds profound importance in several key ways:<br/>  

      <h5>Nourishing Lives:</h5> Food donations serve as a lifeline, providing sustenance to those who struggle to access nutritious meals.<br/>

      <h5>Combating Hunger:</h5> They contribute to the ongoing battle against hunger and malnutrition, making a tangible difference in the lives of individuals facing food insecurity.<br/>

      <h5>Promoting Well-being:</h5> Access to regular meals is crucial for maintaining good health and well-being, particularly for vulnerable populations.<br/>

      <h5>Fostering Solidarity:</h5>The act of donating food fosters a sense of community and solidarity, encouraging collective efforts to address food scarcity<br/> and support those in need.
      </p>
      <p></p>
      <img src={images18} alt="" />
      <h5>Donation of regular meals to the needy…</h5>
      <p>Around the globe World Hunger Day is marked on May 28 and the stark reality is that for one-fourth of Indians, from the poor, underprivileged, elderly and homeless sections of society, every day is a hunger day with no means for adequate food or nutrition.<br/>
      Hunger leads to malnutrition which in turn leaves people susceptible to diseases. The situation is particularly poignant in respect of children considering the fact that half of all kids younger than three years old in India weigh too little for their age.</p>
      
      <img src={images19} alt="" />
      <h5>Go ahead and donate food in your city…</h5>
      <p>Many of us are pricked by the contrast between our own easy spending and the widespread deprivation around us, but have no idea how to help. You can move from quiet guilt to effective action by helping to combat hunger among deserving people.<br/>
      Either on your own or by forming a team of like-minded people you can arrange to cook simple meals and distribute them to the needy in your city.</p>
      
      <img src={images20} alt="" width='640'/>  
      
      <p></p>
      
      <h2>Our Donor Partners</h2>
      <div className="scroll-container">
        <div className="scrolling-row">
          {[images1, images2, images3, images4, images5, images6, images7, images8, images9, images10, images11, images15, images14, images16, images12].map((partner, index) => (
            <img key={index} src={partner} alt={`Donor Partner ${index + 1}`} height='100' width='300' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDonors;
