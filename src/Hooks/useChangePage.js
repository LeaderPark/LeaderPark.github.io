import { pageActions } from "../Redux/pageSlice";

const useChangePage = (dispatch) => {
  return {
    main: () => dispatch(pageActions.changePage(1)),
    signup: () => dispatch(pageActions.changePage(2)),
    signin: () => dispatch(pageActions.changePage(3)),
    login: () => dispatch(pageActions.changePage(4)),
    noti: () => dispatch(pageActions.changePage(5)),
    terms: () => dispatch(pageActions.changePage(6)),
    policy: () => dispatch(pageActions.changePage(7)),
    reporting: () => dispatch(pageActions.changePage(8)),
  };
};

export default useChangePage;
