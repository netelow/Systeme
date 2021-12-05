export default class AventureItemSheet extends ItemSheet {

    get template() {
        return `systems/aventure/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.aventure;

        return data;
    }
}