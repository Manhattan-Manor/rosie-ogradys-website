export class Country {
    id: number;
    name: string

    constructor(country?: Country,
        id: number = 0,
        name: string = ''
    ) {
        if (country) {
            this.id = country.id,
                this.name = country.name
        } else {
            this.id = id,
                this.name = name
        }


    }
    public static async getAll() {
        const response = await fetch(
            import.meta.env.PUBLIC_API +
            "countries.php" ,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",

                },
            }
        );
        const data: Country[] = await response.json() 
        return data;
    }

}