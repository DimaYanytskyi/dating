'use strict';

/**
 * Read the documentation () to implement custom service functions
 */

const _ = require('lodash');

module.exports = {

  addApproveRequest: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Approve.associations.map(ast => ast.alias));
    const data = _.omit(values, Approve.associations.map(ast => ast.alias));

    data.approveRequestDate = new Date();

    // Create entry with no-relational data.
    const entry = await Approve.create(data);

    // Create relational data and return the entry.
    return Approve.updateRelations({ _id: entry.id, values: relations });
  },

  getWeekOneCountOfMonth: () => {

    let weekOne = new Date();
    weekOne.setDate(weekOne.getDate()-7);

    const paramWeekOne = { 'approveRequestDate_gte': weekOne, 'approveRequestDate_lte': new Date() };

    const filters = strapi.utils.models.convertParams('approve', paramWeekOne);

    const result = Approve
      .find()
      .where(filters.where);

    return result;
  },

  getWeekTwoCountOfMonth: () => {

    let weekOne = new Date();
    weekOne.setDate(weekOne.getDate()-7);

    let weekTwo = new Date();
    weekTwo.setDate(weekTwo.getDate()-14);

    const paramWeekTwo = { 'approveRequestDate_gte': weekTwo, 'approveRequestDate_lte': weekOne };

    const filters = strapi.utils.models.convertParams('approve', paramWeekTwo);

    const result = Approve
      .find()
      .where(filters.where);

    return result;
  },

  getWeekThreeCountOfMonth: () => {

    let weekOne = new Date();
    weekOne.setDate(weekOne.getDate()-14);

    let weekTwo = new Date();
    weekTwo.setDate(weekTwo.getDate()-21);

    const paramWeekTwo = { 'approveRequestDate_gte': weekTwo, 'approveRequestDate_lte': weekOne };

    const filters = strapi.utils.models.convertParams('approve', paramWeekTwo);

    const result = Approve
      .find()
      .where(filters.where);

    return result;
  },

  getWeekFourthCountOfMonth: () => {

    let weekOne = new Date();
    weekOne.setDate(weekOne.getDate()-21);

    let weekTwo = new Date();
    weekTwo.setDate(weekTwo.getDate()-28);

    const paramWeekTwo = { 'approveRequestDate_gte': weekTwo, 'approveRequestDate_lte': weekOne };

    const filters = strapi.utils.models.convertParams('approve', paramWeekTwo);

    const result = Approve
      .find()
      .where(filters.where);

    return result;
  }

};
