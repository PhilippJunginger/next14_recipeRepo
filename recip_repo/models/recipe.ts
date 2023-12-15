type Recipe = {
    id: string;
    name: string;
    duration: {
        prep: number;
        cooking: number;
    };
    description: string;
    ingredients: Ingredient[];
    createdAt?: Date;
    updatedAt?: Date;
}

enum UNIT_VOLUME {
    ML = 'ml',
    L = 'l',
}

enum UNIT_WEIGHT {
    G = 'g',
    KG = 'kg',
}

enum UNIT_UTIL {
    PRISE = 'Prise',
    STUCK = 'Stück',
    TL = 'TL',
    EL = 'EL'
}

type Ingredient = {
    name: string;
    unit: UNIT_WEIGHT | UNIT_UTIL | UNIT_VOLUME;
    amount: number;
}

export type { Recipe, Ingredient};
export { UNIT_UTIL, UNIT_VOLUME, UNIT_WEIGHT};