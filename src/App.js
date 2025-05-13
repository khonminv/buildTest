import Redux from './Redux';

function App(){
	let containerStyle={
		padding: 20
	};

	let h1Style={
		fontSize: 24,
		fontWeight: "normal"
	};

	return(
		<div className="container" style={containerStyle}>
			<h1 style={h1Style}>React Example</h1>
			<Redux />
		</div>
	);
}

export default App;