import React from 'react';
import Lottie from 'react-lottie';
import * as loading from "../Animationfile/loading-circles.json"

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  const Animation = (props) => {
    return (
      <>
      {console.log(props.loadingBar)}
        {props.loadingBar ? (
          <Lottie options={defaultOptions} height={400} width={400} />
          
        ) : null}
      </>
    );
  };


export default Animation