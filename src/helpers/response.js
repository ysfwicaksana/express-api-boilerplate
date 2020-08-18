const dayjs = require("dayjs");

function memoryFormat(data) {
  const heap = data / 1024 / 1024;
  return `${Math.round(heap * 100) / 100} MB`;
}

function checkDataType(data) {
  return Array.isArray(data) ? [...data] : { ...data };
}

function startTime() {
  return dayjs();
}

function jsonFormat(msg, data, time) {
  return {
    diagnostic: {
      request_time: `${time().format("YYYY-MM-DD hh:mm:ss")}`,
      execution_time: `${dayjs().diff(dayjs(time), "millisecond", true)} ms`,
      memory_usage: `${memoryFormat(process.memoryUsage().heapUsed)}`,
      msg,
    },
    data: data !== null ? checkDataType(data) : null,
  };
}

module.exports = {
  jsonFormat,
  startTime,
};
