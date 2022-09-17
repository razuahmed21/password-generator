const characters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"~",
	"`",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"_",
	"-",
	"+",
	"=",
	"{",
	"[",
	"}",
	"]",
	",",
	"|",
	":",
	";",
	"<",
	">",
	".",
	"?",
	"/",
];
let showPassword = document.getElementById("showPass");
let copyText = document.getElementById("copyText");

let passwordLength = 15;
let generateGlobal = "";
function getRandomCharacter() {
	let randomChar = Math.floor(Math.random() * characters.length);
	return characters[randomChar];
}

function generateRandomPassword() {
	let randomPassword = "";
	for (let i = 0; i < passwordLength; i++) {
		randomPassword += getRandomCharacter();
	}
	return randomPassword;
}

function passWordGen() {
	generateGlobal = generateRandomPassword();
	showPassword.textContent = generateGlobal;
}

function copyTextButton() {
	navigator.clipboard.writeText(generateGlobal);
	let copyDefault = "";
	if (generateGlobal === "") {
		copyDefault = "Generate Password First";
	} else {
		copyDefault = "Password Copied ☑";
	}
	copyText.textContent = copyDefault;
}
