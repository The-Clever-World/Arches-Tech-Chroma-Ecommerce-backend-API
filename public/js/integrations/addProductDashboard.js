const addCategory = document.querySelector("#categorySubmit");

if (addCategory) {
    addCategory.addEventListener("click", (e) => {
        console.log(addCategory);

        // category name & image
        const categoryName = document.querySelector("#categoryName").value;
        const categoryImage = document.querySelector("#categoryImage").value;

        console.log(categoryName);
        console.log(categoryImage);

        fetch(`https://chroma-commerce.herokuapp.com/admin/categories/add`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                categoryName: categoryName,
                categoryImage: categoryImage
            })
        }).then((response) => {
            return response.json();
        }).then(res => {
            console.log(res);
            alert(res.name + " category added successfully")
            document.location.reload();
        });
    })
}