const reverseWords=(text)=>{
    let reverse = text.split(" ").map(word => word.split("").reverse().join(""));
    return reverse.join(" ");
}

const text = "This is a sunny day";
const word = reverseWords(text);
console.log(word);