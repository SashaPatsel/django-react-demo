import axios from "axios";
import GET_LEADS from "./type"
import { dispatch } from "rxjs/internal/observable/pairs";

export const GET_LEADS = () => dispatch => {
    axios
    .get("/api/leads/")
    .then(res => {
        dispatch({
            type: GET_LEADS,
            payload: res.data
        })
    }).catch(err => {
        console.log("err", err)
    })
}