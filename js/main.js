/**
 * 
 * Main Setting
 * 
**/

const metaChar = document.createElement("meta");
metaChar.setAttribute("charset", "UTF-8");
appendElement(document.head, metaChar);

const metaView = document.createElement("meta");
metaView.name = "viewport";
metaView.content = "width=device-width, initial-scale=1.0";
appendElement(document.head, metaView);

document.title = "Responsive Travel Website Landing Page";

const linkFontOne = document.createElement("link");
linkFontOne.rel = "stylesheet";
linkFontOne.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap";
appendElement(document.head, linkFontOne);

const linkFontTwo = document.createElement("link");
linkFontTwo.rel = "stylesheet";
linkFontTwo.href = "https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap";
appendElement(document.head, linkFontTwo);

/**
 * 
 * Main Functions
 * 
**/

// Style Function
function styleElement(target, style) {
	const styles = style
	Object.assign(target.style, styles);
}

// Append
function appendElement(parent, child) {
	parent.appendChild(child);
}

/**
 * 
 * Body
 * 
**/

styleElement(document.body, {
	position: "relative",
	display: "flex",
	alignItems: "center",
	minHeight: "100vh",
	backgroundImage: "url('img/bg.jpg'), url('img/mask.jpg')",
	backgroundBlendMode: "screen",
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat"
});

/**
 * 
 * Create Main Section
 * 
**/

const mainSection = document.createElement("section");

// Append Section To The Body
document.body.prepend(mainSection);

/**
 * 
 * Header
 * 
**/

// Create Header
const headerDiv = document.createElement("header");

styleElement(headerDiv, {
	position: "absolute",
	top: "0",
	left: "0",
	width: "100%",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "40px 50px",
	zIndex: "1000"
});

appendElement(mainSection, headerDiv);

// Create Link
const headerLogo = document.createElement("a");

// Add Href Attribute to Link
headerLogo.setAttribute("href", "#");

// Add Text To Link
headerLogo.textContent = "Travel";

styleElement(headerLogo, {
	textDecoration: "none",
	position: "relative",
	fontSize: "30px",
	fontWeight: "700",
	letterSpacing: "2px",
	textdecoration: "none",
	color: "#015b75",
	display: "inline-block"
});

appendElement(headerDiv, headerLogo);

// Create Toggle Button
const headerToggle = document.createElement("div");

// Add Class To The Toggle Button
headerToggle.classList.add("toggle");

styleElement(headerToggle, {
	position: "relative",
	width: "40px",
	height: "40px",
	background: "url('img/menu.png')",
	backgroundSize: "30px",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	cursor: "pointer"
});

appendElement(headerDiv, headerToggle);

/**
 * 
 * Create Nav
 * 
**/

// Create Nav
const nav = document.createElement("nav");

styleElement(nav, {
	position: "absolute",
	top: "0",
	left: "0",
	width: "100%",
	height: "100%",
	background: "#fff",
	transition: "0.2s",
	opacity: "0",
	visibility: "hidden",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
});

// Create Ul For Nav
const navUl = document.createElement("ul");

styleElement(navUl, {
	listStyle: "none",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column"
});

// Create Nav Li
function createNavLi(navName) {
	const navLi = document.createElement("li");
	const navLink = document.createElement("a");
	navLink.setAttribute("href", "#");
	navLink.textContent = navName;
	appendElement(navLi, navLink);
	appendElement(navUl, navLi);
}

createNavLi("Home");
createNavLi("About");
createNavLi("Booking");
createNavLi("Tour");
createNavLi("Blog");
createNavLi("Contact");

appendElement(nav, navUl);
appendElement(mainSection, nav);

const allNavLinks = document.querySelectorAll("nav ul li a");

for (let i of allNavLinks) {
	styleElement(i, {
		textDecoration: "none",
		color: "#015b75",
		display: "inline-block",
		fontSize: "2em",
		fontWeight: "300",
		transition: "0.5s"
	});
}

