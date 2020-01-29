# frozen_string_literal: true

class SearchPlant < ApplicationRecord
  has_many :recognition_images, dependent: :destroy

  attachment :plant_image
end
