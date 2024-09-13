import style from "./App.module.css";
import { useSelector } from "react-redux";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SigninPage from "./Pages/SigninPage/SigninPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import MainPage from "./Pages/MainPage/MainPage";
import { useEffect } from "react";

const App = () => {
  const page = useSelector((state) => state.page.value);
  const getUrlParams = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    let options = {
      url: "https://discord.com/api/oauth2/token",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: "1215549687805911101",
        client_secret: "x513J_qDP1d0vx31C8nsU-EKLUqZv_RL",
        grant_type: "client_credentials",
        code: code,
        redirect_uri: "http://localhost:3000",
        scope: "identify email",
      }),
    };

    let discord_data = await fetch(
      "https://discord.com/api/oauth2/token",
      options
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => {
        console.log(response);
        return response;
      });
  };

  useEffect(() => {
    getUrlParams();
  }, []);

  return (
    <div className={style.App}>
      {page === 1 && <MainPage />}
      {page === 2 && <SigninPage />}
      {page === 3 && <SignupPage />}
      {page === 4 && <LoginPage />}
    </div>
  );
};

export default App;
