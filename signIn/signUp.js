function fetchData(){
    console.log('START FETCH')
    fetch('http://localhost:3000')
    .then(response =>{
        if(!response.ok){
            throw Error("error");
        }
        console.log(response); 
      
        })
        

}

fetchData();
