// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBuigo3l7YfIdgob_bE0Ii1RZVqjOOsJ9U",
    authDomain: "sna-hw3-2f0b8.firebaseapp.com",
    databaseURL: "https://sna-hw3-2f0b8.firebaseio.com",
    projectId: "sna-hw3-2f0b8",
    storageBucket: "sna-hw3-2f0b8.appspot.com",
    messagingSenderId: "1098197444143"
  };
  firebase.initializeApp(config);

  var storageRef = firebase.storage().ref()
  var img1 = "16999180_1535450439799123_2750625455538178861_n.jpg"
  var img2 = "6018618935_4a681b9635_o.jpg"
  var img3 = "Placekitten480-g.jpg"

  function imggg(){
  	var publicRef1 = storageRef.child('Image/' + img1)
  	var publicRef2 = storageRef.child('Image/' + img2)
  	var publicRef3 = storageRef.child('Image/' + img3)

  	console.log(publicRef1);
  	publicRef1.getDownloadURL().then(function(url){
  		$('#image1').attr("src",url);
  	})
  	publicRef2.getDownloadURL().then(function(url){
  		$('#caco').attr("src",url);
  	})
  	publicRef3.getDownloadURL().then(function(url){
  		$('#cat').attr('src',url);
  	})
  }

  $(document).ready(function(){
  	imggg()
  })

// 返回頁頂函式
function returnToTop()
{
	window.scrollTo(0,0);
}

// 段落變色-JS寫法
var headers = document.getElementsByTagName("p");

for (var i in headers)
{
    headers[i].onmouseover = function()
    {
        this.style.background = 'pink';
    }

    headers[i].onmouseout = function()
    {
        this.style.background = 'white';
    }
}

//預設中字體
var a = document.body;
a.className += "medium"


// 小字體
function smallFont()
{
	var a = document.body;
	if (a.className == "medium")
	{
		a.classList.remove("medium");
		a.className += "small"
	}
	else if (a.className == "large")
	{
		a.classList.remove("large");
		a.className += "small"
	}
	else if (a.className != "small")
	{
		a.className += "small"
	}
}

// 中字體
function mediumFont()
{
	var a = document.body;
	if (a.className == "small")
	{
		a.classList.remove("small");
		a.className += "medium"
	}
	else if (a.className == "large")
	{
		a.classList.remove("large");
		a.className += "medium"
	}
	else if (a.className != "medium")
	{
		a.className += "medium"
	}
}

// 大字體
function largeFont()
{
	var a = document.body;
	if (a.className == "small")
	{
		a.classList.remove("small");
		a.className += "large"
	}
	else if (a.className == "medium")
	{
		a.classList.remove("medium");
		a.className += "large"
	}
	else if (a.className != "large")
	{
		a.className += "large"
	}
}