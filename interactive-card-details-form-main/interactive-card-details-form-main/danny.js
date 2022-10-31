// const inputs = document.getElementsByTagName("input");
let errors = [];
let ids = ["card_number", "card_cvc", "card_month", "card_year"];
let clean = [...ids];

function handleClick(e) {
  console.log("clicked", e.value);
  if (e.id === "card_number") {
    let val = e.value;
    let newval = "";
    val = val.replace(/\s/g, "");
    for (var i = 0; i < val.length; i++) {
      if (i % 4 == 0 && i > 0) newval = newval.concat(" ");
      newval = newval.concat(val[i]);
    }
    document.getElementById("zeros").innerHTML = newval;
    e.value = newval;
  }
  if (e.id === "card_month") {
    console.log("hmm", e.value);
    document.getElementById("month").innerHTML = e.value;
    if (parseInt(e.value) > 12 || parseInt(e.value) < 1) {
      !errors.includes(e.id) && errors.push(e.id);
    } else {
      errors = errors.filter((err) => err !== e.id);
    }
  }
  if (e.id === "card_year") {
    document.getElementById("year").innerHTML = e.value;
    if (parseInt(e.value) < 22) {
      !errors.includes(e.id) && errors.push(e.id);
    } else {
      errors = errors.filter((err) => err !== e.id);
    }
  }
  if (e.id === "card_cvc") {
    document.getElementById("cvc").innerHTML = e.value;
  }
  if (e.id === "card_name") {
    document.getElementById("name").innerHTML = e.value;
    return;
  }
  while (document.getElementById("zeros").innerHTML.length < 17) {
    document.getElementById("zeros").append("0");
    console.log(document.getElementById("zeros"));
  }
  if (isNaN(e.value.replace(/\s/g, "")) || e.value.length < e.maxLength) {
    console.log("afar", e.id);
    !errors.includes(e.id) && errors.push(e.id);
  } else {
    errors = errors.filter((err) => err !== e.id);
  }
  clean = ids.filter((id) => !errors.includes(id));
  console.log(errors, ids, clean);
  errors.forEach((err) => {
    document.getElementById(err).classList.add("error");
    if (err === "card_month" || err === "card_year") {
      document.getElementById(`date_err`).style.display = "block";
      return;
    }
    document.getElementById(`${err}_err`).style.display = "block";
    // if (ids)
  });
  clean.forEach((id) => {
    console.log(id);
    document.getElementById(id).classList.remove("error");
    if (clean.includes("card_month") && clean.includes("card_year")) {
      document.getElementById(`date_err`).style.display = "none";
    }
    if (id !== "card_month" && id !== "card_year") {
      document.getElementById(`${id}_err`).style.display = "none";
    }
  });
  // switch (errored) {
  //   case "card_number":
  //     e;
  //     document.getElementById("card_number_err").style.display = "block";
  //     break;
  //   case "card_month":
  //     e.classList.add("error");
  //     document.getElementById("date_err").style.display = "block";
  //     break;
  //   case "card_year":
  //     e.classList.add("error");
  //     document.getElementById("date_err").style.display = "block";
  //     break;
  //   case "card_cvc":
  //     e.classList.add("error");
  //     document.getElementById("card_cvc_err").style.display = "block";
  //     break;
  //   default:
  //     e.classList.remove("error");
  //     if (e.id === "card_month" || e.id === "card_year") {
  //       document.getElementById(`date_err`).style.display = "none";
  //     } else {
  //       document.getElementById(`${e.id}_err`).style.display = "none";
  //     }
  //     console.log(e.parentElement.lastChild.previousSibling);
  //     break;
  // }
}

document.getElementById("submit_btn").addEventListener("click", (e) => {
  let disabled = false;
  Array.from(document.getElementsByTagName("input")).forEach((el) => {
    console.log(el.value);
    disabled = !el.value ? true : false;
  });
  if (disabled) {
    e.preventDefault();
  }
  document.getElementById("thank-you").style.display = "block";
  document.getElementById("form").style.display = "none";
});
