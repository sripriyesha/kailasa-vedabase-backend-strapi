'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require('slugify');

module.exports = {
    beforeSave: async (model, attrs, options) => {
        if (options.method === 'insert' && attrs.title) {
            model.set('slug', slugify(attrs.title, {lower: true}));
        } else if (options.method === 'update' && attrs.title) {
            attrs.slug = slugify(attrs.title, {lower: true});
        }
    },
};
