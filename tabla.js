const btnAplicar = document.querySelector("#btnAplicar");
const latabla = document.createElement("table");
const cuerpoTabla = document.createElement("tbody");

latabla.appendChild(cuerpoTabla);

btnAplicar.addEventListener("click", () => {
    cuerpoTabla.insertRow(0);

    cuerpoTabla.rows[0].insertCell(0);
    cuerpoTabla.rows[0].cells[0].appendChild(document.createTextNode("Victor"));

    cuerpoTabla.rows[0].insertCell(1);
    cuerpoTabla.rows[0].cells[1].appendChild(document.createTextNode("Manuel"));

    cuerpoTabla.rows[0].insertCell(2);
    cuerpoTabla.rows[0].cells[2].appendChild(document.createTextNode("Montoya"));

    cuerpoTabla.rows[0].insertCell(3);
    cuerpoTabla.rows[0].cells[3].appendChild(document.createTextNode("Quintero"));

    cuerpoTabla.insertRow(1);

    cuerpoTabla.rows[1].insertCell(0);
    cuerpoTabla.rows[1].cells[0].appendChild(document.createTextNode("Victor"));

    cuerpoTabla.rows[1].insertCell(1);
    cuerpoTabla.rows[1].cells[1].appendChild(document.createTextNode("Manuel"));

    cuerpoTabla.rows[1].insertCell(2);
    cuerpoTabla.rows[1].cells[2].appendChild(document.createTextNode("Montoya"));

    cuerpoTabla.rows[1].insertCell(3);
    cuerpoTabla.rows[1].cells[3].appendChild(document.createTextNode("Quintero"));

    cuerpoTabla.insertRow(2);

    cuerpoTabla.rows[2].insertCell(0);
    cuerpoTabla.rows[2].cells[0].appendChild(document.createTextNode("Victor"));

    cuerpoTabla.rows[2].insertCell(1);
    cuerpoTabla.rows[2].cells[1].appendChild(document.createTextNode("Manuel"));

    cuerpoTabla.rows[2].insertCell(2);
    cuerpoTabla.rows[2].cells[2].appendChild(document.createTextNode("Montoya"));

    cuerpoTabla.rows[2].insertCell(3);
    cuerpoTabla.rows[2].cells[3].appendChild(document.createTextNode("Quintero"));

    cuerpoTabla.insertRow(3);

    cuerpoTabla.rows[3].insertCell(0);
    cuerpoTabla.rows[3].cells[0].appendChild(document.createTextNode("Victor"));

    cuerpoTabla.rows[3].insertCell(1);
    cuerpoTabla.rows[3].cells[1].appendChild(document.createTextNode("Manuel"));

    cuerpoTabla.rows[3].insertCell(2);
    cuerpoTabla.rows[3].cells[2].appendChild(document.createTextNode("Montoya"));

    cuerpoTabla.rows[3].insertCell(3);
    cuerpoTabla.rows[3].cells[3].appendChild(document.createTextNode("Quintero"));

    cuerpoTabla.insertRow(4);

    cuerpoTabla.rows[4].insertCell(0);
    cuerpoTabla.rows[4].cells[0].appendChild(document.createTextNode("Victor"));

    cuerpoTabla.rows[4].insertCell(1);
    cuerpoTabla.rows[4].cells[1].appendChild(document.createTextNode("Manuel"));

    cuerpoTabla.rows[4].insertCell(2);
    cuerpoTabla.rows[4].cells[2].appendChild(document.createTextNode("Montoya"));

    cuerpoTabla.rows[4].insertCell(3);
    cuerpoTabla.rows[4].cells[3].appendChild(document.createTextNode("Quintero"));

    latabla.setAttribute(
        "style",
        "background-color:green; border:2px solid red;"
    );

    cuerpoTabla.rows[0].cells[0].setAttribute(
        "style",
        "border-bottom:2px solid red;"
    );
    cuerpoTabla.rows[0].cells[1].setAttribute(
        "style",
        "border-bottom:2px solid red;"
    );
    cuerpoTabla.rows[0].cells[2].setAttribute(
        "style",
        "border-bottom:2px solid red;"
    );
    cuerpoTabla.rows[0].cells[3].setAttribute(
        "style",
        "border-bottom:2px solid red;"
    );
    cuerpoTabla.rows[1].cells[0].setAttribute(
        "style",
        "border-bottom:2px solid red;"
    );
    cuerpoTabla.rows[1].cells[1].setAttribute(
        "style",
        "border-bottom:2px solid red;"
    );
    cuerpoTabla.rows[1].cells[2].setAttribute(
        "style",
        "border-bottom:2px solid red;"
    );
    cuerpoTabla.rows[1].cells[3].setAttribute(
        "style",
        "border-bottom:2px solid red;"
    );

    cuerpoTabla.rows[2].cells[0].setAttribute(
        "style",
        "border-bottom:2px solid red;"
    );
    cuerpoTabla.rows[2].cells[1].setAttribute(
        "style",
        "border-bottom:2px solid red;"
    );
    cuerpoTabla.rows[2].cells[2].setAttribute(
        "style",
        "border-bottom:2px solid red;"
    );
    cuerpoTabla.rows[2].cells[3].setAttribute(
        "style",
        "border-bottom:2px solid red;"
    );

    cuerpoTabla.rows[3].cells[0].setAttribute(
        "style",
        "border-bottom:2px solid red;"
    );
    cuerpoTabla.rows[3].cells[1].setAttribute(
        "style",
        "border-bottom:2px solid red;"
    );
    cuerpoTabla.rows[3].cells[2].setAttribute(
        "style",
        "border-bottom:2px solid red;"
    );
    cuerpoTabla.rows[3].cells[3].setAttribute(
        "style",
        "border-bottom:2px solid red;"
    );
    btnAplicar.hidden = true;
});

document.body.appendChild(latabla);