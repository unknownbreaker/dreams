class Dream < ActiveRecord::Base
  serialize :video_properties, JSON
  belongs_to :user

  def keygen
    self.key = Faker::Lorem.characters(10)
  end
end
