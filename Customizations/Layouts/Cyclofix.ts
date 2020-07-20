import {Layout} from "../Layout";
import BikeParkings from "../Layers/BikeParkings";
import BikeServices from "../Layers/BikeStations";
import {GhostBike} from "../Layers/GhostBike";
import Translations from "../../UI/i18n/Translations";
import {DrinkingWater} from "../Layers/DrinkingWater";
import {BikeShop} from "../Layers/BikeShop"


export default class Cyclofix extends Layout {
    constructor() {
        super(
            "pomp",
            ["en", "nl", "fr"],
            Translations.cylofix.title,
            [new BikeServices(), new BikeShop(), new DrinkingWater(), new BikeParkings()],
            16,
            50.8465573,
            4.3516970,
            "<h3>" + Translations.cylofix.title.Render() + "</h3>\n" +
            "\n" +
            `<p>${Translations.cylofix.description.Render()}</p>`
            ,
            "", "");
    }
}
