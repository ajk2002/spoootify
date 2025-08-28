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
    title: "POTIONS",
    cover: "assets/POTIONS/unitytut-birdbody.png",
    audio: "assets/POTIONS/potions2.mp3",
    duration: "3:42",
    lyrics: {
      timed: [
        { t: 24, line: "Antha midukki anga irukka" },
        { t: 28, line: "Ennoda pondatti maari theriyudha" },
        { t: 32, line: "Moonku suriyan aagave mudiyuma" },
        { t: 35, line: "Nee una lightu en mela vechiduva" },
        { t: 40, line: "Thilangi, Thilangi" },
        { t: 44, line: "Thiri pole mole nee thilangi" },
        { t: 48, line: "Thilangi, Thilangi" },
        { t: 52, line: "Thiri pole mole" },
        { t: 55, line: "It's like I drank a potion and its keeping me awake " },
        { t: 59, line: "And it makes me think of you every night and day" },
        { t: 62 , line: "And now that I had a taste" },
        { t: 67, line: "It can't go to waste" },
        { t: 71, line: "So please come on over" },
        { t: 75, line: "I need you closer" },
        { t: 79, line: "My hand in your hand" },
        { t: 83, line: "And your head on my shoulder" }
      ]
      // Or use: text: `...` (if you don’t want timestamps)
    }
  },
  // Add more songs here…
];
