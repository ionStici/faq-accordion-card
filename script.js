"use strict";

const boxes = document.querySelectorAll(".card__box");
const qns = document.querySelectorAll(".card__qn");
const anss = document.querySelectorAll(".card__ans");
const icons = document.querySelectorAll(".card__icon");

boxes.forEach((box) => {
    box.addEventListener("click", function (e) {
        const current = box.querySelector(".card__qn--active");

        boxes.forEach((box) => box.classList.remove("card__box--active"));
        qns.forEach((qn) => qn.classList.remove("card__qn--active"));
        anss.forEach((ans) => ans.classList.remove("card__ans--active"));
        icons.forEach((icon) => icon.classList.remove("card__icon--active"));

        const wrapper = box.closest(".card__box");
        const qn = box.querySelector(".card__qn");
        const ans = box.querySelector(".card__ans");
        const icon = box.querySelector(".card__icon");

        wrapper.classList.add("card__box--active");
        qn.classList.add("card__qn--active");
        ans.classList.add("card__ans--active");
        icon.classList.add("card__icon--active");

        if (current) {
            wrapper.classList.remove("card__box--active");
            qn.classList.remove("card__qn--active");
            ans.classList.remove("card__ans--active");
            icon.classList.remove("card__icon--active");
        }
    });
});
