import actionTypes from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    names: [],
    occasionType: "",
    occasionLastDate: "",
    occasionDate: "",
    greetData: {},
    themes: {},
    selectedThemeId: null,
    musics: {},
    selectedMusicId: null,
    currentGreetEditData: {},
    allGreet: [],
    uploadedMedia: [],
    finalVideo: {},
    // sortedMediaForMerge: {},
    finalMergedMedia: {},
    inviteLink: "",
    currentUser: null,
    checkoutDetail: {},
    greetContributedMedia: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };
        case actionTypes.SET_STATE:
            return {
                ...state,
                ...action.payload,
            };
        case actionTypes.ADD_OCCASION_TYPE:
            return {
                ...state,
                occasionType: action.payload,
            };
        case actionTypes.ADD_PERSON_NAME:
            return {
                ...state,
                names: action.payload,
            };
        case actionTypes.ADD_OCCASION_DATES:
            return {
                ...state,
                occasionDate: action.payload.date,
                occasionLastDate: action.payload.lastDate,
            };
        default:
            return state;
    }
};

export default rootReducer;
