# frozen_string_literal: true

class AddBeforeStartTimeToOpenDays < ActiveRecord::Migration[5.2]
  def change
    add_column :open_days, :before_start_time, :datetime
  end
end
