import style from "./SignupPage.module.css";
import { useSelector } from "react-redux";
import { pageActions } from "../../Redux/pageSlice";
import { useDispatch } from "react-redux";
import useChangePage from "../../Hooks/useChangePage";
import KakaoLogin from "../../Components/LoginComponent/KakaoLogin";
import GoogleLogin from "../../Components/LoginComponent/GoogleLogin";
import DiscordLogin from "../../Components/LoginComponent/DiscordLogin";

const SignupPage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.value);
  const changePage = useChangePage(dispatch);

  return (
    <>
      <div className={style.container}>
        <div className={style.con_signup_pannel}>
          <div className={style.white_text}>이메일 회원가입</div>
          <div>
            <KakaoLogin />
            <GoogleLogin />
            <DiscordLogin />
          </div>
        </div>
        <div className={style.con_footer}>
          <div className={style.white_text} onClick={changePage.terms}>
            이용약관
          </div>
          <div className={style.white_text} onClick={changePage.policy}>
            개인정보 처리방침
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
