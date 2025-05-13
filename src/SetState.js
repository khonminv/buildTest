import { useState } from "react";

function SetState() {
	
	// useState()로 바뀐 데이터는 화면을 재로드해 적용합니다.
	// useState() 데이터는 [데이터 값, 데이터 변경 함수] 정의됩니다.
	//console.log("component in");
	//console.log(useState("JavaScript")); // ["JavaScript", fn]

	let [data, setData] = useState("JavaScript");
	let [num, setNum] = useState(0)

	//console.log(data, setData);

	let buttonStyle={
		marginTop: 20,
		padding: 10,
		fontSize: 14,
		backgroundColor: "#999",
		color: "#fff",
		border: "none",
		cursor: "pointer"
	}; // styled commponent

	//ui코딩은 useeffect로 호출
	
	//동적 스크립트 코딩은 인라인으로 호출


	let changeState=() => {
		setData("React");
		setNum(++num);
	};

	
	return (
		<>
			<p>{data}</p>
			<p>{num}</p>
			<button onClick={changeState} style={buttonStyle}>state 수정</button>
		</>
	);
}

export default SetState;
