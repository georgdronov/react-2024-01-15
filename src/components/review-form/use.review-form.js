import { useReducer } from "react";

const INITIAL_VALUE = {
    name: "",
    text: "",
    rating: 1,
};

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "setName":
            return {
                ...INITIAL_VALUE,
                name: payload,
            };
        case "setText":
            return {
                ...state,
                text: payload,
            };
        case "setRating":
            return {
                ...state,
                rating: payload,
            };

        default:
            return state;
    }
};

export const useReviewForm = (initialValue = INITIAL_VALUE) => {
    const [form, dispatch] = useReducer(reducer, initialValue);
    const setValue = (type, value) => {
        dispatch({ type, payload: value })
    }

    return { form, setValue };
};