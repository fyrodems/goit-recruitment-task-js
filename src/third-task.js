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

// =item wrapper
const getItem = (imgSmallUrl, imgLargeUrl, imgDescr) => {

  const item = document.createElement("li");

  const link = document.createElement("a");
  link.href = `${imgLargeUrl}`;
  link.style = "pointer-events: none;";
  item.append(link);

  const img = document.createElement('img');
  img.src = `${imgSmallUrl}`;
  img.alt = `${imgDescr}`;
  img.dataset.src = `${imgLargeUrl}`;
  link.append(img);

  return item;
};

const getImgData = (data) => {
  const imgData = [...data].map((el) => ({
    smallImg: el.webformatURL,
    largeImg: el.largeImageURL,
    descr: `${el.type} ${
      [...el.tags.split(",")].find((el) => el.split(" ").length > 1)
        ? [...el.tags.split(",")].find((el) => el.split(" ").length > 1).trim()
        : el.tags.split(",")[0].trim()
    }`,
  }));

  return imgData;
};

// api call
const URL = "https://pixabay.com/api/?key=13965574-3ae6669f35304ffc6cddc1b72";

let query = "";
let page = 0;
let per_page = 20;
let node;

const fetchPictureList = (query, page, per_page) => {
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
        node = document.querySelector("li:last-child img");
        node.onload = () => {
          handlerAutoScroll();
        };
        handlerModalLargeImg();
      })
      .catch((err) =>
        mainContainer.insertAdjacentHTML(
          "beforeend",
          `<p id="err">${err}... Try again</p>`
        )
      );
  }
};

// listners
const handlerSubmit = (e) => {
  e.preventDefault();

  const errEl = document.querySelector("#err");
  errEl && errEl.remove();

  query = input.value;
  page = 1;

  if (list) {
    list.innerHTML = "";
  }

  fetchPictureList(query, page, per_page);
};

const handlerAutoScroll = () => {
  const options = {
    root: null,
    rootMargin: "0px ",
    threshold: 0.1,
  };

  const target = node;

  const callback = (entries, observer) => {
    entries.forEach((entry, arr) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        page++;
        fetchPictureList(query, page, per_page);
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

form.addEventListener("submit", handlerSubmit);