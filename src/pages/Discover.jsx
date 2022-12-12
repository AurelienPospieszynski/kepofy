import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading songs..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-between w-full mt-4 mb-10 ">
        <h2 className="text-3xl font-bold text-left text-white">Discover</h2>
        <select
          onChange={() => {}}
          className="mt-5 text-sm text-gray-400 rounded-lg outline-none bg-slate-700 sm:mt-0"
        >
          {genres?.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard key={song.key} song={song} i={i} activeSong={activeSong} isPlaying={isPlaying} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
