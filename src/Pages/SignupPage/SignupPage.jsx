import style from "./SignupPage.module.css";
import { useSelector } from "react-redux";
import { pageActions } from "../../Redux/pageSlice";
import { useDispatch } from "react-redux";
import useChangePage from "../../Hooks/useChangePage";
import KakaoLogin from "../../Components/LoginComponent/KakaoLogin";
import GoogleLogin from "../../Components/LoginComponent/GoogleLogin";
import DiscordLogin from "../../Components/LoginComponent/DiscordLogin";

const BinocularsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10C4 8.89543 4.89543 8 6 8H8C9.10457 8 10 8.89543 10 10V20C10 21.1046 9.10457 22 8 22H6C4.89543 22 4 21.1046 4 20V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 10C14 8.89543 14.8954 8 16 8H18C19.1046 8 20 8.89543 20 10V20C20 21.1046 19.1046 22 18 22H16C14.8954 22 14 21.1046 14 20V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 12H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 5L20 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SignupPage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.value);
  const changePage = useChangePage(dispatch);

  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.header}>
            <BinocularsIcon />
            <h2 className={style.title}>지누DB 로그인</h2>
            <p className={style.subtitle}>간편하게 시작하기</p>
          </div>
          <div className={style.socialButtons}>
            <button className={style.socialButton} style={{ backgroundColor: 'white' }}></button>
            <button className={style.socialButton} style={{ backgroundColor: '#1877f2' }}></button>
            <button className={style.socialButton} style={{ backgroundColor: 'black' }}></button>
          </div>
          <div className={style.divider}>
            <div className={style.dividerLine}></div>
            <span className={style.dividerText}>이메일 로그인</span>
            <div className={style.dividerLine}></div>
          </div>
          <input className={style.input} type="email" placeholder="Email address" />
          <input className={style.input} type="password" placeholder="Password" />
          <button className={style.loginButton}>로그인</button>
          <div className={style.footer}>
            <a href="#" className={style.footerLink}>비밀번호 찾기</a>
            <span>|</span>
            <a href="#" className={style.footerLink}>이메일 회원가입</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
