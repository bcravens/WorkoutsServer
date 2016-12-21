import bookshelf from '../bookshelf'
import Exercises from '../models/exercises'
import User from '../models/user'

export default bookshelf.Model.extend({
  tableName: 'workouts',
  exercises: function() {
    return this.hasMany(Exercises)
  },
  user: function() {
    return this.belongsTo(User)
  }
})
