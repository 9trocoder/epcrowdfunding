import "./App.css";
import genielogo from "./assets/genielogo.png";
import fistinstallment from "./assets/firstinstall.png";
import shirt from "./assets/shirt.png";
import hood from "./assets/hodd.png";
import ig from "./assets/ig.png";
import x from "./assets/x.png";
import trianglepng from "./assets/triangle.png";
import circlered from "./assets/circle.png";
import shuffle from "./assets/SHUFFLE.png";
import billboard from "./assets/billboard.jpg";
import { useEffect, useRef, useState } from "react";

function App() {
  const tracks = [
    { id: 1, name: "blacksheep", src: "/blacksheep.mp3" },
    { id: 2, name: "dorobucci", src: "/dorobucci.mp3" },
    { id: 3, name: "kana", src: "/kana.mp3" },
  ];

  const [playedSongs, setPlayedSongs] = useState([]);
  const [shuffleCount, setShuffleCount] = useState(0);
  const [remainshuffle, setRemainShuffle] = useState(3);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(tracks[0]);

  const audioRef = useRef(new Audio(currentSong.src));

  // Update audio source when currentSong changes
  useEffect(() => {
    audioRef.current.src = currentSong.src;
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSong]);

  const playMusic = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseMusic = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const shuffleMusic = () => {
    if (shuffleCount < 3) {
      const remainingSongs = tracks.filter(
        (song) => !playedSongs.includes(song.id)
      );
      if (remainingSongs.length === 0) return; // No more songs left to shuffle

      const nextSong =
        remainingSongs[Math.floor(Math.random() * remainingSongs.length)];

      audioRef.current.pause(); // Pause before changing song
      setPlayedSongs([...playedSongs, nextSong.id]);
      setShuffleCount(shuffleCount + 1);
      setRemainShuffle(remainshuffle - 1);
      setCurrentSong(nextSong);
    }
  };
  return (
    <>
      <div className='app'>
        <div className='apptop'>
          <img className='genielogo' src={genielogo} alt='' />
          <p className='thw'>THE WELLWISHERS | SCARFACE REPUBLIC</p>
          <p className='epp'>E.P PROJECT CROWD FUNDING / EARLY RELEASE</p>
          <div className='underline'></div>
        </div>

        <div className='appbottom'>
          <div className='appbottomleft'>
            <img className='instal' src={fistinstallment} alt='' />
            <div className='appbottomleftbottom'>
              <div className='getfbutton'>
                <p className='getftitle'>GET FULL E.P HERE</p>
                <p className='getfpar'>
                  Raffles and Giveaways are inclusive of investment
                </p>
              </div>
              <p className='invst'>
                Invest from <span>#1K</span>,<span>$1</span>,<span>$1</span>,{" "}
                <br />
                Get complete <span>7</span> Tracks <span>(+1)</span> E.P <br />
                Sent to your Email.
              </p>
            </div>
          </div>
          <div className='appbottommiddle'>
            <div className='appbottommidleleft'>
              <div className='themusic'>
                <div className='themusicleft'>
                  <div
                    className='themusicbtns'
                    style={{ backgroundImage: `url(${circlered})` }}
                  >
                    {!isPlaying ? (
                      <button onClick={playMusic}>
                        <img src={trianglepng} alt='' />
                      </button>
                    ) : (
                      ""
                      // <button onClick={pauseMusic}>Pause</button>
                    )}

                    {shuffleCount < 3 && isPlaying && (
                      <button onClick={shuffleMusic}>
                        <img src={shuffle} alt='' />
                      </button>
                    )}
                  </div>
                </div>

                <div className='themusicright'>
                  <img src={billboard} alt='' />
                </div>
              </div>
              <div className='dshuff'>
                <p>
                  Free Shuffles Remain <span>{remainshuffle}</span>
                </p>
              </div>
            </div>

            <div className='underline'></div>
            <div className='cloths'>
              <h1 className='entfr'>
                ENTER FOR <br /> RAFFLES AND GIVEAWAYS
              </h1>
              <div className='meshs'>
                <img className='shirt' src={shirt} alt='' />
                <img src={hood} className='hood' alt='' />
              </div>
            </div>
          </div>
          <div className='appbottomright'>
            <div className='streambuc'>
              <p className='streamtext'>
                Live Stream <br />
                Begins Shortly
              </p>
            </div>
            <div className='socialbtn'>
              <button>
                <img src={ig} alt='' width={40} />
              </button>
              <button>
                <img src={x} alt='' width={40} />
              </button>
            </div>
            <button className='reminds'>
              <p>
                Remind me <br />
                in 2 days
              </p>
            </button>
          </div>
        </div>
      </div>

      <div className='appmobile'>
        <div className='appnav'>
          <img className='logoimg' src={genielogo} alt='' />
          <p className='logotitle'>THE WELLWISHERS | SCARFACE REPUBLIC</p>
          <img className='theinstall' src={fistinstallment} alt='' />
          <p className='theeptitle'>
            E.P PROJECT CROWD FUNDING / EARLY RELEASE
          </p>
          <div className='underlines'></div>
        </div>

        <div className='appmobiledivide'>
          <div className=''>
            <div className='theplaysec'>
              <div className='theplayzone'>
                <div
                  className='thebtnbac'
                  style={{ backgroundImage: `url(${circlered})` }}
                >
                  {!isPlaying ? (
                    <button onClick={playMusic}>
                      <img src={trianglepng} alt='' />
                    </button>
                  ) : (
                    ""
                    // <button onClick={pauseMusic}>Pause</button>
                  )}

                  {shuffleCount < 3 && isPlaying && (
                    <button onClick={shuffleMusic}>
                      <img src={shuffle} alt='' />
                    </button>
                  )}
                </div>
              </div>

              <div className='thebillbo'>
                <img src={billboard} alt='' />
              </div>
            </div>
            <p className='thefreeshu'>
              Free Shuffles Remain <span>{remainshuffle}</span>
            </p>
            <div className='underlines'></div>
            <div className='dgetfu'>
              <button className='getfullbtn'>
                <p className='getfultitle'>GET FULL E.P HERE</p>
                <p className='getfulpar'>
                  Raffles and Giveaways are inclusive of investment
                </p>
              </button>
            </div>

            <p className='investtext'>
              Invest from <span>#1K</span>,<span>$1</span>,<span>$1</span>,{" "}
              <br />
              Get complete <span>7</span> Tracks <span>(+1)</span> E.P <br />
              Sent to your Email.
            </p>
            <div className='underlines'></div>
            <h1 className='entertitle'>
              ENTER FOR <br /> RAFFLES AND GIVEAWAYS
            </h1>
            <div className='theclothes'>
              <img className='dshirts' src={shirt} alt='' />
              <img src={hood} className='dhoods' alt='dhoods' />
            </div>
          </div>

          <div className=''>
            <div className='thestreambox'>
              <p className='thestreamtext'>
                Live Stream <br />
                Begins Shortly
              </p>
            </div>
            <div className='thesocialbtns'>
              <button>
                <img src={ig} alt='' width={40} />
              </button>
              <button>
                <img src={x} alt='' width={40} />
              </button>
            </div>
            <div className='therimdbtn'>
              <button className=''>
                <p>
                  Remind me <br />
                  in 2 days
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
