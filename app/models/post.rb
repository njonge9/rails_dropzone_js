class Post < ApplicationRecord
  validates :title, :description, presence: true

  # Single image upload
  has_one_attached :image
end
