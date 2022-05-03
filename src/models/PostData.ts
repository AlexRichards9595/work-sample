export class PostData {
    username: string
    content: string
    dateCreated: Date
    hypes: number
    shares: number
    views: number
    comments: Array<{}>

    constructor(username: string, content: string) {
        this.username = username
        this.content = content
        this.dateCreated = new Date()
        this.hypes = 0
        this.shares = 0
        this.views = 0
        this.comments = []
    }
}