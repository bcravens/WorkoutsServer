import bookshelf from '../bookshelf'
import Workout from '../models/workouts'

export default bookshelf.Model.extend({
  tableName: 'exercises',
  workout: function() {
    return this.belongsTo(Workout)
  }
})
