const addCategory = document.querySelector("#categorySubmit");
const addProductForm = document.querySelector("#addProductForm");

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
        categoryImage: categoryImage,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        alert(res.name + " category added successfully");
        document.location.reload();
      });
  });
}

addProductForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const value = Object.fromEntries(formData.entries());

  // construct object to be sent to DB

  //filter out null values and empty strings
  //[!warning] mutates object directly
  Object.keys(value).forEach(
    (k) => value[k] == (null || "") && delete value[k]
  );

  // rating and numReviews fixed manually
  const product = {
    categoryName: value.category,
    productName: value.name,
    productPrice: value.price,
    productImages: [value.Image1, value.Image2, value.Image3, value.Image4],
    productCountInStock: value.stock,
    productRating: 4.5,
    productNumReviews: 14,
    productKeyFeatures: [
      value.keyFeature1,
      value.keyFeature2,
      value.keyFeature3,
      value.keyFeature4,
    ],
    productSpecifications: value.specification,
    productHighlights: value.Highlight,
    productOverview: value.overview,
  };

  //   console.log(product);

  //send data to server
  fetch(`http://localhost:5000/admin/product/add`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      console.log(res);
      alert("Product Added successfully");
      document.location.reload();
    });
});
