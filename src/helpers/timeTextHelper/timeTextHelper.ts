import moment from "moment";

export const getTimeText = (dateCreated: Date): string => {
    const now = new Date();
    const nowM = moment(now);
    const dateCreatedM = moment(dateCreated);

    if (nowM.diff(dateCreatedM, 'minutes') < 1) {
        return('just now');
    } else if (nowM.diff(dateCreatedM, 'minutes') < 2) {
        return (`a minute ago`);
    } else if (nowM.diff(dateCreatedM, 'hours') < 1) {
        return(`${(nowM.diff(dateCreatedM, 'minutes'))} minutes ago`);
    } else if (nowM.diff(dateCreatedM, 'hours') < 2) {
        return(`an hour ago`);
    } else if (nowM.diff(dateCreatedM, 'days') < 1) {
        return(`${(nowM.diff(dateCreatedM, 'hours'))} hours ago`);
    } else if (nowM.diff(dateCreatedM, 'days') < 2) {
        return(`Yesterday`);
    } else if (nowM.diff(dateCreatedM, 'weeks') < 1) {
        switch (dateCreated.getDay()) {
            case 0:
                return('Sunday');
            case 1:
                return('Monday');
            case 2:
                return('Tuesday');
            case 3:
                return('Wednesday');
            case 4:
                return('Thursday');
            case 5:
                return('Friday');
            case 6:
                return('Saturday');
        }
    } else if (nowM.diff(dateCreatedM, 'months') < 1) {
        return(`${nowM.diff(dateCreatedM, 'days')} days ago`)
    }
    return(moment(dateCreatedM).format("MMM Do YYYY"));
}