import { validateForm } from "../utils/validation.js";
import { animateCounter } from "./counter.js";

const calculateAge = (day, month, year) => {
    const dateNow = new Date();
    const [dateNowYear, dateNowMonth, dateNowDay] = [
        dateNow.getFullYear(),
        dateNow.getMonth() + 1,
        dateNow.getDate(),
    ];

    let diffDays = dateNowDay - day;
    let diffMonths = dateNowMonth - month;
    let diffYears = dateNowYear - year;

    if (diffDays < 0) {
        diffMonths -= 1;
        const diffDate = new Date(dateNowYear, diffMonths - 1, 0).getDate();
        diffDays += diffDate;
    }

    if (diffMonths < 0) {
        diffYears -= 1;
        diffMonths += 12;
    }

    return {
        days: diffDays,
        months: diffMonths,
        years: diffYears,
    };
};

export const submitForm = () => {
    const formDayValue = document.querySelector("#ageCalculatorDay").value;
    const formMonthValue = document.querySelector("#ageCalculatorMonth").value;
    const formYearValue = document.querySelector("#ageCalculatorYear").value;

    if (!validateForm(formDayValue, formMonthValue, formYearValue)) {
        document.querySelector("#resultYears span").textContent = "--";
        document.querySelector("#resultMonths span").textContent = "--";
        document.querySelector("#resultDays span").textContent = "--";
        return;
    }

    const age = calculateAge(formDayValue, formMonthValue, formYearValue);

    animateCounter(age.days, age.months, age.years);
    return;
};
