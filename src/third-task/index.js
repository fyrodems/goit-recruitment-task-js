import { getImgData, getItem } from "./functions";

//prepare html form
const mainContainer = document.querySelector('.main-container.task-3')

const form = document.createElement('form')
form.id = "search-form";
if(mainContainer) {
    mainContainer.append(form);
}

const input = document.createElement('input');
input.type = "text";
input.name = "query";
input.autocomplete = "off";
input.placeholder = "Search images...";
form.append(input);


// list of images
const list = document.createElement("ul");
list.style = "list-style: none; width: 800px; margin: 0 auto; padding-top: 46px;";

// api call
const URL = "https://pixabay.com/api/?key=30641011-b4fcfbf76d2c7e5799e38980b";

let query = "";
let page = 0;
let per_page = 20;
let img;

const getImgs = (query, page, per_page) => {
  if (query) {
    fetch(`${URL}&q=${query}&page=${page}&per_page=${per_page}`)
      .then((res) => res.json())
      .then((query) => query.hits)
      .then((data) => getImgData(data))
      .then((imgs) => {
        mainContainer.append(list);
        [...imgs].map((img) => {
          const { smallImg, largeImg, descr } = img;
          const item = getItem(smallImg, largeImg, descr);
          list.append(item);
        });
      })
      .then(() => {
        img = document.querySelector("li:last-child img");
        img.onload = () => {
          autoScroll();
        };
        handlerModalLargeImg();
      })
      .catch((err) => {
        console.log(err);
        mainContainer.insertAdjacentHTML('beforeend', `<span>Something is wrong... Try again</span>`);
      }
    );
  }
};

// listners
const submitAction = (e) => {
  e.preventDefault();

  const errEl = document.querySelector("#err");
  errEl && errEl.remove();

  query = input.value;
  page = 1;

  if (list) {
    list.innerHTML = "";
  }

  getImgs(query, page, per_page);
};

const autoScroll = () => {
  const options = {
    root: null,
    rootMargin: "0%",
    threshold: 0.1,
  };

  const target = img;

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        page++;
        getImgs(query, page, per_page);
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(target);
};

const handlerModalLargeImg = () => {
  if (list.childNodes.length <= per_page) {
    document.querySelector("ul").onclick = ({ target }) => {
      const link = target.firstChild;
      link.setAttribute("style", "pointer-events: none;");
      const { href } = link;

      basicLightbox
        .create(`<img src=${href}>`)
        .show();
    };
  }
};

form.addEventListener("submit", submitAction);