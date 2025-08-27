/* HOW TO ADD SONGS
  - Put your files in /assets (mp3 + cover image)
  - Add an object below with:
    id: unique string,
    title: display name,
    cover: 'assets/cover-file.jpg',
    audio: 'assets/song-file.mp3',
    duration: 'm:ss' (shown in playlist),
    lyrics: {
      // EITHER simple text (no timestamp highlighting)
      text: `Line 1
Line 2
Line 3`,
      // OR timestamped lines (seconds + text) for highlighting
      timed: [
        { t: 0,   line: "First line" },
        { t: 5.2, line: "Second line" },
        { t: 10,  line: "Third line" }
      ]
    }
  }
*/

const SONGS = [
  {
    id: "song1",
    title: "Sample Song",
    cover: "assets/unitytut-birdbody.png",
    audio: "assets/potions2.mp3",
    duration: "3:42",
    lyrics: {
      timed: [
        { t: 0, line: "This is the first line" },
        { t: 6, line: "And here comes the second" },
        { t: 13, line: "Third line of the chorus" },
        { t: 20, line: "Keep singing along" }
      ]
      // Or use: text: `...` (if you don’t want timestamps)
    }
  },
  // Add more songs here…
];
