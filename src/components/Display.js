import React from 'react';
import "./Display.css";
import roadmap from '../images/roadmap.jpeg'

export default function Display () {
    return (
        <div className="display" id="roadmap">
            <h1>Community Roadmap Activations</h1>
            <p className='display__topText'>We care about longevity which is why our long term goal is to lift EVERYONE up through owning a BitBot. We are building massive utility with Music, 3D assets, and the Metaverse. Join us on our journey as we BeepBoop into Web3 and beyond!</p>
            <div className='display__container'>
                <div className='display__text'>
                    <p>Once we hit a target percentage of our entire collection, we will begin working on these goals:</p>
                    <div className='display__list'>
                        <h3 className='percentage'>5%&nbsp;&nbsp;</h3>
                        <li>
                            <span className='strike'>Airdrop Lee Major’s Music NFT to first 100 wallet holders.</span>
                        </li>
                    </div>
                    <div className='display__list'><h3 className='percentage'>10%&nbsp;</h3><li><span className='strike'>Paid for Rarity Sniper; Create BitBot Society LLC; added team members & resources.</span></li></div>
                    <div className='display__list'><h3 className='percentage'>15%&nbsp;</h3>	    <li><span className='strike'>Entered the Metaverse; Purchased a Metaplot in Polka City.</span></li></div>
                    <div className='display__list'><h3 className='percentage'>25%&nbsp;</h3>	    <li>Community Activity & Leader Award (ETH Giveaway for Both) announced in Discord; Launch weekly podcast; Begin launch of Mixtape Vol. 1. Mint price will double from .015 to .03</li></div>
                    <div className='display__list'><h3 className='percentage'>50%&nbsp;</h3>	    <li>Community Activity & Leader Award (ETH Giveaway for Both) announced in Discord; Start ‘BitBotSociety.com’ build; Explore official BBS derivative projects.</li></div>
                    <div className='display__list'><h3 className='percentage'>75%&nbsp;</h3>	    <li>Community Activity & Leader Award (ETH Giveaway for Both) announced in Discord; Exclusive LIMITED EDITION Merch Store gets unlocked for BBS holders ONLY, featuring tees, hoodies and other surprises.</li></div>
                    <div className='display__list'><h3 className='percentage'>100%</h3>	    <li>Celebrate with our community! Giveaway/Raffles; Community Activity & Leader Award (ETH Giveaway for Both) announced in Discord; Tell BBS evolution story; Explore cartoon/comic book series; Release Merch sales to the public; Begin launch all official derivative Projects; Most importantly #BeepBoop</li></div>
                </div>
                <div className='display__image'>
                    <img src={roadmap} alt="bitbot" />
                </div>
            </div>
            <li>Every milestone we achieve, we will host a community concert/party (Details TBA).</li>
            <li>There will be plenty of surprises along the way #BeepBoop :) </li>
        </div>
    );
}