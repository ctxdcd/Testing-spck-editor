const options = document.querySelectorAll(".option");
const feedback = document.getElementById("feedback");
const resetButton = document.getElementById("resetButton");

const correctAnswer = "B";

options.forEach((option) => {
    option.addEventListener("click", () => {
        const selectedAnswer = option.dataset.answer;

        // Prevent changing the answer after selection
        options.forEach((button) => {
            button.disabled = true;
        });

        if (selectedAnswer === correctAnswer) {
            option.classList.add("correct");

            feedback.className = "feedback show success";
            feedback.innerHTML =
                "<strong>Correct!</strong><br>" +
                "Ekmek means bread in Turkish. " +
                "Well done! 🎉";
        } else {
            option.classList.add("wrong");

            // Reveal the correct answer
            options.forEach((button) => {
                if (button.dataset.answer === correctAnswer) {
                    button.classList.add("correct");
                }
            });

            feedback.className = "feedback show error";
            feedback.innerHTML =
                "<strong>Not quite!</strong><br>" +
                "The correct answer is <b>Ekmek</b>. " +
                "It means bread in Turkish.";
        }

        resetButton.hidden = false;
    });
});

// Reset the quiz
resetButton.addEventListener("click", () => {
    options.forEach((button) => {
        button.disabled = false;
        button.classList.remove("correct", "wrong");
    });

    feedback.className = "feedback";
    feedback.textContent = "";

    resetButton.hidden = true;
});   