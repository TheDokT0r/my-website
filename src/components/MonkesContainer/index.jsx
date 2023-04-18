import React from 'react';
import '../../index.scss';

export default function index({ monkes }) {
    return (
        <div className='monke-container'>
            <h2 className='monkes-title'>
                I've got nothing else planned here, so here are some images of funny monkes
            </h2>

            <div >
                {monkes.map((monke, index) => (
                    <img
                        className='monke'
                        src={monke}
                        alt={`monke ${index}`}
                    />
                ))}
            </div>
        </div>
    )
}
