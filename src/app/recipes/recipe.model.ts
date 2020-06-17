import { Ingrediant } from '../shared/ingrediant.module';

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingrediants: Ingrediant[];

    constructor(name: string, des: string, imagePath: string, ingrediants:Ingrediant[]){
        this.name=name;
        this.description=des;
        this.imagePath=imagePath;
        this.ingrediants=ingrediants;
    }
}