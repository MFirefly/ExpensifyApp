// import moment from "moment"; -> won't work for tests because it will import itself
const moment = require.requireActual("moment");

export default (timestamp = 0) => {
    return moment(timestamp);
};
