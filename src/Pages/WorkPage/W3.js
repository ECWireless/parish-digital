import React from 'react'

export default function W3() {
    return (
        <div className="w3">
            <h2 className="w3__heading">Corporate Video</h2>
            <div className="w3__line" />
            <p className="w3__paragraph-1">Why Metz Lewis is the firm for you</p>

            <iframe
                src="https://player.vimeo.com/video/320622734"
                frameborder="0"
                allow="autoplay; fullscreen" allowfullscreen
                className="w3__video" title="Featured Video"></iframe>
        </div>
    )
}
