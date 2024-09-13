import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
const GoogleLogin = ({}) => {
  const dispatch = useDispatch();
  const googleSignInButton = useRef(null);
  const onGoogleSignIn = useCallback(
    async (res) => {
      try {
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id:
        "287183985142-kmnql3ukm21vgbdkdr37os4d54nfe5bg.apps.googleusercontent.com",
      callback: onGoogleSignIn,
    });
    window.google.accounts.id.renderButton(googleSignInButton.current, {
      type: "icon",
      text: "continue_with",
      shape: "rectangular",
      width: "40px",
      size: "large",
    });
    return () => {
      document.getElementById("g_a11y_announcement")?.remove();
    };
  }, [onGoogleSignIn]);
  return <div ref={googleSignInButton}></div>;
};

export default GoogleLogin;
