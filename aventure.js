import { aventure } from "./module/config.js";
import AventureItemSheet from "./module/sheets/AventureItemSheet.js";

Hooks.once("init", function() {
    console.log("aventure | Initialising Aventure System");

    CONFIG.aventure = aventure;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("aventure", AventureItemSheet, { makeDefault: true });
})