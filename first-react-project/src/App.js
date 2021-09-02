// import logo from './logo.svg';
import './App.css';
import posts from './post' ;
import users from './user';

function App() {
  const name = "Hello World";
const obj = { name: "Hello World Object" };
const data = ['We', 'are', 'United'];
const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }];
const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }];
  return (
    <div>
<div>
    <h2 key = {1} >name : {name}  </h2>
    <hr></hr>
    <h2 key = {2} >Obj : {obj.name}  </h2> 
    <hr></hr>
    <h2 key={3}>Data : </h2>
    {
      data.map((item,i)=>{
        return(
          <h3 key={i}>{i+1}- {item}</h3>
        );
      })
    }
    <hr></hr>
     <h2 key={3}>List: </h2>
    {
      list.map((item,i)=>{
        return(
          <h3 key = {i}>{i+1}- {item.name}</h3>
        )
      })
   }
   <hr></hr>
    <h2 key={3}>Complex : </h2>
   {
     complex.map((item,i)=>{
       return(
         <h3 key={i}>{i+1}- {item.company} - {item.jobs}</h3>
       )
     })
     
   }
   <hr></hr>
    </div>
    <div>
      {
      users.map((user,i)=>{
        let filterdArray=[];
        posts.map(post=>{
          if(post.userId === user.id){
            filterdArray.push(post);
          }
        })
        return(
          <div>
          <h3> {i+1}- User Name : {user.name}</h3>
          <h5> User Phone : {user.phone}</h5>
          <h5> User-Name : {user.username}</h5>
          <h5> User Email : {user.email}</h5>
          {
            filterdArray.map((item,i)=>{
              return(
                <div key = {i}>
                <h6 > - Title  {item.title}</h6>
                <h6 > - Title  {item.body}</h6>
                </div>
              )
            })
          }
             <hr></hr>

          </div>
          
        )
       
      })
      }
    
    </div>
   
    </div>
  
  );




}
export default App;
