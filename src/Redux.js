import { useSelector } from "react-redux";

function Redux(){
	// let data=useSelector(state => state);

	// console.log(data); // { job: "Frontend Developer", user: "kim" }

	// let data=useSelector(state => state.job);

	// console.log(data); // Frontend Developer

	let {user, job}=useSelector(state => state);

	// console.log(user, job); // kim Frontend Developer

	return(
		<p>{user} : {job}</p>
	);
}

export default Redux;