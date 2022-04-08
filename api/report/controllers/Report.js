'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {

  getWeeklyCountMonth: async (ctx) => {

    let dataWeek1 = await strapi.services.report.getWeekOneCountOfMonth();
    let dataWeek2 = await strapi.services.report.getWeekTwoCountOfMonth();
    let dataWeek3 = await strapi.services.report.getWeekThreeCountOfMonth();
    let dataWeek4 = await strapi.services.report.getWeekFourthCountOfMonth();

    let week1Count = dataWeek1.length;
    let week2Count = dataWeek2.length;
    let week3Count = dataWeek3.length;
    let week4Count = dataWeek4.length;

    let data = [week4Count, week3Count, week2Count, week1Count];

    ctx.send(data);
  },

  createMobileReportRequest: async (ctx) => {
    return strapi.services.report.addReportRequest(ctx.request.body);
  }
};