allNavLinks.forEach(e => {
	e.onmouseenter = () => {
		e.style.color = "#ff286f";
	}
	e.onmouseleave = () => {
		e.style.color = "#015b75";
	}
});

/**
 * 
 * Create Content
 * 
**/

// Create Content
const content = document.createElement("div");

// Style Content
content.style.padding = "50px";

// Create H2 For Content
const contentH2 = document.createElement("h2");

// Set Text Content To H2 In Content
contentH2.innerHTML = `Dream<br>Trip`;

// Style Content h2
contentH2.style.font = "9em 'Kaushan Script', cursive";
contentH2.style.lineHeight = "1em";
contentH2.style.color = "#015b75";

appendElement(content, contentH2);
appendElement(mainSection, content);

/**
 * 
 * Play Button
 * 
**/

// Create Play Div
const playDiv = document.createElement("div");

// Set Play Div Class
playDiv.classList.add("play");

styleElement(playDiv, {
	position: "absolute",
	bottom: "40px",
	left: "50px",
	display: "flex",
	alignItems: "center",
	cursor: "pointer"
});

appendElement(mainSection, playDiv);


// Create Play Img
const playImg = document.createElement("img");

// Set Src Attribute
playImg.setAttribute("src", "img/play.png");

// Set Alt Attribute
playImg.setAttribute("alt", "Play Button");

// Style Play Img
playImg.style.maxWidth = "40px";

appendElement(playDiv, playImg);


// Create Play Span
const playSpan = document.createElement("span");

// Set Play Span Text Content
playSpan.textContent = "Play Video";

styleElement(playSpan, {
	fontWeight: "600",
	color: "#015b75",
	margin: "0 0 0 10px",
	letterSpacing: "1px"
});

appendElement(playDiv, playSpan);

/**
 * 
 * Triler
 * 
**/

// Create Trailer Div
const trailerDiv = document.createElement("div");

// Set Class To Trailer Div
trailerDiv.classList.add("trailer");

styleElement(trailerDiv, {
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "100%",
	height: "100%",
	zIndex: "10000",
	background: "rgba(255, 255, 255, 0.95)",
	transition: "0.5s",
	opacity: "0",
	visibility: "hidden",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
});

appendElement(mainSection, trailerDiv);


// Create Trailer Video
const trailerVideo = document.createElement("video");

// Set Trailer Video Src Attribute
trailerVideo.setAttribute("src", "img/clip.mp4");

// Set Trailer Video Controls Attribute
trailerVideo.setAttribute("controls", "true");

// Set Video Class
trailerVideo.classList.add("video");

// Set Triler Video Styles
trailerVideo.style.maxWidth = "900px";
trailerVideo.style.outline = "none";

appendElement(trailerDiv, trailerVideo);


// Create Trailer Img Close Button
const trailerImgClose = document.createElement("img");

// Set Src Attribute to Trailer Img Close
trailerImgClose.setAttribute("src", "img/close.png");

// Set alt Attribute to Trailer Img Close
trailerImgClose.setAttribute("alt", "Close Button");

// Set Class To Trailer Img Close
trailerImgClose.classList.add("close");

styleElement(trailerImgClose, {
	position: "absolute",
	top: "50px",
	right: "50px",
	cursor: "pointer",
	maxWidth: "25px"
});

appendElement(trailerDiv, trailerImgClose);

/**
 * 
 * Socail Media Icons
 * 
**/

// Create Social Div
const socialDiv = document.createElement("div");

// Set Class To Socail Div
socialDiv.classList.add("sci");

styleElement(socialDiv, {
	position: "absolute",
	bottom: "40px",
	right: "50px"
});

appendElement(mainSection, socialDiv);

// Create Ul For Social Div
const socialUl = document.createElement("ul");

styleElement(socialUl, {
	listStyle: "none",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column"
});

appendElement(socialDiv, socialUl);

