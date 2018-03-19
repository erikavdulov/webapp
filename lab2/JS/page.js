var lastDisplayed = 'tabItems';
//first load html -> js after that
document.addEventListener('DOMContentLoaded', function() {
	var searchForm = document.getElementById('fileSearch');
	searchForm.addEventListener("submit",function(event){
		event.preventDefault(); //prevent default behaviour - change on line 40
		searchFiles();			//calls function -> line 11
	});
});
	
function searchFiles(){				//search for files
	lastDisplayed = 'tabDetail';
	
	var uploadForm = document.getElementById("tabItems");	
	uploadForm.setAttribute("style", "display: none;");			//hides upload form
	
	var tabDetail = document.getElementById("tabDetail");
	tabDetail.setAttribute("style", "display: block;");			//displays 'tabDetail' four windows user chooses from (music, video, pictures,other)
	
	//remove all elements
	while (tabDetail.hasChildNodes()) {
		tabDetail.removeChild(tabDetail.lastChild);
	}
	//communication with server -> if request is sent, response is received
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {		//data exchange with server
		if (this.readyState == 4 && this.status == 200) {
			var arrData = JSON.parse(this.responseText);	//this.responseText is a string that needs to be converted to js object; 
			//responseText is a server response
			var searchForm = document.getElementById("searchForm");
			searchForm.setAttribute("style", "display: none;");		//hides the search form
			
			generateView(arrData,true);		//calls function to show user's files
		}
	};

	var name = document.getElementById("sname").value;		//search form -> name
	var desc = document.getElementById("sdesc").value;		//search form -> description
	xmlhttp.open("GET", "./php/utils.php?searchFiles=" + true + "&name=" + name + "&desc=" + desc, true);
	xmlhttp.send();			//communicates with php -> 'name' and 'description' from search form
}

function showSearchDiv(){			//function to display search div
	var tabDetail = document.getElementById("tabDetail");
	tabDetail.setAttribute("style", "display: none;");
	
	var uploadForm = document.getElementById("uploadForm");
	uploadForm.setAttribute("style", "display: none;");
	
	var searchForm = document.getElementById("searchForm");
	searchForm.setAttribute("style", "display: block;");
	
	var tabItems = document.getElementById("tabItems");
	tabItems.setAttribute("style", "display: none;");
}

function hideSearchDiv(){			//function that hides search div
	var searchForm = document.getElementById("searchForm");
	searchForm.setAttribute("style", "display: none;");
	
	if(lastDisplayed == 'tabItems'){
		var tabItems = document.getElementById("tabItems");
		tabItems.setAttribute("style", "display: block;");
	}
	if(lastDisplayed == 'tabDetail'){
		var tabDetail = document.getElementById("tabDetail");
		tabDetail.setAttribute("style", "display: block;");
	}
		
}


function showUploadDiv(){			//function that displays upload div
	var tabDetail = document.getElementById("tabDetail");
	tabDetail.setAttribute("style", "display: none;");
	
	var searchForm = document.getElementById("searchForm");
	searchForm.setAttribute("style", "display: none;");
	
	var uploadForm = document.getElementById("uploadForm");
	uploadForm.setAttribute("style", "display: block;");
	
	var tabItems = document.getElementById("tabItems");
	tabItems.setAttribute("style", "display: none;");
}

function hideUploadDiv(){			//function that hides upload div
	var uploadForm = document.getElementById("uploadForm");
	uploadForm.setAttribute("style", "display: none;");
	
	if(lastDisplayed == 'tabItems'){
		var tabItems = document.getElementById("tabItems");
		tabItems.setAttribute("style", "display: block;");
	}
	if(lastDisplayed == 'tabDetail'){
		var tabDetail = document.getElementById("tabDetail");
		tabDetail.setAttribute("style", "display: block;");
	}
}



function generateView(data,disableBtnDelete){			//function that displays user's files
	var div;
	for(var i = 0; i< data.length; i++){
		div = createDetail(data[i],disableBtnDelete);	//function on line 137
		tabDetail.appendChild(div);						//generates files
	}
}

