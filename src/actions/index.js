// export const selectSong = song => {
//     return {
//         type: 'SONG_SELECTED',
//         payload: song
//     }
// }

export const selectSong = (selectedSong) => {
    return {
        type: 'SELECTED_SONG',
        payload: selectedSong
    }
}