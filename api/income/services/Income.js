'use strict';

/**
 * Read the documentation () to implement custom service functions
 */

const _ = require('lodash');

module.exports = {

  addIncomeRequest: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Income.associations.map(ast => ast.alias));
    const data = _.omit(values, Income.associations.map(ast => ast.alias));

    data.incomeCreateDate = new Date();

    // Create entry with no-relational data.
    const entry = await Income.create(data);

    // Create relational data and return the entry.
    return Income.updateRelations({ _id: entry.id, values: relations });
  },

  getWeekOneCountOfMonth: () => {

    let weekOne = new Date();
    weekOne.setDate(weekOne.getDate()-7);

    const paramWeekOne = { 'incomeCreateDate_gte': weekOne, 'incomeCreateDate_lte': new Date() };

    const filters = strapi.utils.models.convertParams('income', paramWeekOne);

    const result = Income
      .find()
      .where(filters.where);

    return result;
  },

  getWeekTwoCountOfMonth: () => {

    let weekOne = new Date();
    weekOne.setDate(weekOne.getDate()-7);

    let weekTwo = new Date();
    weekTwo.setDate(weekTwo.getDate()-14);

    const paramWeekTwo = { 'incomeCreateDate_gte': weekTwo, 'incomeCreateDate_lte': weekOne };

    const filters = strapi.utils.models.convertParams('income', paramWeekTwo);

    const result = Income
      .find()
      .where(filters.where);

    return result;
  },

  getWeekThreeCountOfMonth: () => {

    let weekOne = new Date();
    weekOne.setDate(weekOne.getDate()-14);

    let weekTwo = new Date();
    weekTwo.setDate(weekTwo.getDate()-21);

    const paramWeekTwo = { 'incomeCreateDate_gte': weekTwo, 'incomeCreateDate_lte': weekOne };

    const filters = strapi.utils.models.convertParams('income', paramWeekTwo);

    const result = Income
      .find()
      .where(filters.where);

    return result;
  },

  getWeekFourthCountOfMonth: () => {

    let weekOne = new Date();
    weekOne.setDate(weekOne.getDate()-21);

    let weekTwo = new Date();
    weekTwo.setDate(weekTwo.getDate()-28);

    const paramWeekTwo = { 'incomeCreateDate_gte': weekTwo, 'incomeCreateDate_lte': weekOne };

    const filters = strapi.utils.models.convertParams('income', paramWeekTwo);

    const result = Income
      .find()
      .where(filters.where);

    return result;
  }

};
