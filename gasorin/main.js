console.log("main.js!!");

/*
// jQuery入門
//	公式サイト: https://jquery.com/
//	チュートリアル: https://snome.jp/programming/jquery1/
//	チートシート: https://web-cheatsheet.com/jquery-to-vanillajs
*/

// Ready
$(document).ready(()=>{
	console.log("Ready!!");

	$("#my_btn").click(()=>{
		console.log("計算する");
		const strVal_gasorin = $("#my_gasorin").val();//文字列取得
		const numVal_gasorin = parseInt(strVal_gasorin,);
		const strVal_kyori = $("#my_kyori").val();//文字列取得
		const numVal_kyori = parseInt(strVal_kyori,);
		const strVal_nenpi = $("#my_nenpi").val();//文字列取得
		const numVal_nenpi = parseInt(strVal_nenpi,);
		
		//TODO電卓を完成させなさい

		const kekka = numVal_gasorin * numVal_kyori / numVal_nenpi
		
		

		$("#my_tax").text(kekka);
		
        
	});
});