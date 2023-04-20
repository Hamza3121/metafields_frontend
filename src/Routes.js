import React, { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import HomePage from './components/Homepage';


export const RouteStrings = {
  homepage: '/',
}

function PrivateRoutes(props) {
  return (
    <>
      <Suspense fallback={<div className="tc mt40">
        <CircularProgress color="primary" />
      </div>}>
        <div style={{ padding: '80px 30px 0 30px' }}>
          <Routes>
            <Route exact path={RouteStrings.homepage} element={<HomePage token={props.token} shop={props.shop} />} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
}

export default PrivateRoutes;
