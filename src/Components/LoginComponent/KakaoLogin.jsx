import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const KakaoLogin = () => {
  const dispatch = useDispatch();
  const kakaoLoginRequest = () => {
    window.Kakao.Auth.login({
      success() {
        window.Kakao.API.request({
          url: "/v2/user/me",
          async success(res) {
            const id = res.id;
            console.log(res);
          },
          fail(error) {
            console.log(error);
          },
        });
      },
      fail(error) {
        console.log(error);
      },
    });
  };
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("362dbe7eafb3074f31bb58bbd63ddaee");
    }
    return () => {
      window.Kakao.cleanup();
    };
  }, []);
  return (
    <div id="kakao-login-api">
      <img
        src="images/icons/icon_kakao.png"
        alt="kakao"
        width={40}
        onClick={kakaoLoginRequest}
      />
    </div>
  );
};

export default KakaoLogin;
