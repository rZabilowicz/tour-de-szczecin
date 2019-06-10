export interface RootObject {
    id: string;
    Nazwa: string;
    Miejsce: string;
    Notatka: string;
    Opis: string;
    Przystanek: Przystanek[];
    Zdjecie: string;
    Ulubiony: boolean;
}

export interface Przystanek {
    Nazwa: string;
    Tramwaje: string;
    Autobusy: string;
}