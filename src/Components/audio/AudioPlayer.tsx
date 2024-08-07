import SongInfo from "./SongInfo"
import Controls from "./Controls"
import useAudioPlayer from "@/hooks/useAudioPlayer"
import playlist from "./playlist"


const AudioPlayer = () => {


  const {playerState, playNextTrack, playPrevTrack, togglePlayPause, toggleRepeat, toggleShuffle, setPlaybackPosition} = useAudioPlayer(playlist);
  const {repeat, playbackState, shuffle, currentTrackDuration, currentTrackPlaybackPosition, currentTrackMetadata} = playerState;

  return (
    <div className="audio_container lg:absolute bottom-0 w-full">
      <div className="max-w-4xl mx-auto h-full flex">
        <Controls 
          repeat={repeat}
          shuffle={shuffle}
          onRepeatClick={toggleRepeat}
          onNextClick={playNextTrack}
          onPrevClick={playPrevTrack}
          onPlayClick={togglePlayPause}
          onShuffleClick={toggleShuffle}
          isPlaying={playbackState === 'PLAYING'} 
        />
        <SongInfo currentTrackMetadata={currentTrackMetadata} setPlaybackPosition={setPlaybackPosition} currentTrackDuration={currentTrackDuration} currentTrackPlaybackPosition={currentTrackPlaybackPosition} />
      </div>
    </div>
  )
}

export default AudioPlayer