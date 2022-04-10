'use strict';

/**
 * book-chapter service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book-chapter.book-chapter');
