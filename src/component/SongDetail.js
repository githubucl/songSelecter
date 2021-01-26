// import React from 'react'
// import { connect } from "react-redux";

// const SongDetail = ({ song }) => {
//     if (!song) {
//         return (
//             <div>please pick a song</div>
//         )
//     }
//     else {
//         return (

//             <div>
//                 {song.title}
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return { song: state.selectedSong }
// }

// export default connect(mapStateToProps)(SongDetail)

import React from "react"
import { connect } from "react-redux"
const SongDetail = ({ song }) => {
    if (!song) {
        return null
    }
    else {
        return (
            <div >
                {song.duration}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        song: state.selectedSongReducer
    }
}

export default connect(mapStateToProps)(SongDetail)