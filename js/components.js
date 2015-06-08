(function() {
    'use strict';

    class UpMenu {
        constructor(title) {
            this.title = title;
        }
        insertMenu() {
            let menuBar = document.getElementById('menuBar');
            menuBar.innerHTML = this.title;
        }
    }

    export default UpMenu;
}());
