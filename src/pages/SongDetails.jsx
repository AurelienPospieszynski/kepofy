import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-white">Lyrics: </h2>
      <div className="mt-5"></div>
    </div>
  );
};

export default SongDetails;
