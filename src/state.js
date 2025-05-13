import { createSlice, configureStore } from "@reduxjs/toolkit";

let user=createSlice({ // user: "kim"
	name: "user",
	initialState: "kim"
});

let job=createSlice({ // job: "Frontend Developer"
	name: "job",
	initialState: "Frontend Developer"
});

export default configureStore({
	reducer: {
		user: user.reducer,
		job: job.reducer
	}
});