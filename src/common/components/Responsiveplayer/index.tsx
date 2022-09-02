import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

interface IResponsiveplayer {
  url: string | undefined | null;
}
const Responsiveplayer = ({ url }: IResponsiveplayer) => {
  // https://github.com/cookpete/react-player/issues/1474
  //  HACK: HASWINDOW to check if window exists, so it loads using SSR check for react-player version updates to support SSR
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  if (typeof url === 'undefined' || !url) {
    return null;
  }

  return (
    <div style={{ position: 'relative', paddingTop: '56.25%' }}>
      {hasWindow && (
        <ReactPlayer
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          url={url}
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};
export default Responsiveplayer;
