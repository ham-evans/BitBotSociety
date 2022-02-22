import React from 'react';
import "./About.css";
import rap from '../images/bitbotRap.mp4'
import pattern from '../images/star2.jpeg';
import pic from '../images/8.png'

export default function About () {
    return (
        <div className="about" id="project" style={{ backgroundImage: `url(${pattern})` }}>
            <div className="about__wrapperVid" dangerouslySetInnerHTML={{
                __html: `<video className="app__backgroundVideo" autoplay muted loop playsinline controls>
                            <source src=${rap} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>`,
                }}
            />
            
            <div className="about__container"  >
                <h1>What is the Benefit of Purchasing a BitBot?!</h1> 
                <h2>Four Tiers of Ownership:</h2>
                <p><span>Tier 1 - Owning 1 BitBot:</span> Grants you a royalty-free license to use, copy, display, & modify the BitBot NFT you own. See terms & conditions for details.</p>
                <p><span>Tier 2 - Owning 5 BitBots: </span>Tier 1 + Grants you exclusive access pass to mint all future official BBS derivative projects including BitBot Society 3D assets. Supply no more than 2,100 qty.</p>
                <p><span>Tier 3 - Owning 10 BitBots:</span> Tiers 1 & 2 + Grants you exclusive access pass to mint all future official BBS derivative projects including BitBot Society 3D assets. Supply no more than 1,100 qty. Eligible for major official BitBot Society giveaways/raffles after mint is complete (Terms & Conditions apply).</p>
                <p><span>Tier 4 - Owning 25 BitBots:</span> Tiers 1, 2, & 3 + Grants you exclusive access pass to mint all future official BBS derivative projects including BitBot Society 3D assets. Supply no more than 500 qty. Eligible for major official BitBot Society giveaways/raffles after mint is complete (Terms & Conditions apply)</p>
                <li>BBS holders #1-300 will have exclusive access to mint official BBS 3D Spacetruck after the original mint is complete.</li>
                <li>BBS holders #301-1,000 will have exclusive access to mint official BBS 3D Skateboard after the original mint is complete.</li>
            </div>
            <div className="about__wrapperImg">
                <img src={pic} alt="BitBot" />
            </div>
        </div>
    );
}
