'use strict';

/**
 * Read the documentation () to implement custom service functions
 */

const _ = require('lodash');

module.exports = {

  addReportRequest: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Report.associations.map(ast => ast.alias));
    const data = _.omit(values, Report.associations.map(ast => ast.alias));

    data.reportCreateDate = new Date();

    // Create entry with no-relational data.
    const entry = await Report.create(data);

    // Create relational data and return the entry.
    return Report.updateRelations({ _id: entry.id, values: relations });
  },

  getWeekOneCountOfMonth: () => {

    let weekOne = new Date();
    weekOne.setDate(weekOne.getDate()-7);

    const paramWeekOne = { 'reportCreateDate_gte': weekOne, 'reportCreateDate_lte': new Date() };

    const filters = strapi.utils.models.convertParams('report', paramWeekOne);

    const result = Report
      .find()
      .where(filters.where);

    return result;
  },

  getWeekTwoCountOfMonth: () => {

    let weekOne = new Date();
    weekOne.setDate(weekOne.getDate()-7);

    let weekTwo = new Date();
    weekTwo.setDate(weekTwo.getDate()-14);

    const paramWeekTwo = { 'reportCreateDate_gte': weekTwo, 'reportCreateDate_lte': weekOne };

    const filters = strapi.utils.models.convertParams('report', paramWeekTwo);

    const result = Report
      .find()
      .where(filters.where);

    return result;
  },

  getWeekThreeCountOfMonth: () => {

    let weekOne = new Date();
    weekOne.setDate(weekOne.getDate()-14);

    let weekTwo = new Date();
    weekTwo.setDate(weekTwo.getDate()-21);

    const paramWeekTwo = { 'reportCreateDate_gte': weekTwo, 'reportCreateDate_lte': weekOne };

    const filters = strapi.utils.models.convertParams('report', paramWeekTwo);

    const result = Report
      .find()
      .where(filters.where);

    return result;
  },

  getWeekFourthCountOfMonth: () => {

    let weekOne = new Date();
    weekOne.setDate(weekOne.getDate()-21);

    let weekTwo = new Date();
    weekTwo.setDate(weekTwo.getDate()-28);

    const paramWeekTwo = { 'reportCreateDate_gte': weekTwo, 'reportCreateDate_lte': weekOne };

    const filters = strapi.utils.models.convertParams('report', paramWeekTwo);

    const result = Report
      .find()
      .where(filters.where);

    return result;
  }

};
