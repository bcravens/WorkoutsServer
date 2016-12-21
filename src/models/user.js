import bookshelf from '../bookshelf'
import Workouts from '../models/workouts'

export default bookshelf.Model.extend({
  tableName: 'users',
  workouts: function() {
    console.log("schema method in user")
    return this.hasMany(Workouts)
  }
})
