import {PostData} from "../../models/PostData";

export const addHype = (array: PostData[], index: number) => {
    return (array.map((e, i) => {
        if (i === index) {
            e.hypes++
            return e;
        }
        return e
    }));
}