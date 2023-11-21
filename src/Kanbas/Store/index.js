import { configureStore } from "@reduxjs/toolkit";
import assignmentReducer from "../Courses/Assignments/assignmentReducer";


const store = configureStore({
    reducer: {
        assignmentReducer
    }
});


export default store;