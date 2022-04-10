'use strict';

/**
 * scripture service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::scripture.scripture');
