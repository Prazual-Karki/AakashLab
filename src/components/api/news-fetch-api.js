import axios from "axios";
import { setNewsList } from "../../redux-toolkit/newsSlice";
// a57d4e937c2e4b4e144825c636b8784b
export const getNewsList = ()=>{
    return async (dispatch)=>{
        axios
          .get(
            'https://gnews.io/api/v4/top-headlines?category=general&apikey=a57d4e937c2e4b4e144825c636b8784b'
          )
          .then((res) => {
            dispatch(setNewsList(res.data.articles))
            console.log(res.data.articles)
          }).catch(()=>{
            console.log("something wrong");
          })
    }
}