let movieList = [
  {
    id: 1,
    title: "어벤저스",
    director: 1,
  },
  {
    id: 2,
    title: "블랙펜서2",
    director: 2,
  },
];

let directorList = [
  {
    id: 1,
    name: "안소니 루소",
    movies: [
      {
        id: 1,
        title: "어벤저스",
        director: 1,
      },
      {
        id: 3,
        title: "그레이맨",
        director: 1,
      },
    ],
  },
  {
    id: 2,
    name: "라이언 쿠글러",
    movies: [
      {
        id: 2,
        title: "블랙펜서2",
        director: 2,
      },
      {
        id: 4,
        title: "크리드",
        director: 2,
      },
    ],
  },
];

function searchTitle(title) {
  return new Promise(function (resolve, reject) {
    // setTimeout은 단순히 서버에서 받아오는 시간을 가정하기 위해 사용
    setTimeout(function () {
      let movie = movieList.find((item) => {
        return item.title === title;
      });

      // if문을 통한 여러 에러를 분기 처리. => reject나 resolve 이후의 코드는 실행되지 않기 때문에 else를 사용하지 않았다.
      if (typeof title !== "string") reject("영화제목은 문자열이어야합니다.");
      if (!movie) reject("해당 영화가 존재하지 않습니다.");
      resolve(movie);
    }, 2000);
  });
}

// id값을 통해 감독을 resolve하는 Promise 반환
function getDirector(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let director = directorList.find((item) => item.id === id);

      if (!director) reject("해당하는 감독이 존재하지 않습니다.");
      resolve(director);
    }, 2000);
  });
}

// Promise를 반환하는 함수를 중첩해서 사용하면 복잡한다.
searchTitle("어벤저스")
  .then(function (res) {
    return getDirector(res.director);
  })
  .then(function (res) {
    document.querySelector(".director").innerText = res.name;
    res.movies.forEach(function (item) {
      document.querySelector(".movieList").innerHTML += `<li>
            <h3>${item.title}</h3>
        </li>`;
    });
  })
  .catch(function (err) {
    console.log(err);
  });

async function render(title) {
  try {
    let movie = await searchTitle(title);
    let director = await getDirector(movie.director);

    document.querySelector(".director").innerText = director.name;

    // 기존 영화 목록 비우기
    let movieListElem = document.querySelector(".movieList");
    movieListElem.innerHTML = "";

    director.movies.forEach(function (item) {
      movieListElem.innerHTML += `<li>
                <h3>${item.title}</h3>
            </li>`;
    });
  } catch (err) {
    console.log(err);
  }
}

render("블랙펜서2");

/* 
    fetch : http 통신을 통해 데이터를 받아올 수 있다. => 기본값은 GET
        => Response : 요청에 대한 결과값을 가진 객체. => 서버에서 보내준 응답. => 반대되는 개념은 Request(요청)
*/
// fetch("http://localhost:3000/posts").then(function (res) {
//   res.json().then(function (res) {
//     console.log(res);
//   });
// });

// REST API : GET(읽기), POST(쓰기), PATCH/PUT(업데이트), DELETE(삭제) => Create, Read, Update, Delete => CRUD
//  https://localhost:3000/posts => 같은 URL이어도 메서드에 따라 통신이 달라진다.

function fetchData() {
  axios.get("http://localhost:3000/posts").then(function (res) {
    console.log(res);
    res.data.forEach((item) => {
      document.querySelector(".postList").innerHTML += `<li>
            ${item.title} - ${item.author}
        </li>`;
    });
  });
}

fetchData();

let btnSubmit = document.querySelector("button");
let inputTitle = document.querySelector(".title");

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  axios
    .post("http://localhost:3000/comments", {
      body: inputTitle.value,
      postId: 1,
    })
    .then(function (res) {
      console.log(res);
    });
});
