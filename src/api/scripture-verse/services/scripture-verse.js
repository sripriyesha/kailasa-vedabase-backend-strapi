'use strict';

/**
 * scripture-verse service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::scripture-verse.scripture-verse');
