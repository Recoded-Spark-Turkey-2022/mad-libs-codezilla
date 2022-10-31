let objectsArray = [];
function parseStory(rawStory) {
  let storyArr = rawStory.split(" ");
  storyArr.forEach((element) => {
    let a = element.match(/\w+(?=\s*\[)/g);
    let b = element !== a;
    let poss = element.substr(-3);
    let wordType = () => {
      if (poss === "[a]") {
        return "adjective";
      } else if (poss === "[n]") {
        return "noun";
      } else if (poss === "[v]") {
        return "verb";
      }
    };
    if (a) {
      return objectsArray.push({ word: element.slice(0, -3), pos: wordType() });
    } else if (b) {
      return objectsArray.push({ word: element });
    }
  });
  let inputvalue;
  let p = document.getElementById("paragraph");
  objectsArray.map((object, index) => {
    if (object.pos) {
      let input = document.createElement("input");

      input.setAttribute("type", "text");
      input.setAttribute("placeholder", object.pos);
      input.setAttribute("class", "inputs");
      input.setAttribute("maxLength", "20");
      p.appendChild(input);
      input.addEventListener("input", (e) => {
        inputvalue = e.target.value;
        let x = document.getElementById(index);
        x.innerText = e.target.value;
      });
    } else {
      let text = document.createTextNode(" " + object.word);
      p.appendChild(text);
      return;
    }
  });
  let inputs = document.getElementsByClassName("inputs");
  let p2 = document.getElementById("paragraph2");
  objectsArray.map((object, index) => {
    if (object.pos) {
      valueSpan = document.createElement("span");
      valueSpan.setAttribute("id", index);
      valueSpan.style.display = "none";
      p2.appendChild(valueSpan);
    } else {
      text = document.createTextNode(" " + object.word + " ");
      p2.appendChild(text);
    }
  });
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", (e) => {
      if (e.which === 13 || e.which === 39) {
        e.preventDefault();
        inputs[i].nextElementSibling.focus();
      } else if (e.which === 37) {
        e.preventDefault();
        inputs[i].previousElementSibling.focus();
      }
    });
  }
  let btn = document.getElementById("btn");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let y = document.querySelectorAll("span");
    y.forEach((spanel) => {
      spanel.style.display = "inline";
      spanel.style.fontWeight = "700";
      spanel.style.color = "blue";

      var preview = document.getElementById("preview");
      var story = document.getElementById("story");
      if (preview.style.display === "none") {
        preview.style.display = "block";
      } else {
        story.style.display = "none";
        preview.style.display = "flex";
        preview.style.justifyContent = "center";
        preview.style.alignItems = "center";
        preview.style.flexDirection = "column";
      }
    });
  });
}

//let newHeader = header.charAt(0).toUpperCase() + header.slice(1);

//console.log(newHeader);

var headers = document.getElementsByTagName("h1");
for (var i = 0, len = headers.length; i < len; i++) {
  headers[i].innerHTML = headers[i].innerHTML.toUpperCase();
  headers[i].style.backgroundColor = "rgb(50 45 51 / 69%)";
  headers[i].style.color = "#00e7ff";
  headers[i].style.borderRadius = "50px";
}

// function myFunction() {

// }

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory().then(parseStory);
