import {getTimeText} from "./timeTextHelper";
import moment from "moment";

describe('timeTextHelper', () => {
    it('should return "just now" if less than a minute"', function () {
        const expected = 'just now';
        const timeText = getTimeText(new Date());
        expect(timeText).toEqual(expected);
    });
    it('should return "a minute ago" if less than a minute"', function () {
        const expected = 'a minute ago'
        const now = new Date();
        const elapsedTime = moment(now).subtract(1, "m").subtract(20, 's').toDate();
        const timeText = getTimeText(elapsedTime);
        expect(timeText).toBe(expected);
    });
    it('should return how many minutes it was ago if less than an hour"', function () {
        const expected = '12 minutes ago'
        const now = new Date();
        const elapsedTime = moment(now).subtract(12, "m").toDate();
        const timeText = getTimeText(elapsedTime);
        expect(timeText).toBe(expected);
    });
    it('should return an hour ago if more than an hour less than two"', function () {
        const expected = 'an hour ago'
        const now = new Date();
        const elapsedTime = moment(now).subtract(1, "h").toDate();
        const timeText = getTimeText(elapsedTime);
        expect(timeText).toBe(expected);
    });
    it('should return how many hours it was ago if less than a day"', function () {
        const expected = '12 hours ago'
        const now = new Date();
        const elapsedTime = moment(now).subtract(12, "h").toDate();
        const timeText = getTimeText(elapsedTime);
        expect(timeText).toBe(expected);
    });
    it('should return yesterday if more than a day less than two"', function () {
        const expected = 'Yesterday'
        const now = new Date();
        const elapsedTime = moment(now).subtract(1, "d").toDate();
        const timeText = getTimeText(elapsedTime);
        expect(timeText).toBe(expected);
    });
    it('should return amount of days ago if more than a week"', function () {
        const expected = '12 days ago'
        const now = new Date();
        const elapsedTime = moment(now).subtract(12, "d").toDate();
        const timeText = getTimeText(elapsedTime);
        expect(timeText).toBe(expected);
    });
    it('should return date string if more than a month"', function () {
        const now = new Date();
        const elapsedTime = moment(now).subtract(35, "d").toDate();
        const expected = moment(elapsedTime).format("MMM Do YYYY");
        const timeText = getTimeText(elapsedTime);
        expect(timeText).toBe(expected);
    });
})