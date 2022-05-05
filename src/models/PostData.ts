import {User} from "./User";

export class PostData {
    user: User
    content: string
    dateCreated: Date
    hypes: number
    shares: number
    views: number
    comments: Array<{}>

    constructor(user: User, content: string) {
        this.user = user
        this.content = content
        this.dateCreated = new Date()
        this.hypes = 0
        this.shares = 0
        this.views = 0
        this.comments = []
    }
}