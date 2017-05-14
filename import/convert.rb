require 'json'
require 'yaml'

faces = []

Dir.glob("bssp/*.yaml") do |face_fn|
  face_raw = YAML.load_file(face_fn)
  face = {
    title: face_raw["title"],
    description: face_raw["description"],
    imageName: face_raw["thumbnail"],
  }

  faces << face
end

puts JSON.pretty_generate(faces)
