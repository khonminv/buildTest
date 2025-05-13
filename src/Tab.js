import { useEffect } from 'react';
import data from './data';

function Tab() {
	
	useEffect(()=>{
		let tab=document.querySelector(".tab_cont");
		let tabList=tab.firstElementChild.children;
		tabList[0].classList.add("on");

		for(let i=0; i<tabList.length; i++){
			tabList[i].addEventListener("click", function(e){
				e.preventDefault();

				for(let j=0; j<tabList.length; j++){
					if(j === i){
						tabList[j].classList.add("on");
					}
					else{
						tabList[j].classList.remove("on");
					}
				}
			});
		}
	});

	return (
		<div className="tab_cont">
			<ul>
				{
					data.map((d,i)=>
						<TabList key={i+1} propsValue={d} num={i+1}/>
					)
				}
			</ul>
		</div>
		
	);
}

function TabList(p){
	//const p = {propsValue : d}; 로 받아옴
	let {title,image,alt} = p.propsValue;
	let n = p.num; 

	return(
		<li>
			<h3><a href="">{title}</a></h3>
			<div className={`tab${n}`}><a href=""><img src={`/images/${image}`} alt={alt}/></a></div>
		</li>
	);
};

export default Tab;
