const moment = require("moment");

function memoryFormat(data) {
  const heap = data / 1024 / 1024;
  return `${Math.round(heap * 100) / 100} MB`;
}

function checkDataType(data) {
  return Array.isArray(data) ? [...data] : { ...data };
}

function format(msg, data) {
  return {
    diagnostic: {
      request_time: `${moment().format("YYYY-MM-DD hh:mm:ss")}`,
      execution_time: `${moment().diff(moment(), "millisecond", true)} ms`,
      memory_usage: `${memoryFormat(data)}`,
      msg,
    },
    data: checkDataType(data),
  };
}

module.exports = {
  format,
};
