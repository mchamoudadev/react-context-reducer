export const initialState = {
    auth: {
        isAuthenticated: false,
        currentUser: null,
    },
    users: [],
    posts: [],
    currentPost: null,
    comments: [],
};


export const globalReducer = (state, action) => {
    switch (action.type) {
        // Auth actions
        case 'REGISTER':
            return {
                ...state,
                users: [...state.users, action.payload],
            };

        case 'LOGIN':
            const user = state.users.find(u => u.username === action.payload.username && u.password === action.payload.password);
            if (user) {
                return {
                    ...state,
                    auth: {
                        isAuthenticated: true,
                        currentUser: user,
                    }
                };
            } else {
                // If authentication failed, we can set an authError flag
                return {
                    ...state,
                    auth: {
                        isAuthenticated: false,
                        currentUser: null,
                        authError: true, // New flag to indicate authentication error
                    }

                };
            }
        case 'LOGOUT':
            return {
                ...state,
                auth: {
                    isAuthenticated: false,
                    currentUser: null,
                },
            };

        // posts
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };

        case 'CREATE_POST':
            // We assume the new post coming from the action payload 
            // has a unique ID and all required fields
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };

        case 'REMOVE_POST':
            // We assume the action payload contains the ID of the post to be removed
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload),
            };

        case 'UPDATE_POST':
            // We assume the action payload contains the updated post with its ID
            return {
                ...state,
                posts: state.posts.map(post =>
                    post.id === action.payload.id ? { ...action.payload, author: post.author } : post
                ),
            };

        // Comment actions
        case 'SET_COMMENTS':
            return {
                ...state,
                comments: action.payload,
            };
        case 'ADD_COMMENT':
            return {
                ...state,
                comments: [...state.comments, action.payload],
            };

        default:
            return state;
    }
};
