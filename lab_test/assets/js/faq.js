var faqTitle = document.querySelectorAll(".faq__item__title");
var faqTitleArr = Array.from(faqTitle);
faqTitleArr.forEach(function(item) {
    item.onclick = function() {
        console.log(item.nextElementSibling);
        item.nextElementSibling.classList.toggle("display__block");
    }
})