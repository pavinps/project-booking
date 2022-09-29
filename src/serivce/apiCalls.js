const apiCalls=async( url,method,data)=>{
    const response= await fetch(`http://localhost:8000${url}`,{
         method,
         headers:{
           "Content-Type":"application/json"
         },
         body:data ? JSON.stringify(data):undefined
       })
       return response.json();
 
 }
 export default apiCalls