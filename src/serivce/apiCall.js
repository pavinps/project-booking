const apiCall=async( url,method,data)=>{
   const response= await fetch(`https://localhost:7227${url}`,{
        method,
        headers:{
          "Content-Type":"application/json"
        },
        body:data ? JSON.stringify(data):undefined
      })
      return response.json();

}
export default apiCall