const ApiError = require('../error/ApiError')

class ShopsController {
  async create(req, res) {

  }

  async getAll(req, res, next) {
    const {id} = req.query
    if(!id) {
      return next(ApiError.badRequest('ID not specified'))
    }
    res.json(id)
  }
}

module.exports = new ShopsController()
