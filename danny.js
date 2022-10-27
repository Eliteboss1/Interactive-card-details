const inputs = document.getElementsByTagName("input");
let errored = "";
Array.from(inputs).forEach((input) => {
  input.addEventListener("keypress", (e) => {
    if (e.currentTarget.id === "card_number") {
      let val = e.target.value;
      let newval = "";
      val = val.replace(/\s/g, "");
      for (var i = 0; i < val.length; i++) {
        if (i % 4 == 0 && i > 0) newval = newval.concat(" ");
        newval = newval.concat(val[i]);
      }
      document.getElementById("zeros").innerHTML = newval;
      e.target.value = newval;
    }
    while (document.getElementById("zeros").innerHTML.length < 17) {
      document.getElementById("zeros").append("0");
      console.log(document.getElementById("zeros"));
    }
    document.getElementById("month").innerHTML =
      document.getElementById("card_month").value;
    document.getElementById("year").innerHTML =
      document.getElementById("card_year").value;
    document.getElementById("cvc").innerHTML =
      document.getElementById("card_cvc").value;
    // e.preventDefault();
    console.log("jjj", e.target.value);
    if (e.currentTarget.id === "card_name") {
      return;
    }
    errored =
      isNaN(e.target.value.replace(/\s/g, "")) ||
      e.target.value.length < e.currentTarget.maxLength
        ? e.currentTarget.id
        : "";
    if (e.currentTarget.id === "card_month") {
      errored =
        parseInt(e.target.value) > 12 || parseInt(e.target.value) < 1
          ? "card_month"
          : "";
      console.log(e.target.value, errored);
    }
    if (e.currentTarget.id === "card_year") {
      errored = parseInt(e.target.value) < 22 ? "card_year" : "";
    }
    // document.getElementById("card_cvc").value += e.target.value;
    switch (errored) {
      case "card_number":
        e.currentTarget.classList.add("error");
        document.getElementById("card_number_err").style.display = "block";
        break;
      case "card_month":
        e.currentTarget.classList.add("error");
        document.getElementById("date_err").style.display = "block";
        break;
      case "card_year":
        e.currentTarget.classList.add("error");
        document.getElementById("date_err").style.display = "block";
        break;
      case "card_cvc":
        e.currentTarget.classList.add("error");
        document.getElementById("card_cvc_err").style.display = "block";
        break;
      default:
        e.currentTarget.classList.remove("error");
        if (
          e.currentTarget.id === "card_month" ||
          e.currentTarget.id === "card_year"
        ) {
          document.getElementById(`date_err`).style.display = "none";
        } else {
          document.getElementById(`${e.currentTarget.id}_err`).style.display =
            "none";
        }
        console.log(e.currentTarget.parentElement.lastChild.previousSibling);

        break;
    }
    console.log(e.target.value, e.target.value.length);
  });
});
