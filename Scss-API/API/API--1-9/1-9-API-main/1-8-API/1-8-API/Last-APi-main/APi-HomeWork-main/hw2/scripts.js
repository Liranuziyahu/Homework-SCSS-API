let postsArry = fetch('https://jsonplaceholder.typicode.com/posts')
.then((jsonPosts) => jsonPosts.json())
.then((jsonPost) => jsonPost.map((postIndex) => createPost(postIndex)) )

let container_blog = document.getElementById('container_blog');
function createPost(postIndex)
{
    const div = document.createElement('div');                   //All element get in this DIV
    const number_post = document.createElement('span');          // post`s number
    const title = document.createElement('h2');                  //post`s title  
    const body_post = document.createElement('p');               //Post`s body
    const Comments_users = document.createElement('section');    //section for a single Comment
    const CommH3 = document.createElement('h3');                 //Title Comments
    const author_name = document.createElement('p');             //writer post
    const add_comment = document.createElement('form');
    //Publish Comment
    let section_comment_Publish = document.createElement('section');
    let title_explain = document.createElement('h3');
    let write_title = document.createElement('label');
    let inp_title = document.createElement('input');
    let email_label = document.createElement('label');
    let inp_email = document.createElement('input');
    let comment_label = document.createElement('label');
    let inp_comment = document.createElement('input');
    let btn_publish = document.createElement('button');

    //add Classes to the Elements
    div.classList.add('style_div');                    
    number_post.classList.add('number_post')
    title.classList.add('title');
    author_name.classList.add('author_name');
    body_post.classList.add('body_post');
    CommH3.classList.add('CommH3');
    Comments_users.classList.add('Comments_users');
    //Of publish comment
     section_comment_Publish.classList.add('section_comment_Publish');
     title_explain.classList.add('title_explain');
     write_title.classList.add('write_title');
     inp_title.classList.add('inp_title');
     email_label.classList.add('email_label');
     inp_email.classList.add('inp_email');
     comment_label.classList.add('comment_label');
     inp_comment.classList.add('inp_comment');
     btn_publish.classList.add('btn_publish');


  

    // comment_Publish.classList.add('comment_Publish');

    //inner to the elements
    CommH3.innerHTML="Comments";                        
    title.innerHTML = "Title of post : "+postIndex.title;  
    body_post.innerHTML = "What he think ? : "+postIndex.body;
    number_post.innerHTML = postIndex.id;
    nameAuthor(postIndex.userId,author_name,div); // responsive to name`s Authers
    allofComm(number_post.innerHTML);   //  responsible to all comments.
    //Of publish comment
    title_explain.innerHTML="Post a Comment";
    write_title.innerHTML="Comment title:";
    email_label.innerHTML="Email:";
    comment_label.innerHTML="Your comment"




 // This function sort the all comments. it get number_post = number of the post , and then check all comments that worth to number
function allofComm (number_post)                                              
    {
        let commPost = fetch('https://jsonplaceholder.typicode.com/comments')
        .then((allComm) => allComm.json())
        .then((allCom) => allCom.map((i) => {
        if(i.postId == number_post)
        {
            
            let coomentPost =`name:`+`${i.name}`+"\n" +`email:`+`${i.email}`+"\n" +`body:`+`${i.body}`; //    this part crate a div and class with number post , and then 
            const divRecom = document.createElement('div');                                             //     prepares him to post.
            divRecom.innerHTML = coomentPost+"<hr>";                                                    //     i gave the number for the class because i want to non - display him.
            divRecom.classList.add(`divRecom` +`${number_post}`);                                       //
            return Comments_users.append(divRecom);                                                               
          
        }  
            }
                )
                    )
    .then((comm) => {div.append(Comments_users)})                                //the script responsible to post comments  
    .then((comm) => {Comments_users.style.display="none";})                      //open/close the comments by click on the title.
    title.addEventListener('click', () => {                                      // there is object by name open_close_comm and CommH3 (title : "Comments") , that check if the user
        if( open_close_comm == true)                                             //clicked already.
 
        {
            CommH3.style.display="unset";
            section_comment_Publish.style.display="flex";
            Comments_users.style.display="unset";
            open_close_comm=false;
        }
        else{
            Comments_users.style.display="none";
            CommH3.style.display="none"
            section_comment_Publish.style.display="none";
            open_close_comm=true;
        }
        });
    }
let open_close_comm = true;    //this object Initialized for check if the comments of the blog are open or close

//print to DOM
div.appendChild(number_post);
div.appendChild(title);
div.appendChild(body_post);
div.appendChild(CommH3);
CommH3.style.display="none"; //display to comment`s title ("Comments")  
//of publish Comment                          
section_comment_Publish.appendChild(title_explain);
    section_comment_Publish.appendChild(write_title);
    section_comment_Publish.appendChild(inp_title);
    section_comment_Publish.appendChild(email_label);
    section_comment_Publish.appendChild(inp_email);
    section_comment_Publish.appendChild(inp_comment);
    section_comment_Publish.appendChild(btn_publish);
    div.appendChild(section_comment_Publish);

container_blog.appendChild(div);

}

//function of users/writer post. 
function nameAuthor(autherNumber,author_name,div)
{
fetch("https://jsonplaceholder.typicode.com/users")
.then(users => users.json())
.then(user => user.map((i)=>{
    if(i.id == autherNumber)
    {
        author_name.append(i.name);
        div.append(author_name)
    }
   return div
 })
    )
}
function publishComment ()
{
    
}
