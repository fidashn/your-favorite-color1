import React, {useEffect, useState} from 'react';

const Progress = ( {count}) => {
	const [style, setStyle] = useState("0px");
	console.log(style);
	// setTimeout(() => {
	// 	const newStyle = {
	// 		opacity: 1,
      
	// 	}
		
	// 	setStyle(newStyle);
	// }, 200);



	function chooseStyle (count) {
	if (count >= 10 && count < 20){
		setStyle("33.33px")
  }
	if (count >= 20 && count < 30){
		setStyle("66.66px")
  }
	if (count >= 30 && count < 60){
		setStyle("100px")
  }
	if (count >= 60 ){
		setStyle("200px")
  }
	}

useEffect(()=>{
	chooseStyle(count)
},[count])
	
	return (
		<div className="progress">
			<div className="progress-done"  style={{width:(style)}}>
			{count}
			</div>
		</div>
	)
}

export default Progress;