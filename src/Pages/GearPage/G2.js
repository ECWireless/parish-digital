import React from 'react'

export default function G2() {
    return (
        <div className="g2">
            <h2 className="g2__heading">Cameras</h2>
            <div className="g2__line" />
            <p className="g2__paragraph-1">Canon C300 Mark II (x2), Canon 1DX Mark II, Canon 5D Mark IV,</p>
            <p className="g2__paragraph-2">Insta360 Pro Spherical VR 8K Camera, Canon XF100 (x2),</p>
            <p className="g2__paragraph-3">DJI Mavic Pro 2 Drone, Panasonic GH4 (x2)</p>

            <div className="g2__photo-container">
                <div className="g2__pattern" />
                <div className="g2__photo" />
                <div className="g2__bar" />
                <div className="g2__line-bottom" />
            </div>
        </div>
    )
}