// Create Social Li 
function createSocialLi(link, imgSrc, imgAlt) {
	const socialLi = document.createElement("li");
	appendElement(socialUl, socialLi);

	const socialA = document.createElement("a");
	socialA.setAttribute("href", link);
	socialA.setAttribute("target", "_blank");
	appendElement(socialLi, socialA);

	const socialImg = document.createElement("img");
	socialImg.setAttribute("src", imgSrc);
	socialImg.setAttribute("alt", imgAlt);
	appendElement(socialA, socialImg);
}

createSocialLi("https://www.facebook.com/KirolosMahfouz/", "img/facebook.png", "Facebook");
createSocialLi("#", "img/twitter.png", "Twitter");
createSocialLi("https://www.instagram.com/kirolosmahfouz/", "img/instagram.png", "Instagram");

// Style All Social Links
const allSocialLinks = document.querySelectorAll(".sci li a");

for (let i = 0; i < allSocialLinks.length; i++) {
	styleElement(allSocialLinks[i], {
		textDecoration: "none",
		color: "#015b75",
		display: "inline-block",
		transform: "scale(0.6)"
	});
}

/**
 * 
 * Responsive
 * 
**/

function mediaQuery() {
	function mediaQueryValues(bgSize, fS, color, tS, mW) {
		document.body.style.backgroundSize = bgSize;
		contentH2.style.fontSize = fS;
		contentH2.style.color = color;
		contentH2.style.textShadow = tS;
		trailerVideo.style.maxWidth = mW;
	}
	if (window.matchMedia("(max-width: 991px)").matches) {
		mediaQueryValues("200%", "20vw", "#fff", "0 5px 15px rgba(0, 0, 0, 0.2)", "90%");
	} else {
		mediaQueryValues("cover", "9em", "#015b75", "none", "900px");
	}
}

mediaQuery();

window.onresize = () => {
	mediaQuery();
}

/**
 * 
 * Toggle Menu When Click
 * 
**/

headerToggle.onclick = function () {
	function toggleClick(opacityVal, visibilityVal, imgUrl, bgSize) {
		headerToggle.classList.toggle("active");
		nav.style.opacity = opacityVal;
		nav.style.visibility = visibilityVal;
		headerToggle.style.backgroundImage = imgUrl;
		headerToggle.style.backgroundSize = bgSize;
	}
	if (!headerToggle.classList.contains("active")) {
		toggleClick("1", "visible", "url('img/close.png')", "25px")
	} else {
		toggleClick("0", "hidden", "url('img/menu.png')", "30px")
	}
}

/**
 * 
 * Toggle Video
 * 
**/

function toggleVideo(opacityVal, visibilityVal) {
	playDiv.classList.toggle("active");
	trailerDiv.style.opacity = opacityVal;
	trailerDiv.style.visibility = visibilityVal;
	trailerVideo.currentTime = 0;
	trailerVideo.pause();
}

playDiv.onclick = function () {
	if (!playDiv.classList.contains("active")) {
		toggleVideo("1", "visible");
	} else {
		toggleVideo("0", "hidden");
	}
};

document.querySelectorAll(".trailer .close, .trailer").forEach(e => {
	e.onclick = () => {
		toggleVideo("0", "hidden");
	}
});

document.querySelector("video, .trailer .close").onclick = function (e) {
	e.stopPropagation();
}

/**
 * 
 * Style All Elements
 * 
**/

let allTags = document.getElementsByTagName("body")[0].getElementsByTagName("*");

document.getElementsByTagName("body")[0].style.margin = "0"

for (let i = 0; i < allTags.length; i++) {
	if (allTags[i].style.padding === "") {
		allTags[i].style.padding = "0";
	}
	if (allTags[i].style.margin === "") {
		allTags[i].style.margin = "0";
	}
	if (allTags[i].style.boxSizing === "") {
		allTags[i].style.boxSizing = "border-box";
	}
	if (allTags[i].style.fontFamily === "") {
		allTags[i].style.fontFamily = "'Poppins', sans-serif";
	}
}