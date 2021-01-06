
const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.nav__container');
const autodiagnosisPicture = document.querySelector('.autodiagnosis__picture');
const autodiagnosisEffect = document.querySelector('.autodiagnosis__effect');

console.log(autodiagnosisEffect);

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  navContainer.classList.toggle('nav__container--active');
}

const hideNavContainer = (e) => {
  console.log("run function hideContainer");
  const item = e.target;

  if (item.classList[0] === "nav__link") {
    console.log("i got you my nav__link!");
    navContainer.classList.remove('nav__container--active');
    hamburger.classList.remove('hamburger--active');
  }
}

const chooseFootProblem = (e) => {
  const footArea = e.target;
  console.log("chooseFootProblem function working"); 
  let diagnosis = "";

  switch (footArea.classList[1]) {
    case "autodiagnosis__choice--ankle":
      diagnosis = "<p>BÓL STAWU SKOKOWEGO:</p> <ul> <li>zmiany zwyrodnieniowe <li>ostre uszkodzenie chrząstki <li>skręcenie stawu skokowego <li>złamanie kostek goleni </ul><p>BÓL PONIŻEJ KOSTKI PRZYŚRODKOWEJ:</p> <ul> <li>niewydolność ścięgna mięśnia piszczelowego tylnego</li><li> zespół kanału stępu<li></ul>"
      break;
    case "autodiagnosis__choice--achilles":
      diagnosis = "<p>BÓL W TYLNEJ OKOLICY:</p><ul><li>tendinopatia ścięgna Achillesa</li><li>deformacja Haglunda</li><li>dodatkowa kostka trójkątna</li></ul>"
      break;
    case "autodiagnosis__choice--heel":
      diagnosis = "<p>BÓL PIĘTY:</p><ul><li>zapalenie rozcięgna podeszwowego</li><li>neuralgia Baxtera</li><li>atrofia poduszki tłuszczowej pięty</li></ul>"
      break;  
    case "autodiagnosis__choice--instep":
      diagnosis = "<p>BÓL GRZBIETU STOPY:</p><ul><li>zmiany zwyrodnieniowe</li><li>uszkodzenie stawu Lisfranca</li><li>płaskostopie podłużne</li></ul>"
      break;
    case "autodiagnosis__choice--mtp":
      diagnosis ="<p>BÓL STAWU PALUCHA:</p><ul><li>paluch koślawy</li><li>paluch sztywny</li><li>podagra</li><li>uszkodzenia trzeszczek</li><li>palec boiskowy</li></ul>"
      break;
    case "autodiagnosis__choice--forefoot":
      diagnosis = "<p>BÓL PRZODOSTOPIA:<p><ul><li>płaskostopie poprzeczne</li><li>nerwiak Mortona</li><li>zapalenie kaletek międzyśródstopnych</li><li>choroba Freiberga-Kohlera II</li></ul>"
        break;
    case "autodiagnosis__choice--toes":
      diagnosis = "<p>BÓL PALCÓW:</p><ul><li>palec młotkowaty (widoczna deformacja palca)</li><li>nerwiak Mortona (ból promieniujący)</li></ul>"
      break;
    default:
      diagnosis = "Wybierz niebieskie pole w obrębie stopy"
  } 
  autodiagnosisEffect.innerHTML = diagnosis;
}

console.log(diagnosis);

hamburger.addEventListener('click', handleClick);
navContainer.addEventListener('click', hideNavContainer);
autodiagnosisPicture.addEventListener('click', chooseFootProblem);
