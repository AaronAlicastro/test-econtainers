export interface Hero {
    id: Number,
    name: string,
    slug: string,
    powerstats: {
        intelligence: Number,
        strength: Number,
        speed: Number,
        durability: Number,
        power: Number,
        combat: Number
    },
    appearance: {
        gender: string,
        race: string,
        height: [],
        weight: [],
        eyeColor: string,
        hairColor: string
    },
    biography: {
        fullName: string,
        alterEgos: string,
        aliases: [],
        placeOfBirth: string,
        firstAppearance: string,
        publisher: string,
        alignment: string
    },
    work: {
        occupation: string,
        base: string
    },
    connections: {
        groupAffiliation: string,
        relatives: string
    },
    images: {
        xs: string,
        sm: string,
        md: string,
        lg: string
    }
  }