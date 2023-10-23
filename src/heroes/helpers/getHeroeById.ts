import { heroes } from "../../assets/data/heroes"

export const getHeroeById = ( id: string | undefined ) => {

    return heroes.find(h => h.id === id);

}