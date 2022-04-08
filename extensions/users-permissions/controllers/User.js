'use strict';

/**
 * User.js controller
 *
 * @description: A set of functions called "actions" for managing `User`.
 */

const _ = require('lodash');

module.exports = {

  count: async (ctx) => {

    let data = await strapi.plugins['users-permissions'].services.user.count(ctx.query);
    ctx.send(data);
  },

  getWeeklyCountMonth: async (ctx) => {

    let dataWeek1 = await strapi.plugins['users-permissions'].services.user.getWeekOneUserCountOfMonth();
    let dataWeek2 = await strapi.plugins['users-permissions'].services.user.getWeekTwoUserCountOfMonth();
    let dataWeek3 = await strapi.plugins['users-permissions'].services.user.getWeekThreeUserCountOfMonth();
    let dataWeek4 = await strapi.plugins['users-permissions'].services.user.getWeekFourthUserCountOfMonth();

    let week1Count = dataWeek1.length;
    let week2Count = dataWeek2.length;
    let week3Count = dataWeek3.length;
    let week4Count = dataWeek4.length;

    let data = [week4Count, week3Count, week2Count, week1Count];

    ctx.send(data);
  },
};
