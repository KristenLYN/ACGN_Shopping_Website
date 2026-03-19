// js实现菜单折叠
var flag=true; //开关按钮
function show_menu(){
	var menu1 = document.getElementById("menu1");
	if(flag){
		menu1.style.display="block";
		flag = false;
	}else{
		menu1.style.display="none";
		flag = true;
	}	
}

function show_menu1(){
	var menu1 = document.getElementById("menu1");
	menu1.style.display="none";
	flag = true; //鼠标离开时将flag默认回true
}

function getIconByType(type) {
	const iconMap = {
	  'shop': 'fas fa-store',       // 店铺消息
	  'service': 'fas fa-headset',  // 客服消息
	  'logistics': 'fas fa-truck',  // 物流信息
	  'system': 'fas fa-bell'       // 系统通知
	};
	return iconMap[type] || 'fas fa-info-circle'; // 默认图标
  }