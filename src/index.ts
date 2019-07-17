import RelationLayer from "./chain/8.relation";

export default class MysqlModel extends RelationLayer{
    constructor() {
        super();
    }
    /**
     * initialize the model to be used. for some reason this cant be placed in base constructor
     */
    init() {
        this.keys = Object.keys(this.attribute);
        Object.keys(this.attribute).forEach(key => {
            this[key] = this.attribute[key];
        });
    }
}