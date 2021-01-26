import React from 'react'
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
    if (!song) {
        return (
            <div>please pick a song</div>
        )
    }
    else {
        return (

            <div>
                {song.title}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)