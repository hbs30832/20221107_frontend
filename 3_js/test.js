fetch("http://localhost:3000/posts", {
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "manual",
  body: JSON.stringify({
    title: "test",
    author: "hbs9312",
  }),
})
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    console.log(res);
  });
