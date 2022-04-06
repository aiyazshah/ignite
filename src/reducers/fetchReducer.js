let initialState = {
    details: {},
    screenshots: {},
    isloading: true,
}
export default function fetchReducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_DETAILS":
            return {
                ...state,
                details: action.payload.details,
                screenshots: action.payload.screen,
                isloading: false
            }
        case "ISlOADING":
            return {
                ...state,
                isloading: true

            }
        default:
            return { ...state };
    }
}
