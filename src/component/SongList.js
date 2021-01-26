// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { selectSong } from "../actions/index";
// class SongList extends Component {
//     renderList() {
//         return this.props.songs.map(song => {
//             return (
//                 <div className="item" key={song.title}>
//                     <div className="right floated content">
//                         <button
//                             onClick={() => { this.props.selectSong(song) }}
//                             className="ui button primary">
//                             Select
//                         </button>
//                     </div>
//                     <div className="content">
//                         {song.title}
//                     </div>
//                 </div>
//             )

//         })
//     }
//     render() {
//         return (
//             <div className="divided list ui">
//                 {this.renderList()}
//             </div>
//         )
//     }

// }

// const mapStateToProps = (state) => {
//     console.log(state);
//     return { songs: state.songs }
// }
// export default connect(mapStateToProps, { selectSong })(SongList)

import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

const SongList = (props) => {
    return props.songs.map(song => {
        return (

            <div key={song.title}>
                {song.title}
                <button

                    onClick={() => {
                        props.selectSong(song)
                    }}
                >click me</button>
            </div>


        )
    })

}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        songs: state.songsReducer
    }
}
export default connect(mapStateToProps, { selectSong })(SongList)