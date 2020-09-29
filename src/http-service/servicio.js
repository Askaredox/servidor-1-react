import { Config } from "./config";

export class Servicio {
    static async watch(servidor) {
        const url = (servidor === 1) ? Config.servidor1 : Config.servidor2;

        const response = await fetch(url + "/watch");
        const data = await response.json();

        const date = new Date();
        const hh = date.getHours().toString();
        const mm = date.getMinutes().toString();
        const ss = date.getSeconds().toString();
        return { name: `${hh}:${mm}:${ss}`, ram: data.ram, cpu: data.cpu }
    }

    static async get_pubs(servidor) {
        const url = (servidor === 'A') ? Config.servidor1 : Config.servidor2;
        const response = await fetch(url + "/pubs");
        const data = await response.json();
        return data;
    }
}