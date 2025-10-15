export const animateCounter = (days, months, years) => {
    const animate = async (total, id) => {
        let count = 0;

        if (total > 100) {
            return (document.querySelector(`#${id} span`).textContent = total);
        }

		let interval = setInterval(() => {
            if (count < total) {
                count++;
            } else {
				clearInterval(interval);
			}
            document.querySelector(`#${id} span`).textContent = count;
        }, 10);
    };

    animate(days, "resultDays");
    animate(months, "resultMonths");
    animate(years, "resultYears");
};
