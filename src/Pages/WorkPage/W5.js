import React from 'react'

export default function W5() {
    return (
        <div className="w5">
            <h2 className="w5__heading">Industrial Video</h2>
            <div className="w5__line" />
            <p className="w5__paragraph-1">Carmeuse Lime & Stone is making changes for a more sustainable future </p>

            <iframe
                src="https://player.vimeo.com/video/365644402"
                frameborder="0"
                allow="autoplay; fullscreen" allowfullscreen
                className="w5__video" title="Featured Video">
            </iframe>
        </div>
    )
}
