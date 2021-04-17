$hero_input = document.getElementById("hero_input");
$form_alert = document.getElementById("form_alert");
$hero_form = document.getElementById("hero_form");

const heroFormCheckMail = () => {
  if ($hero_input.value.includes("@")) {
    $hero_form.submit();
  } else {
    $hero_input.style.border = "2px solid var(--Bright-Red)";
    $form_alert.style.visibility = "visible";
  }
};
