export function defaultInput() {
    document
        .querySelector("#ageCalculatorDay")
        .addEventListener("input", (ev) => {
            let value = ev.target.value.replace(/\D/g, "");

            if (value.length > 2) {
                value = value.slice(0, 2);
            }

            if (value == "") {
                value = "";
            } else if (value < 0) {
                value = 0;
            } else if (value > 31) {
                value = 31;
            }

            ev.target.value = value;
        });

    document
        .querySelector("#ageCalculatorMonth")
        .addEventListener("input", (ev) => {
            let value = ev.target.value.replace(/\D/g, "");

            if (value.length > 2) {
                value = value.slice(0, 2);
            }

            if (value == "") {
                value = "";
            } else if (value < 0) {
                value = 0;
            } else if (value > 12) {
                value = 12;
            }

            ev.target.value = value;
        });

    document
        .querySelector("#ageCalculatorYear")
        .addEventListener("input", (ev) => {
            let value = ev.target.value.replace(/\D/g, "");
            const dateNow = new Date();

            if (value.length > 4) {
                value = value.slice(0, 4);
            }

            if (value == "") {
                value = "";
            } else if (value < 1) {
                value = 1;
            } else if (value > dateNow.getFullYear()) {
                value = dateNow.getFullYear();
            }

            ev.target.value = value;
        });
}
