// let addProduct = document.querySelector("#addProduct");
// let NameInput = document.querySelector("#NameInput");
// let PriceInput = document.querySelector("#PriceInput");
// let CategoryInput = document.querySelector("#CategoryInput");
// let DescriptionInput = document.querySelector("#DescriptionInput");
// let bodyTable = document.querySelector("#bodyTable");
// let currentElement = document.querySelector("#currentElement");
// let smallNameInput = document.querySelector("#smallNameInput");
// let smallPriceInput = document.querySelector("#smallPriceInput");
// let smallCategoryInput = document.querySelector("#smallCategoryInput");
// let SearchInput = document.querySelector("#SearchInput");


// let inputData = null
// if (localStorage.getItem("productsDataBase") != null) {
//     inputData = JSON.parse(localStorage.getItem("productsDataBase"))
//     createProducts()
// } else {
//     inputData = []
// }


// addProduct.addEventListener("click", () => {
//     let objectData = {
//         NameInput: NameInput.value,
//         PriceInput: PriceInput.value,
//         CategoryInput: CategoryInput.value,
//         DescriptionInput: DescriptionInput.value,
//     }
//     let isValid = validateInputs(objectData.NameInput, objectData.PriceInput, objectData.CategoryInput)
//     currentElement.innerHTML = ""
//     if (isValid) {
//         inputData.push(objectData)
//         localStorage.setItem("productsDataBase", JSON.stringify(inputData))
//         createProducts()
//         currentElement.innerHTML = ""
//         emptyInputs()
//         clearInputs()
//     } else {
//         currentElement.innerHTML = "you must fill all the fields"
//         emptyInputs()
//     }
// })

// function createProducts(comingData = inputData) {
//     let content = ""
//     comingData.forEach((item, index) => (
//         content += `
//         <tr class="">
//             <th scope="row">${index}</th>
//             <td>${item.NameInput}</td>
//             <td>${item.PriceInput}</td>
//             <td>${item.CategoryInput}</td>
//             <td>${item.DescriptionInput}</td>
//             <td> <button onClick={updateElement(${index})} class="btn btn-success">update</button></td>
//             <td><button onClick={deleteElement(${index})} class="btn btn-danger ms-3">delete</button></td>
//         </tr>
//         `
//     ))
//     bodyTable.innerHTML = content
// }

// const deleteElement = (index) => {
//     inputData.splice(index, 1)
//     createProducts()
// }
// const updateElement = (index) => {
//     if (NameInput.value.length > 0 || PriceInput.value.length > 0 || CategoryInput.value.length > 0 || DescriptionInput.value.length > 0) {
//         currentElement.innerHTML = `add the current element first`
//     } else {
//         NameInput.value = inputData[index].NameInput
//         PriceInput.value = inputData[index].PriceInput
//         CategoryInput.value = inputData[index].CategoryInput
//         DescriptionInput.value = inputData[index].DescriptionInput
//         deleteElement(index)
//     }
// }
// const searchElement = (searchValue) => {
//     let newData = []
//     if (searchValue.trim().length > 0) {
//         for (let i = 0; i < inputData.length; i++) {
//             if (inputData[i].NameInput.toLowerCase().includes(searchValue.toLowerCase())) {
//                 newData.push(inputData[i])
//             }
//         }
//     } else {
//         newData = inputData
//     }
//     createProducts(newData)



// }
// function submitSearch() {
//     let newData = []
//     let searchValue = SearchInput.value
//     if (searchValue.trim().length > 0) {
//         for (let i = 0; i < inputData.length; i++) {
//             if (inputData[i].NameInput.toLowerCase().includes(searchValue.toLowerCase())) {
//                 newData.push(inputData[i])
//             }
//         }
//     } else {
//         newData = inputData
//     }
//     createProducts(newData)
// }

// const validateInputs = (NameInput, PriceInput, CategoryInput) => {
//     let valid_NameInput = NameInput.trim().length
//     let valid_PriceInput = PriceInput.trim().length
//     let valid_CategoryInput = CategoryInput.trim().length
//     if (valid_NameInput > 0 && valid_PriceInput > 0 && valid_CategoryInput > 0) {
//         return true
//     } else {
//         return false
//     }
// }

// const emptyInputs = () => {
//     if (NameInput.value.length <= 0) {
//         smallNameInput.innerHTML = 'Name is required'
//     } else {
//         smallNameInput.innerHTML = ""
//     }
//     if (PriceInput.value.length <= 0) {
//         smallPriceInput.innerHTML = 'Price is required'
//     } else {
//         smallPriceInput.innerHTML = ""
//     }

//     if (CategoryInput.value.length <= 0) {
//         smallCategoryInput.innerHTML = 'Category is required'
//     } else {
//         smallCategoryInput.innerHTML = ""
//     }

// }
// const clearInputs = () => {
//     NameInput.value = ""
//     PriceInput.value = ""
//     CategoryInput.value = ""
//     DescriptionInput.value = ""
// }



var products = document.querySelectorAll(".product")
var prices = document.querySelectorAll("#price")
var totalPriceDefinition = document.querySelector(".totalPrice")

var totalPrice = 0;
products.forEach((product, index) => {
    product.addEventListener("click", () => {
        totalPrice += Number(prices[index].textContent);
        console.log(totalPrice)
        totalPriceDefinition.innerHTML = totalPrice
    })
})
