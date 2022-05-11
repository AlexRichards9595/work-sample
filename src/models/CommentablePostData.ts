import {PostData} from "./PostData";

export class CommentablePostData {
    postData: PostData
    comments: Array<PostData>

    constructor(postData: PostData) {
        this.postData = postData
        this.comments = []
    }
}