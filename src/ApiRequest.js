import axios from "axios";

    export const PostRequest = async (formdata,url)=>{
      try{
    const response = await axios.post(url,formdata,{
      method: "Post",
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed
      },
      data: formdata,
    });
    console.log("post request status: " + response.status)
      }catch(error){
          //handle errorr
          console.error("Error1:",error.message)
      }
}

export const GetRequest = (url,setData)=>{
   
      const fetchdata = async ()=>{
        try {
          const response = await axios.get(url);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }};
        fetchdata();
      };

  
export const DeleteRequest = async (url) =>{
  try {
    const response = await axios.delete(url);
    console.log("Quiz successfully deleted!", response);
  } catch (error) {
    console.error("Error deleting data", error);
  }

};



