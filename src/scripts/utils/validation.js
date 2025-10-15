const checkEmpty = () => {
    let valid = true;

    document.querySelectorAll("#ageCalculator input").forEach((input) => {
        const invalidMessage = document.querySelector(`#${input.id} + p`);

        if (!input.value) {
            invalidMessage.classList.add("show");
            invalidMessage.textContent = "This field is required";

            valid = false;
        } else {
            invalidMessage.classList.remove("show");
            invalidMessage.textContent = "";
        }
    });

    return valid;
};

const checkValidDate = (day, month, year) => {
    const date = new Date(year, month - 1, day);
	let valid = true;

    if (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    ) {
        document.querySelector("#ageCalculatorDay + p").classList.add("show");
        document.querySelector("#ageCalculatorDay + p").textContent =
            "Must be a valid day";

        valid = false;
    } else {
        document.querySelector("#ageCalculatorDay + p").classList.remove("show");
        document.querySelector("#ageCalculatorDay + p").textContent = "";
    }

	return valid;
};

const checkFuture = (day, month, year) => {
    let valid = true;

    const dateNow = new Date();

    const formDate = new Date(year, month - 1, day);

    if (formDate.getTime() > dateNow.getTime()) {
        document.querySelector("#ageCalculatorYear + p").classList.add("show");
        document.querySelector("#ageCalculatorYear + p").textContent =
            "Must be in the past";

        valid = false;
    } else {
        document.querySelector("#ageCalculatorYear + p").classList.remove("show");
        document.querySelector("#ageCalculatorYear + p").textContent = "";
    }

    return valid;
};

export const validateForm = (day, month, year) => {
    let valid = true;
	
    if (
        !checkEmpty() ||
        !checkValidDate(day, month, year) ||
        !checkFuture(day, month, year)
    ) {
        valid = false;
    }

    if (!valid) {
        document
            .querySelectorAll("#ageCalculator .form-input-container")
            .forEach((input) => {
                input.classList.add("invalid");
            });
    } else {
        document
            .querySelectorAll("#ageCalculator .form-input-container")
            .forEach((input) => {
                input.classList.remove("invalid");
            });
    }

	return valid;
};
