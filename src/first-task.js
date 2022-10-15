class StringBuilder {
    constructor(baseString = "") {
      this.value = baseString;
    }
  };
  
  StringBuilder.prototype.append = function (str) {
    this.value = this.value + str;
    return this;
  };
  
  StringBuilder.prototype.prepend = function (str) {
    this.value = str + this.value;
    return this;
  };
  
  StringBuilder.prototype.pad = function (str) {
    this.value = str + this.value + str;
    return this;
  };
  
  const builder = new StringBuilder(".");
  builder.append("^").prepend("^").pad("=");
  
  console.log(builder);

//add result to dom

document.querySelector('#result').addEventListener('click', () => {
    const resultDiv = document.createElement('div');
    resultDiv.textContent = builder.value;
    resultDiv.classList = 'task1-result'
    resultDiv.style = "margin:30px; font-size: 20px;"

    document.querySelector('.main-container').appendChild(resultDiv);
})