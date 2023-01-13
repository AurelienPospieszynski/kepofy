import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistId
    ? artistData?.artists[artistId]?.attributes
    : 'Bouh c nul';

  return (
    <div className="relative flex flex-col w-full">
      <div className="w-full bg-gradient-to-r from-transparent to-black sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img
          src={
            artistId
              ? artist?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
              : songData?.images?.coverart
          }
          className="object-cover pb-1 border-2 rounded-full shadow-xl w-28 h-28 sm:w-48 sm:h-48 shadow-black"
        />
        <div className="ml-5">
          <p className="ml-6 text-4xl italic font-bold text-white">
            {artistId ? artist?.name : songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className="ml-6 italic font-bold text-white text-1xl">
                {songData?.subtitle}
              </p>
            </Link>
          )}

          <p className="ml-6 italic font-bold text-white text-1xl">
            {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
