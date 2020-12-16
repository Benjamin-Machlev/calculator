console.log("hello");

function calc(buttonValue) {
  document.getElementById("screen").value =
    document.getElementById("screen").value + buttonValue;
}

function equal() {
  // debugger;
  let exp = document.getElementById("screen").value;
  for (let i = 0; i < exp.length; i++) {
    if (
      (exp.charAt(i) >= "a" && exp.charAt(i) <= "z") ||
      (exp.charAt(i) >= "A" && exp.charAt(i) <= "Z")
      //!שאלה לשם
      // !(

      //   (
      //     exp.charAt(i) >= "0" ||
      //     exp.charAt(i) <= "9" ||
      //     exp.charAt(i) == "+" ||
      //     exp.charAt(i) == "-"
      //   )
      // )
    ) {
      document.getElementById("screen").style.fontSize = "medium";
      document.getElementById("screen").value = "Type only numbers";
      setTimeout(function () {
        document.getElementById("screen").value = "";
      }, 1500);
      setTimeout(function () {
        document.getElementById("screen").style.fontSize = "xx-large";
      }, 1500);
    }
  }
  let res = eval(exp);
  if (res == "Infinity") {
    document.getElementById("screen").value = "Error";
    setTimeout(function () {
      document.getElementById("screen").value = "";
    }, 1500);
  } else {
    document.getElementById("screen").style.fontSize = "xx-large";
    document.getElementById("screen").value = res;
  }
}
function clear1() {
  document.getElementById("screen").value = "";
}
function backSpace() {
  let exp = document.getElementById("screen").value;
  document.getElementById("screen").value = exp.slice(0, exp.length - 1);
}
