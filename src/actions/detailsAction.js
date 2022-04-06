import { fetchDetailsURL, fetchScreenshotURL } from "../api";
import axios from "axios";
export const fetchDetails = (id) => async (dispatch) => {

    const details = await axios.get(fetchDetailsURL(id));
    const screen = await axios.get(fetchScreenshotURL(id));

    dispatch({
        type: "FETCH_DETAILS",
        payload: {
            details: details.data,
            screen: screen.data.results
        }
    })
    dispatch({
        type: "ISlOADING",
    })
}