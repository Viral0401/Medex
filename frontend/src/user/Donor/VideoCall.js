import React from 'react'

const VideoCall = () => {
  return (
    <div>

        <p className="text-4xl px-10 pb-10 pt-5">Meeting With Donor</p>

        <iframe
        src="https://whereby.com/video-chat-brocode"
        allow="camera; microphone; fullscreen; speaker; display-capture"
        className="w-full h-[86vh] ease-in-out"
        >
        </iframe>

    </div>
  )
}

export default VideoCall