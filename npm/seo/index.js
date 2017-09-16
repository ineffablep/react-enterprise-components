import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
/**
  * Renders Page Header Title , Links and Meta Tags
  * @param {string} title  Page Title
  * @param {string} description  Page description less than 150 characters
  * @param {string} keywords  Page SEO Key words separated by comma
  * @param {string} pageUrl  Page URL for Facebook , Canonical and Twitter card
  * @param {string} imageUrl  Page URL for Facebook , Canonical and Twitter card
  * @param {locale} locale  Page Language for SEO
  * @returns {Helmet} Returns React Element 
 */
var SEO = function SEO(_ref) {
  var title = _ref.title,
      description = _ref.description,
      keywords = _ref.keywords,
      pageUrl = _ref.pageUrl,
      imageUrl = _ref.imageUrl,
      locale = _ref.locale;

  return React.createElement(
    Helmet,
    null,
    React.createElement(
      'title',
      null,
      title
    ),
    React.createElement('meta', {
      name: 'keywords',
      content: 'Whole Lot, Bazaar, Speed delivery , ' + keywords
    }),
    React.createElement('meta', { name: 'og:title', content: title }),
    React.createElement('meta', { name: 'og:url', content: pageUrl }),
    React.createElement('meta', { name: 'og:description', content: description }),
    React.createElement('meta', { name: 'og:image', content: imageUrl }),
    React.createElement('meta', { name: 'og:locale', content: locale }),
    React.createElement('meta', { name: 'twitter:url', content: pageUrl }),
    React.createElement('meta', { name: 'twitter:title', content: title }),
    React.createElement('meta', { name: 'twitter:description', content: description }),
    React.createElement('meta', { name: 'description', content: description }),
    React.createElement('link', { rel: 'canonical', href: pageUrl })
  );
};
SEO.propTypes = {
  /**
     * Page Title
     */
  title: PropTypes.string,
  /**
  * Page Description maximum 150 Characters length
  */
  description: PropTypes.string,
  /**
   * Search Key works separated by comma
   */
  keywords: PropTypes.string,
  /**
   * Page Url - Absolute Path  used for facebook and twitter SEO
   */
  pageUrl: PropTypes.string,
  /**
   * Page Image URL - Absolute Path  used for facebook and twitter SEO
   */
  imageUrl: PropTypes.string,
  /**
   * Page Language used by SEO
   */
  locale: PropTypes.string
};

SEO.defaultProps = {
  title: 'Whole Lot',
  pageUrl: 'http://wholelot.co.uk',
  locale: 'en-GB'
};
export default SEO;