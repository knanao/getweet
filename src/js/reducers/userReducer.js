export default function reducer(state = {
    user: {
        id: null,
        name: null,
        age: null,
    },
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case "FETCH_USER": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload
            };
        }
        // ToDo
    }

    return state;
}