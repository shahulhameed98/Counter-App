let counter = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
	btn.addEventListener("click", function (e) {
		if (e.currentTarget.classList.contains("decrease")) {
			counter--;
		} else if (e.currentTarget.classList.contains("increase")) {
			counter++;
		} else {
			counter = 0;
		}
		if (counter > 0) {
			value.style.color = "green";
		} else if (counter === 0) {
			value.style.color = "#222";
		} else {
			value.style.color = "red";
		}
		value.textContent = counter;
	});
});
