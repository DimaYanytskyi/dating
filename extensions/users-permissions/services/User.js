'use strict';

/**
 * User.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

const _ = require('lodash');

module.exports = {

  count: (params) => {

    return strapi.query('user', 'users-permissions').count(params);
  },

  getWeekOneUserCountOfMonth: () => {

    let weekOne = new Date();
    weekOne.setDate(weekOne.getDate()-7);

    const paramWeekOne = { 'createdDate_gte': weekOne, 'createdDate_lte': new Date() };

    return strapi.query('user', 'users-permissions').find(paramWeekOne);
  },

  getWeekTwoUserCountOfMonth: () => {

    let weekOne = new Date();
    weekOne.setDate(weekOne.getDate()-7);

    let weekTwo = new Date();
    weekTwo.setDate(weekTwo.getDate()-14);

    const paramWeekTwo = { 'createdDate_gte': weekTwo, 'createdDate_lte': weekOne };

    return strapi.query('user', 'users-permissions').find(paramWeekTwo);
  },

  getWeekThreeUserCountOfMonth: () => {

    let weekOne = new Date();
    weekOne.setDate(weekOne.getDate()-14);

    let weekTwo = new Date();
    weekTwo.setDate(weekTwo.getDate()-21);

    const paramWeekTwo = { 'createdDate_gte': weekTwo, 'createdDate_lte': weekOne };

    return strapi.query('user', 'users-permissions').find(paramWeekTwo);
  },

  getWeekFourthUserCountOfMonth: () => {

    let weekOne = new Date();
    weekOne.setDate(weekOne.getDate()-21);

    let weekTwo = new Date();
    weekTwo.setDate(weekTwo.getDate()-28);

    const paramWeekTwo = { 'createdDate_gte': weekTwo, 'createdDate_lte': weekOne };

    return strapi.query('user', 'users-permissions').find(paramWeekTwo);
  },
};
