let idValue = 1;
export function applications(state = [], action) {
    switch (action.type) {
        case 'ADD_APPLICATION':
            // Return a new array
            return [
                ...state,
                {
                    label: action.payload,
                    completed: false
                }
            ]
        default:
            return state;
    }
}

//return [{id: idValue++, label: action.application}];
