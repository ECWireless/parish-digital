import React from 'react'

export default function W4() {
    return (
        <div className="w4">
            <h2 className="w4__heading">Marketing Video</h2>
            <div className="w4__line" />
            <p className="w4__paragraph-1">At North Catholic High School, tradition matters</p>

            <iframe
                src="https://player.vimeo.com/video/128684206"
                frameborder="0"
                allow="autoplay; fullscreen" allowfullscreen
                className="w4__video" title="Featured Video"></iframe>
        </div>
    )
}
