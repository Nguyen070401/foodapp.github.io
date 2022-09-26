import React from 'react';
import '../styles/style.css';
import demonstration from  '../assets/demonstration-group.png'
// import image1 from  '../assets/image-1.png'
// import image2 from  '../assets/image-2.png'
// import image from  '../assets/image-1.png'

const Slider = () => {
  return (
    <>
    <div className="introduce" id="introduce">
    <h3>Food App</h3>
    <h2>Why stay hungry when
        you can order from Bella Onojie</h2>
    <h4>Download the bella onoje’s food app now on</h4>
    <div className="link-group">
        <a href="https://play.google.com/store?hl=pt_BR&gl=US" target="_blank" className="playstore">Playstore</a>
        <a href="https://www.apple.com/br/app-store/" target="_blank" className="appstore">App Store</a>
    </div>
    </div>

    <div className="demonstration">
        <img src={demonstration} alt="Demonstração" draggable="false"/>
    </div>

    <hr />

    <div className="title" id="steps">
        <h1>How the app works</h1>
    </div>

    <div className="steps">
        <div className="row">
                  <div className="column">
                <img src="https://i.ibb.co/5hx5JjD/image-1.png" alt="1"/>
            </div>
            <div className="column">
                <h3>Create an account</h3>
                <h2>Create/login to an existing account to get started</h2>
                <h4>An account is created with your email and a desired password</h4>
            </div>
        </div>

        <div className="row">
        <div className="column">
            <h3>Explore varieties</h3>
            <h2>Shop for your favorites meal as e dey hot.</h2>
            <h4>Shop for your favorite meals or drinks and enjoy while doing it.</h4>
        </div>
        <div className="column">
            <img src="https://i.ibb.co/JcTLdXx/image-2.png" alt="1"/>
        </div>
        </div>

        <div className="row">
            <div class="column">
          <img src="https://i.ibb.co/RBBRr2z/image-3.png" alt="1"/>
        </div>
        <div className="column">
            <h3>Checkout</h3>
            <h2>When you done check out and get it delivered.</h2>
            <h4>When you done check out and get it  delivered with ease.</h4>
        </div>
        </div>


    </div>

    <div className="download">
        <h2>Download the app now</h2>
        <h4>Available on your favorite store. Start your premium experience now</h4>
        <div className="link-group">
            <a href="#" className="playstore"> Playstore</a>
            <a href="#" className="appstore"> App store</a>
        </div>
    </div>
</>

  );
};

export default Slider;
