import {addHype} from "./addHypeHelper";
import {PostData} from "../../models/PostData";
import {User} from "../../models/User";

describe('addHypeHelper', () => {
    it('should return "just now" if less than a minute"', function () {
        const user = new User('User1', 'profilePic');
        const post1 = new PostData(user, "content 1");
        const post2 = new PostData(user, "content 2");
        const arrayOfPosts = [post1, post2];
        addHype(arrayOfPosts, 1);

        expect(arrayOfPosts[1].hypes).toEqual(1);
    });

})