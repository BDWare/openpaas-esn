'use strict';

var authorize = require('../middleware/authorization');
var requestMW = require('../middleware/request');
var timelineentries = require('../controllers/timelineentries');

module.exports = function(router) {
  /**
   * @swagger
   * /timelineentries :
   *   get:
   *     description: Query the timeline of the current user
   *     responses:
   *       200:
   *         $ref: "#/responses/tl_entry"
   *       400:
   *         $ref: "#/responses/cm_400"
   *       401:
   *         $ref: "#/responses/cm_401"
   *       404:
   *         $ref: "#/responses/cm_404"
   *       500:
   *         $ref: "#/responses/cm_500"
   */
  router.get('/timelineentries', authorize.requiresAPILogin, timelineentries.list);

};
