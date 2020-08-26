export default class AppSevice {
    constructor(text) {
        this.text = text
    }
    log() {
        console.log('AppSevice  ', this.text)
    }
}