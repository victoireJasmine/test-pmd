const tags = [
    {id:1, label:"équilibré"},
    {id:2, label:"recette"},
    {id:3, label:"alimentaire"},
    {id:4, label:"article"},
    {id:5, label:"bio"}
    
]
const article =[
    {id:1, label:"Lorem ipsum dolor sit amet", img:"salade.png"},
    {id:2, label:"Lorem ipsum dolor sit amet", img:"riz.png"},
    {id:3, label:"L'education nutritionnelle au sein des familles", img:"enfant.png"},
    {id:4, label:"Lorem ipsum dolor sit amet", img:"salade2.png"},
    {id:5, label:"Lorem ipsum dolor sit amet", img:"salade.png"},
    {id:6, label:"Lorem ipsum dolor sit amet", img:"riz.png"},
    

]
const $displayTags = document.querySelector(".tags");
const $displayArticles = document.querySelector(".articles");
if ($displayTags) {
    tags.forEach(element => {
        $displayTags.innerHTML += `<a href="#" class="label-green">${element.label}</a>`
        
    });
    
}
if ($displayArticles) {
    article.forEach(element => {
        $displayArticles.innerHTML += `
        <article class="article">
            <div class="article-illustration">
                <img src="./img/articles/${element.img}" alt="">
            <p class="article-desc">${element.label}</p>
            </div>
            
            <div class="article-icon">
                <img src="./img/Group.svg" alt="">
                <img src="./img/Like filaire.svg" alt="">
            </div>

        </article>
        `
    });
    
}
