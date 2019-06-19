namespace Blog {
    export interface IPost {
        title: string;
        body: string;
    }

    export class Post {
        title: string;
        body: string;

        constructor(post: IPost){
            this.title = post.title;
            this.body = post.body;
        }

        printPost() {
            console.log(this.title);
            console.log(this.body);
        }
    }
}

namespace Content {
    export interface IPost {
        title: string;
        body: string;
        comments?: string[];
    }

    export class Post {
        title: string;
        body: string;

        constructor(post: IPost){
            this.title = post.title;
            this.body = post.body;
        }

        printPost() {
            console.log(this.title);
            console.log(this.body);
        }
    }
}

var blogPost = new Blog.Post({title: 'My Title', body: 'The best content ever'});

blogPost.printPost();