import style from "./LoginPage.module.css";
import { useSelector } from "react-redux";
import { pageActions } from "../../Redux/pageSlice";
import { useDispatch } from "react-redux";
import KakaoMap from "../../Components/KakaoMap/KakaoMap";

const LoginPage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.value);

  return (
    <div className={style.container}>
      <KakaoMap />
    </div>
  );
};

export default LoginPage;
