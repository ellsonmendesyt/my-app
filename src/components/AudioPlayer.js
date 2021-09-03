import React from 'react'
import styled from 'styled-components'
const AudioPlayer = ({track,setIsPlaying}) => {
    return (
        <AudioWrapper className="audio-payler">
        <audio controls >
        <source src={track}type="audio/ogg"/>
        <source src={track} type="audio/mpeg"/>
        Your browser does not support the audio element.
        </audio>
    </AudioWrapper>
    )
}

const AudioWrapper = styled.div`
audio{

    &::-webkit-media-controls-enclosure {
    border-radius: 5px;
    background-color: #2980b9;
    }
}
`
export default AudioPlayer
