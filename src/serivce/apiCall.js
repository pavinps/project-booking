const apiCall=async( url,method,data)=>{
   const response= await fetch(`http://192.168.1.51:8000${url}`,{
        method,
        headers:{
          "Content-Type":"application/json"
        },
        body:data ? JSON.stringify(data):undefined
      })
      return response.json();

}
export default apiCall