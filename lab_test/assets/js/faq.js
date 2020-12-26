var faqTitle = document.querySelectorAll(".faq__item__title");
var faqTitleArr = Array.from(faqTitle);
faqTitleArr.forEach(function(item) {
    item.onclick = function() {
        item.classList.toggle('arrow-up');
        item.classList.toggle('arrow-down');
        item.nextElementSibling.classList.toggle("display__block");
        
    }
})