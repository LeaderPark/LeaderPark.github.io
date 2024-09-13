import style from "./SigninPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useRef } from "react";
import DaumPostcode from "react-daum-postcode";
import ReCAPTCHA from "react-google-recaptcha";
import { pageActions } from "../../Redux/pageSlice";

const SigninPage = () => {
  const [openPostcode, setOpenPostcode] = useState(false);
  const [addressData, setAddressData] = useState({
    address: "",
    zonecode: "",
  });
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.value);
  const recaptchaRef = useRef();

  const selectAddresshandler = (data) => {
    /*
    "postcode": "",
    "postcode1": "",
    "postcode2": "",
    "postcodeSeq": "",
    "zonecode": "06052",
    "address": "서울 강남구 학동로31길 12",
    "addressEnglish": "12, Hakdong-ro 31-gil, Gangnam-gu, Seoul, Korea",
    "addressType": "R",
    "bcode": "1168010800",
    "bname": "논현동",
    "bnameEnglish": "Nonhyeon-dong",
    "bname1": "",
    "bname1English": "",
    "bname2": "논현동",
    "bname2English": "Nonhyeon-dong",
    "sido": "서울",
    "sidoEnglish": "Seoul",
    "sigungu": "강남구",
    "sigunguEnglish": "Gangnam-gu",
    "sigunguCode": "11680",
    "userLanguageType": "K",
    "query": "학동로 31길 12",
    "buildingName": "벤쳐캐슬빌딩",
    "buildingCode": "1168010800100820018000001",
    "apartment": "N",
    "jibunAddress": "",
    "jibunAddressEnglish": "",
    "roadAddress": "서울 강남구 학동로31길 12",
    "roadAddressEnglish": "12, Hakdong-ro 31-gil, Gangnam-gu, Seoul, Korea",
    "autoRoadAddress": "",
    "autoRoadAddressEnglish": "",
    "autoJibunAddress": "서울 강남구 논현동 82-17",
    "autoJibunAddressEnglish": "82-17, Nonhyeon-dong, Gangnam-gu, Seoul, Korea",
    "userSelectedType": "R",
    "noSelected": "N",
    "hname": "",
    "roadnameCode": "4166791",
    "roadname": "학동로31길",
    "roadnameEnglish": "Hakdong-ro 31-gil"
   */
    setAddressData({ address: data.address, zonecode: data.zonecode });
    setOpenPostcode(false);
  };

  const createAccount = (e) => {
    e.preventDefault();
    console.log(e);
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className={style.container}>
      <form className={style.sign_in_form} onSubmit={createAccount}>
        <div>이메일</div>
        <input id={"email"} placeholder={"이메일을 입력해주세요"} />
        <div>이메일 확인 코드</div>
        <input
          id={"email_check"}
          placeholder={"이메일 확인코드를 입력해주세요"}
        />
        <div>비밀번호</div>
        <input id={"password"} placeholder={"비밀번호를 입력해주세요"} />
        <div>비밀번호 확인</div>
        <input
          id={"password_check"}
          placeholder={"비밀번호를 다시 입력해주세요"}
        />
        <div>주소</div>
        <input
          id={"address_set"}
          placeholder={"주소를 검색해주세요"}
          value={addressData.address}
        />
        <div onClick={() => setOpenPostcode((current) => !current)}>
          검색하기
        </div>
        {openPostcode && (
          <div className={style.address_popup}>
            <div
              className={style.address_popup_close}
              onClick={() => setOpenPostcode(false)}
            >
              닫기
            </div>
            <DaumPostcode
              className={style.address_content}
              onComplete={selectAddresshandler} // 값을 선택할 경우 실행되는 이벤트
              autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
              // defaultQuery="경기 안양시 동안구 학의로 70" // 팝업을 열때 기본적으로 입력되는 검색어
            />
          </div>
        )}
        <div>상세 주소</div>
        <input
          id={"address_detail_set"}
          placeholder={"상세 주소를 검색해주세요"}
        />
        <form
          onSubmit={() => {
            recaptchaRef.current.execute();
          }}
        >
          <ReCAPTCHA
            ref={recaptchaRef}
            size="normal"
            sitekey={`${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`}
            onChange={onChange}
          />
        </form>
        <button type="submit">생성하기</button>
      </form>
    </div>
  );
};

export default SigninPage;
