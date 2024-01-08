const queryString= window.location.search;
const urlParams = new URLSearchParams(queryString);

const wordId= urlParams.get('id');

console.log(`wordId là: ${wordId}`);

//update the value of h3 #dynamicHeader with the wordId, nhớ đảm bảo word-Detail load hết rồi mới thực thi callback
document.addEventListener("DOMContentLoaded",()=>{
    const dynamicHeader = document.getElementsByClassName("dynamicHeader");
    if(dynamicHeader){
        //The getElementsByClassName method returns a collection of elements with the specified class name. To access a specific element within this collection, you need to select the element by its index or iterate through them.
        for(let i=0; i<dynamicHeader.length;i++){
            const currentDynamicHeader=dynamicHeader[i];
            // Perform operations on each element here
            currentDynamicHeader.textContent=` ${wordId}  😊`; /* To style the wordId text specifically within the h3 element in pink, you can use inline styles or apply a class and style it using CSS. */
            currentDynamicHeader.style.color="orange"
        } 
        dynamicHeader[1].style.fontSize="20px";

        //sau khi tìm được dynamicHeader[i] , so sánh để tìm ra object tương ứng trong data/words.json
        const definitionElement = document.getElementById('define');
        console.log(`the definition element is: ${definitionElement}`);

        //Fetch data from data.json based on the project ID
        fetch('data/words.json')
            .then(res=>{
                if(!res.ok){
                    throw new Error("File not found!");
                }
                console.log('File found!'); //ok
                console.log(res)
                return res.json();
            })
            .then(data=>{
                //Use the fetched data
                console.log(`fetched data is: ${data.words}`) //When you log the fetched data as [object Object], it means that you are logging an array of objects. To view the content of each object in the array, you can iterate over the array and log each object separately.
                // Iterate through each object in the array and log its content
                const wordsArray= data.words;
                wordsArray.forEach((word,index)=>{
                    console.log(`Object ${index+1}:`,word)
                })
                
                const selectedWord= wordsArray.find(word => word.id === wordId);
                console.log("selectedWord: ",selectedWord);

                if(selectedWord){
                    definitionElement.textContent= selectedWord.define;
                }else{
                    console.log('Word not found!')
                }
            })
            .catch(err=>{console.log("Error fetching data: ",err)});

          
        
    }

     
})

