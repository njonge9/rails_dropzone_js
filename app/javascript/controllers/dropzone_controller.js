import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropzone"
export default class extends Controller {
  connect() {
    console.log("Connected to dropzone controller")
  }
}