function getData(type){
	lastDisplayed = 'tabDetail';
	
	var uploadForm = document.getElementById("tabItems");
	uploadForm.setAttribute("style", "display: none;");		//hides upload form
	
	var tabDetail = document.getElementById("tabDetail");
	tabDetail.setAttribute("style", "display: block;");		//displays the four windows
	
	//refreshes view / removes all elements
	while (tabDetail.hasChildNodes()) {
		tabDetail.removeChild(tabDetail.lastChild);
	}
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {				//data exchange with server
		if (this.readyState == 4 && this.status == 200) {
			var arrData = JSON.parse(this.responseText);	//this.responseText is a string that needs to be converted to js array;
			generateView(arrData);	//displays only data with type chosen by user
		}
	};
	xmlhttp.open("GET", "./php/utils.php?getData=" + type, true);	//communication with server -> function 'getData'
	xmlhttp.send();
}

function createDetail(data,disableBtnDelete){
	var iDiv = document.createElement('div');	//creates div for each file
	iDiv.id = data.id;
	iDiv.className = 'itemDetail';				//class name of every file div
	
	var divText = document.createElement('div');	//creates div for files names
	divText.className = 'itemText';
	divText.innerHTML = data.name;		//name is displayed in the center of every file div
	
	
	var btnDownload = document.createElement('a');	//creates button inside file div to download a file
	btnDownload.className = 'optionButton optionButtonDonwload';	//download button has two classes
	btnDownload.id = 'btnDonwload_' + data.id;
	btnDownload.title = 'download';
	var path = data.path.substring(3);			//cutting out three characters from path
	btnDownload.href = path;
	btnDownload.download = getFileNameFromPath(path);				//download
	
	iDiv.appendChild(divText);
	
	if(disableBtnDelete != true){
		var btnDelete = document.createElement('div');	//creates button inside file div to delete a file
		btnDelete.className = 'optionButton optionButtonDelete';	//delete button has two classes
		btnDelete.id = 'btnDelete_' + data.id;
		btnDelete.title = 'delete';
		
		btnDelete.addEventListener("click", function() {onClickItemDelete(data.id,data.type,data.path);});
		iDiv.appendChild(btnDelete);	//btnDelete is inside iDiv
	}


	iDiv.appendChild(btnDownload);		//btnDownload is inside iDiv

	
	if(data.type == 'pictures'){
		var path = data.path.substring(3);		//cutting out three characters from the path
		iDiv.style.backgroundImage = "url('" + path+ "')";		//every picture is displayed inside 'iDiv'
	}
	else if(data.type == 'music'){
		iDiv.style.backgroundImage = "url('images/icons/itemMusic.png')";	//background image for music 'iDiv's
	}
	else if(data.type == 'videos'){
		iDiv.style.backgroundImage = "url('images/icons/itemVideo.png')";	//background image for video 'iDiv's
	}
	else if(data.type == 'other'){
		iDiv.style.backgroundImage = "url('images/icons/itemOther.png')";	//background image for other 'iDiv's
	}
	
	
	return iDiv;	
}

function getFileNameFromPath(path){				//file name return
	var filePathSplitted = path.split("/");		//splits path by -> /
	var fullFileName = filePathSplitted[filePathSplitted.length-1];
	fileNameSplitted = fullFileName.split("___");	//php line 185
	var fileName = fileNameSplitted[fileNameSplitted.length-1]
	return fileName;
}

function onClickItemDelete(fileId,type,path){		//delete function
	var deleteConfirm = confirm("Are you sure you want the delete the item?");
    if (deleteConfirm == true) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {	//server communication
			if (this.readyState == 4 && this.status == 200) {
				getData(type);
			}
		};
		xmlhttp.open("GET", "./php/utils.php?deleteFile=" + fileId + '&path=' + path, true);
		xmlhttp.send();
	}
}

