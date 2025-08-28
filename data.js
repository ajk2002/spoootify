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
    cover: "assets/POTIONS/IMG_6415.jpg",
    audio: "assets/POTIONS/potionscurrent.wav",
    duration: "3:22",
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
        { t: 83, line: "And your head on my shoulder" },
        { t: 89, line: "Thought about it for so so long" },
        { t: 93, line: "Even tho I knew it was so wrong" },
        { t: 97, line: "When I finally got over it" },
        { t: 100, line: "She showed up in front of me" },
        { t: 104, line: "Black top with the melanin" },
        { t: 106, line: "Lookin like she was heaven sent" },
        { t: 109, line: "Put my hand out and she took it" },
        { t: 111, line: "Got my phone out and I booked it" },
        { t: 113, line: "Fuck wastin time no fussin" },
        { t: 115, line: "We don't care if were rushin" },
        { t: 119, line: "It's like I drank a potion and its keeping me awake " },
        { t: 123, line: "And it makes me think of you every night and day" },
        { t: 126 , line: "And now that I had a taste" },
        { t: 131, line: "It can't go to waste" },
        { t: 137, line: "One moment's all we need" },
        { t: 140, line: "You get out the car, let me get out my keys" },
        { t: 144, line: "Dream turn reality. you know what I mean" },
        { t: 149, line: "Look into your eyes, it's all I can see" },
        { t: 153, line: "Im lost, Baby show me the way (x3)" },
        { t: 168, line: "It's like I drank a potion and its keeping me awake " },
        { t: 172, line: "And it makes me think of you every night and day" },
        { t: 175 , line: "And now that I had a taste" },
        { t: 180, line: "It can't go to waste" },
        { t: 184, line: "So please come on over" },
        { t: 188, line: "I need you closer" },
        { t: 192, line: "My hand in your hand" },
        { t: 196, line: "And your head on my shoulder" }
      ]
      // Or use: text: `...` (if you don’t want timestamps)
    }
  },
  {
    id: "song2",
    title: "FREE LUNCH FREESTYLE (azhagu)",
    cover: "assets/freeLunch/IMG_6412.jpg",
    audio: "assets/freeLunch/freeLunchfreestyle(azhagu).wav", 
    duration: "1:13",
    lyrics: {
      timed: [
        { t: 1, line: "Ooooooooh " },
        { t: 3, line: "chellakuttyyyyyyy yeahhh " },
        { t: 8, line: "this ones for youuuu, this ones for youuuu" },
        { t: 13, line: "lets go lets go lets go lets go " },
        { t: 14, line: "aval azhaga irukken, njan oru midukken " },
        { t: 16, line: "perfect combo, one in a million " },
        { t: 18, line: "baby come on, show me your brilliance " },
        { t: 20, line: "you could be aunt viviaaaaaaaaaaan, yeah" },
        { t: 24, line: "and i could be ur uncle phil" },
        { t: 26, line: "married in 3 years, yh that’s the deal" },
        { t: 28 , line: "comin for ur neck but it ain't for the kill nah" },
        { t: 30, line: "imma tie it up with a thaali, then have a thali" },
        { t: 32.5, line: "no knife and fork (uh), no parishkari " },
        { t: 34, line: "come sit on me baby naarkaali" },
        { t: 36, line: "empty me out yh get me kaali" },
        { t: 38, line: "wanna see you in the softest saree" },
        { t: 40, line: "you in a blouse it gets me harny" },
        { t: 42, line: "ha ha ha harnyyyy" },
        { t: 45, line: "yh she sexy, fit" },
        { t: 47, line: "yh she sexy,fit" },
        { t: 48, line: "like a bag of takis" },
        { t: 50, line: "she know she the ooh (x3)" },
        { t: 56, line: "like a bag of takis" },
        { t: 57.5, line: "she know she the ooh" },
        { t: 60, line: "oohoohoohooh (ayy) oohoohoohooh " },
        { t: 65, line: "SHITT" },
        
      ]
      // Or use: text: `...` (if you don’t want timestamps)
    }
  }
];
