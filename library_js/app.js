const myLibrary = [];

function Book(title, author, pages, toRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.toRead = toRead;
    this.info = ()=>{
        let ans = this.title + " by " + this.author + ", " + this.pages + " pages, ";
        if(toRead)ans+="not read yet.";
        else ans+= "done reading.";
        return ans; 
    }
}

function addBookToLibrary(){

}

