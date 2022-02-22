import React from 'react';
import "./Team.css";
import a from '../images/teamImages/1.png';
import b from '../images/teamImages/2.png';
import c from '../images/teamImages/3.png';
import d from '../images/teamImages/4.png';
import e from '../images/teamImages/5.png';
import f from '../images/teamImages/6.png';
import g from '../images/teamImages/7.png';
import h from '../images/teamImages/8.png';
import i from '../images/teamImages/9.png';
import j from '../images/teamImages/10.png';
import k from '../images/teamImages/11.png';
import l from '../images/teamImages/12.png';
import m from '../images/teamImages/13.png';
import n from '../images/teamImages/14.png';
import o from '../images/teamImages/15.png';
import p from '../images/teamImages/16.png';

export default function Team () {
    return (
        <div className="team" id="team">
            <div className="team__container">
                <div className='team__text'>
                    <h1>THE TEAM</h1>
                    <p>BitBot Society was created to be an example of whats possible when a dedicated team works together for a common cause. What started out as a few strangers hanging out in Twitter Spaces has grown into an amazing Community support team focused on providing massive value and utility to all BitBot NFT holders.</p>
                    <h3>PR/Support</h3>
                    <p><a href="https://twitter.com/AckerlandJay" target="_blank" rel="noopener noreferrer">JAY</a>; <a href="https://twitter.com/WesleyETH" target="_blank" rel="noopener noreferrer">WES</a></p>
                    <h3>Support Bots</h3>
                    <p><a href="https://twitter.com/TripVoxel" target="_blank" rel="noopener noreferrer">TRIP</a>; <a href="https://twitter.com/Violetskysart" target="_blank" rel="noopener noreferrer">VIOLET</a>; <a href="https://twitter.com/broadwayallday" target="_blank" rel="noopener noreferrer">BROADWAY</a>; <a href="https://twitter.com/cartoons_mad" target="_blank" rel="noopener noreferrer">EMILY</a>; <a href="https://twitter.com/dezknoph" target="_blank" rel="noopener noreferrer">DEZ</a>;<br /> <a href="https://twitter.com/VinnyETH_" target="_blank" rel="noopener noreferrer">VINNY</a>; <a href="https://twitter.com/LeeMajorKid" target="_blank" rel="noopener noreferrer">LEE</a>; <a href="https://twitter.com/SLACTHEDON" target="_blank" rel="noopener noreferrer">SLAC</a>; <a href="https://twitter.com/DigitalAnalog00" target="_blank" rel="noopener noreferrer">CHRIS</a>; <a href="https://twitter.com/Nitric__" target="_blank" rel="noopener noreferrer">NICK</a>; <a href="https://twitter.com/Funee_Munee" target="_blank" rel="noopener noreferrer">STEVE</a>; <a href="https://twitter.com/badkarma617" target="_blank" rel="noopener noreferrer">BRUCE</a></p>
                </div>
                <div className='team__images'>
                    <img src={a} alt="BitBot" className='team__imgIndividual' />
                    <img src={b} alt="BitBot" className='team__imgIndividual' />
                    <img src={c} alt="BitBot" className='team__imgIndividual' />
                    <img src={d} alt="BitBot" className='team__imgIndividual' />
                    <img src={e} alt="BitBot" className='team__imgIndividual' />
                    <img src={f} alt="BitBot" className='team__imgIndividual' />
                    <img src={g} alt="BitBot" className='team__imgIndividual' />
                    <img src={h} alt="BitBot" className='team__imgIndividual' />
                    <img src={i} alt="BitBot" className='team__imgIndividual' />
                    <img src={j} alt="BitBot" className='team__imgIndividual' />
                    <img src={k} alt="BitBot" className='team__imgIndividual' />
                    <img src={l} alt="BitBot" className='team__imgIndividual' />
                    <img src={m} alt="BitBot" className='team__imgIndividual' />
                    <img src={n} alt="BitBot" className='team__imgIndividual' />
                    <img src={o} alt="BitBot" className='team__imgIndividual' />
                    <img src={p} alt="BitBot" className='team__imgIndividual' />
                </div>
            </div>
            <h4>VERIFIED SMART CONTRACT ADDRESS: <a href='https://etherscan.io/address/0x68cf439ba5d2897524091ef81cb0a3d1f56e5500' target="_blank" rel="noopener noreferrer">0x68cf439BA5D2897524091Ef81Cb0A3D1F56E5500</a></h4>
        </div>
    
    );
}
