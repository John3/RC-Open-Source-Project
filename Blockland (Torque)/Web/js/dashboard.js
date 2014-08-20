//dashboard.js
//ROSP Dashboard Script
//DO NOT MODIFY UNLESS YOU KNOW WHAT YOU ARE DOING

//-----SECTIONS-----
//1: Page Elements |
//------------------


//-----PAGE ELEMENTS-----



function chatBox_addLine(chatLine, power) //called to add a line of chat to the chat box
{
	var chatdiv = document.getElementById('div_chatBox');
	if(power == 1) //if the player who chatted is an admin
	{
		chatdiv.innerHTML += "<img src='icons/admin.png'/> "; //add a symbol before their chat line
	}
	else if(power == 2) //if the player who chatted is a super admin
	{
		chatdiv.innerHTML += "<img src='icons/superadmin.png'/> "; //add a symbol before their chat line
	}

	chatdiv.innerHTML += (chatLine + '<br/>'); //add the chat line to the box
	chatdiv.scrollTop = chatdiv.scrollHeight;
}
