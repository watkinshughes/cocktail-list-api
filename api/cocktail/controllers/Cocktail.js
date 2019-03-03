'use strict';

/**
 * Cocktail.js controller
 *
 * @description: A set of functions called "actions" for managing `Cocktail`.
 */

module.exports = {

  /**
   * Retrieve cocktail records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.cocktail.search(ctx.query);
    } else {
      return strapi.services.cocktail.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a cocktail record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.cocktail.fetch(ctx.params);
  },

  /**
   * Count cocktail records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.cocktail.count(ctx.query);
  },

  /**
   * Create a/an cocktail record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.cocktail.add(ctx.request.body);
  },

  /**
   * Update a/an cocktail record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.cocktail.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an cocktail record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.cocktail.remove(ctx.params);
  }
};
