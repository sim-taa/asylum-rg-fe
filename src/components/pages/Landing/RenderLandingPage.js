import React from 'react';
import { Link } from 'react-router-dom';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';
import TempPageContainer from '../../common/TempPageContainer';

function RenderLandingPage(props) {
  return (
    <div>
      <h1>I've been gutted</h1>
      <div>
        <p>
          Billy Dean has taken his machete to most of the components and
          features we don't need, clearing away the bramble to make a cleaner
          slate for the FE devs to work on.
        </p>
        <p>
          If you still want to see the example from the SPA template, feel free
          to <Link to="/example-list">click here</Link>.
        </p>
        <p>
          Or maybe you want to see <Link to="/datavis">the other example </Link>
          .
        </p>
      </div>
      <TempPageContainer />
    </div>
  );
}
export default RenderLandingPage;
