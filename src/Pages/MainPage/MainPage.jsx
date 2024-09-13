import style from "./MainPage.module.css";
import font from "../../Components/FontComponent/Fonts.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef, startTransition } from "react";
import useChangePage from "../../Hooks/useChangePage";

const MainPage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.value);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [navigatorState, setNavigatorState] = useState("black");
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHideHeader, setIsHideHeader] = useState(true);
  const bannerRef = useRef();
  const scrollRef = useRef([]);
  const changePage = useChangePage(dispatch);

  const onScroll = () => {
    if (bannerRef.current) {
      const { scrollTop, clientHeight } = bannerRef.current;
      setIsHideHeader(clientHeight / 5 > scrollTop);
      if (scrollTop < clientHeight * 1.5) {
        setNavigatorState("black");
      } else if (scrollTop <= clientHeight * 2.5 + 100) {
        setNavigatorState("white");
      } else {
        setNavigatorState("end");
      }
    }
  };

  const clickNextPage = () => {
    let targetPos;
    if (bannerRef.current.scrollTop < scrollRef.current[1].offsetTop) {
      targetPos = scrollRef.current[1].offsetTop;
    } else if (bannerRef.current.scrollTop < scrollRef.current[2].offsetTop) {
      targetPos = scrollRef.current[2].offsetTop;
    } else if (
      bannerRef.current.scrollTop <=
      bannerRef.current.clientHeight * 2.5 + 100
    ) {
      targetPos = scrollRef.current[3].offsetTop;
    } else {
      targetPos = scrollRef.current[0].offsetTop;
    }
    bannerRef.current.scrollTo({
      top: targetPos,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsDesktop(windowSize.width > 500);
  }, [windowSize]);

  return (
    <>
      <img
        className={
          navigatorState === "white" || navigatorState === "end"
            ? style.next_btn_white
            : style.next_btn_black
        }
        onClick={clickNextPage}
        width={40}
        height={40}
        src={
          navigatorState !== "end"
            ? "images/arrow_down.png"
            : "images/arrow_up.png"
        }
        alt={"arrow"}
      />
      <div
        className={isHideHeader ? style.con_header_on : style.con_header_off}
      >
        <div
          className={style.header_main_title}
          onClick={() => window.open(".", "_self")}
        >
          GGM DATABASE
        </div>
        {isDesktop ? (
          <div className={style.header_main_sign}>
            <div onClick={changePage.signup} className={font.s_bold}>
              LOG IN
            </div>
            <div onClick={changePage.signin} className={font.s_bold}>
              GET STARTED
            </div>
          </div>
        ) : (
          <div className={style.header_main_sign}>
            <img width={30} height={30} src={"/images/menu.png"} alt={"menu"} />
          </div>
        )}
      </div>
      <div className={style.container} ref={bannerRef} onScroll={onScroll}>
        <div
          className={style.con_main_center_banner}
          ref={(el) => (scrollRef.current[0] = el)}
        >
          <div className={style.main_center_banner_text}>
            WELCOME TO GGM DATABASE
          </div>
        </div>
        <div
          className={style.con_sub_title}
          ref={(el) => (scrollRef.current[1] = el)}
        >
          <div>
            <div className={style.sub_title_text_right}>
              새로운 세상으로의 첫 걸음
            </div>
            <div className={style.sub_title_text_left}>
              앞으로의 무한한 미래
            </div>
            <div className={style.sub_title_text_right}>
              GGM DATABASE와 함께
            </div>
          </div>
        </div>
        <div className={style.gradient}></div>
        <div
          className={style.con_last_page}
          ref={(el) => (scrollRef.current[2] = el)}
        >
          <div className={style.last_page_container}>
            <div className={style.last_page_con_img}>
              <img height={"100%"} src={"images/group.png"} alr={"group"} />
            </div>
            <div className={style.last_page_con_text}>
              <div className={style.last_page_main_text}>실명 회원제</div>
              <div className={style.last_page_sub_text}>
                GGMDATE BASE는 졸업생 만이 가입할수 있는 실명 회원제 사이트로
                졸업생들 만의 프라이빗한 정보들을 실명제를 통하여 보다 확실하고
                보다 빠르게 확인할 수 있습니다
              </div>
            </div>
          </div>
          <div className={style.last_page_container}>
            <div className={style.last_page_con_img}>
              <img
                height={"100%"}
                src={"images/information.png"}
                alr={"group"}
              />
            </div>
            <div className={style.last_page_con_text}>
              <div className={style.last_page_main_text}>다양한 정보관리</div>
              <div className={style.last_page_sub_text}>
                자신의 이력서부터 포트폴리오, 이력등 다양한 정보를 직접 저장
                수정하며 자신의 정보를 빠르게 한번에 정리할 수 있으며 정리된
                정보를 타인과 빠르게 교환할 수 있습니다
              </div>
            </div>
          </div>
        </div>
        <div className={style.footer}>
          <div className={style.con_content_list}>
            <div onClick={changePage.noti} className={font.n_bold}>
              공지사항
            </div>
            <div onClick={changePage.terms} className={font.n_bold}>
              이용약관
            </div>
            <div onClick={changePage.policy} className={font.n_bold}>
              개인정보처리방침
            </div>
            <div onClick={changePage.reporting} className={font.n_bold}>
              버그리포팅
            </div>
          </div>
          <div
            className={style.con_identity_content}
            ref={(el) => (scrollRef.current[3] = el)}
          >
            <div className={style.footer_content_mainText}>GGM DATABASE</div>
            <div className={style.footer_content_subText}>
              GGM Social Summit © 2024
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
