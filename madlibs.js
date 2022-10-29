/**
 * Complete the implementation of parseStory.
 *
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 * ['I', 'walk', 'through', 'the', 'color', 'jungle', '.', 'I', 'take', 'out', 'my', 'beautiful[a]', 'canteen', '.', "There's", 'a', 'colorful[a]', 'parrot', 'with', 'a', 'giant[a]', 'worm[n]', 'in', 'his', 'mouth', 'right', 'there', 'in', 'front', 'of', 'me', 'in', 'the', 'enormous[a]', 'trees', '!', 'I', 'gaze', 'at', 'his', 'magnificient[a]', 'wings[n]', '.', 'A', 'sudden', 'sound', 'awakes', 'me', 'from', 'my', 'daydream', '!', 'A', 'panther’s', 'jumped[v]', 'in', 'front', 'of', 'my', 'head', '!', 'I', 'hold[v]', 'his', 'terrifying[a]', '', 'breath', '.', 'I', 'remember', 'I', 'have', 'a', 'packet', 'of', 'chips[n]', 'that', 'makes', 'go', 'into', 'a', 'deep', 'slumber', '!', 'I', 'gave[v]', 'it', 'away', 'from', 'me', 'in', 'front', 'of', 'the', 'desk[n]', '.', 'Yes', "he's", 'eating', 'it', …]
 *
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
let objectsArray=[];
function parseStory(rawStory) {
   // Your code here.
  
    let storyArr =rawStory.split(' ')
  
    storyArr.forEach(element => {
      let a = element.match(/\w+(?=\s*\[)/g)
      let b = (element !== a)
      let poss = element.substr(-3)
    let wordType = ()=>{if(poss==='[a]'){return 'adjective'} else if(poss==='[n]'){return 'noun'} else if(poss==='[v]'){return 'verb'}};
      if(a){return objectsArray.push({word:element.slice(0,-3),pos:wordType()})} 
      else if(b){return objectsArray.push({word:element})} 
    });
    let p = document.getElementById('paragraph');    //now I displyed the first story with it's inputs    //line 44 to 60
   objectsArray.map(object =>{
    if(object.pos){
       input = document.createElement('input')
      input.setAttribute('type','text')
      input.setAttribute('placeholder',object.pos)
      input.setAttribute('class','inputs')
      
      p.appendChild(input)
      return 
    }
    else{
     text = document.createTextNode(' ' + object.word + '  ')
     p.appendChild(text)
     return
    }
    });
    let inputs = document.getElementsByClassName('inputs');
    let p2 = document.getElementById('paragraph2')
    objectsArray.map(object=>{
    if(object.pos){
        let value = document.createElement('span')
        value.setAttribute('id','span')
        p2.appendChild(value)
     }
    else{
        text = document.createTextNode(' '+ object.word  +' ')
        p2.appendChild(text)
     }
    });
    
    
    for(let i=0;i<inputs.length;i++){
      inputs[i].addEventListener('keyup',e=>{
        if(e.which === 13){
          e.preventDefault()
         inputs[i].nextElementSibling.focus();
        }
      })
    };
    let btn = document.getElementById('btn');
    btn.addEventListener('click',e=>{
     e.preventDefault();
     let span = document.getElementById('span')
     span.innerText = inputs.value;
      
      

    })

    
};
  

  
  
  

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */
  getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    console.log(processedStory );
  });
