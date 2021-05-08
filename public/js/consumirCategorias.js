const tableCategories = document.querySelector('table');
const fragment = document.createDocumentFragment()
console.log(tableCategories);
const getCategories = async() => {

    const result = await fetch('http://127.0.0.1:8000/api/showCategory');
    const data = await result.json()
        /*  data.forEach(category => {
             console.log(category.categories.length);
         }); */
    const categories = Object.values(data)

    categories.forEach(category => {
        console.log(category);
        const categoryName = tableCategories.querySelector('#categoryName').textContent = category.length
        const categoryDescription = tableCategories.querySelector('#categoryDescription')


    });
    console.log(data);

}

getCategories()