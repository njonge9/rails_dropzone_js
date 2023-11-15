class Post < ApplicationRecord
  validate :title, :description, presence: true

  # Single image upload
  has_one_attached :image
end
