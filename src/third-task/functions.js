// item wrapper
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
    const imgData = [...data].map((elem) => ({
      smallImg: elem.webformatURL,
      largeImg: elem.largeImageURL,
      descr: `${elem.type} ${
        [...elem.tags.split(",")].find((elem) => elem.split(" ").length > 1)
          ? [...elem.tags.split(",")].find((elem) => elem.split(" ").length > 1).trim()
          : elem.tags.split(",")[0].trim()
      }`,
    }));
  
    return imgData;
  };

  export { getItem, getImgData }