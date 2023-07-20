let toggle_all=document.querySelectorAll(".toggle-all");

let codecademy=document.querySelector("#coedecademy");

let toggled=true;
toggle_all.forEach((elem) => {
    elem.addEventListener("click", () => {
        toggled=!toggled;
        if (!toggled) {
            let elem_id=elem.parentElement.children[0].id;
            if (elem_id=="codecademy") {
                let codecademy=document.querySelector(`#${elem_id}`);
                codecademy.style.transform="translate(3px, -3px)";
                codecademy.style.boxShadow="-6px 6px 0px #10162f";
            } else if (elem_id=="hannahyockel") {
                let hannahyockel=document.querySelector(`#${elem_id}`);
                hannahyockel.style.transition=".2s ease";
                hannahyockel.style.backgroundColor="rgba(100,77,237,0.16)";
            }
        } else {
            let elem_id=elem.parentElement.children[0].id;
            if (elem_id=="codecademy") {
                let codecademy=document.querySelector(`#${elem_id}`);
                codecademy.style.transform="translate(0)";
                codecademy.style.boxShadow="";
            }
            else if (elem_id=="hannahyockel") {
                let hannahyockel=document.querySelector(`#${elem_id}`);
                hannahyockel.style.transition=".2 ease";
                hannahyockel.style.backgroundColor="rgba(100,77,237,0.08)";
            }
        }
    });
});