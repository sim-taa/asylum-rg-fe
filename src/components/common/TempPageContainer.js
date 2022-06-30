// code to be inserted in PageNav's parent, so that screen size can be passed down as a prop (or passed wherever else needed if needed)
import { useEffect, useState } from 'react';
const [bigScreen, setBigScreen] = useState(true); // eslint-disable-line

const windowSize = window.innerWidth;

console.log('window size:', windowSize);

// if windowSize is below 700 then bigScreen is set to false and the "defaultPageSize" changes from 40 to 15
const ScreenSizeReader = () =>
  useEffect(() => {
    if (windowSize < 700) {
      setBigScreen(false);
    } else {
      setBigScreen(true);
    }
  }, []);

export default ScreenSizeReader;

// if this isn't read from state, then I don't believe it will affect the render - needs to be plugged into React
