// TODO: Create a class constructor named BlogPost 
//that takes in 'authorName', 'title', 'text', 'createdOn', 
//and 'comments'.
class BlogPost{
    authorName: string;
    title: string;
    text: string;
    createdOn: string;
    comments:BlogComment[];//array of blogcomment type;created with class

    constructor(authorName:string, title:string, text:string, createdOn:string, comments:BlogComment[] = []) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.createdOn = createdOn;
        this.comments = comments; 
}
// TODO: Use a default parameter to set 'comments' 
//to an empty array if no value is provided.

// TODO: Give BlogPost a method called printMetaData() with a `void` return 
//type that logs a message saying 'Created by (authorName) on (createdOn)'.

printMetaData(): void {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
}

// TODO: Give Blog Post a method called addComment() with a `void` return type that takes in a comment
// and adds it to the comments array.
addComment(comment: BlogComment): void {
    this.comments.push(comment); // Adds the comment to the comments array
}
}

// TODO: Create a class constructor called BlogComment that 
//takes in 'authorName', 'text', and 'createdOn'.

// BlogComment class
class BlogComment {
    authorName: string;
    text: string;
    createdOn: string;

    constructor(authorName: string, text: string, createdOn: string) {
        this.authorName = authorName;
        this.text = text;
        this.createdOn = createdOn;
    }
// TODO: Give BlogComment a method called printMetaData() with a `void` return type that logs a message saying 'Created by (authorName) on (createdOn) with (text)'.

    printMetaData(): void {
        console.log(`Created by ${this.authorName} 
        on ${this.createdOn} with text: "${this.text}"`);
    }
}


// TODO: Create a new object using the BlogComment class constructor.
 const comment1 = new BlogComment('lekshmi','nice post','aug21');

// TODO: Create a new object using the BlogPost class constructor and 
//omit a value for 'comments'.
 const blogPost1 = new BlogPost ('lekshmi','cookierecipe','my first post about cookie','aug21');
console.log(blogPost1);
// TODO: Use the addComment() method on your newly created BlogPost to add your newly created BlogComment to its comments array.
blogPost1.addComment(comment1);
// TODO: Print the meta data for both the BlogPost and
// the BlogComment to the console.
blogPost1.printMetaData();
comment1.printMetaData();