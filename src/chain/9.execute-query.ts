import RelationLayer from "./8.relation";

export default class ExecuteLayer extends RelationLayer {
    async runGet() :Promise<any>{
        let query = this.sb.query;

        return this.executeRawQuery(query, null)
        .then((data: any) => {
            let rows = data.results;
            let result = rows.map((row : any) => {
                let temp = new this.prototype.constructor();
                temp.fill(row);
                temp.isExist = true;
                return temp;
            });
            this.qb.reset();
            this.sb.reset();
            return result;
        }).catch(e => {
            console.log(e);
            return [];
        });
    }

    async runGetFirst() : Promise<any>{
        this.qb.limit(1);
        let query = this.sb.query;
        return this.executeRawQuery(query, null)
        .then((data: any) => {
            let rows = data.results;
            let result = rows.map((row : any) => {
                let temp = new this.prototype.constructor();
                temp.fill(row);
                temp.isExist = true;
                return temp;
            });
            this.qb.reset();
            this.sb.reset();
            return result.length == 1 ? result[0] : null;
        }).catch(e => {
            console.log(e);
            return [];
        });
    }

    runUpdate(data:any) : Promise<boolean> {
        let query = this.ub.query;
        return this.executeRawQuery(query, data)
        .then((data: any) => {
            console.log(data)
            this.qb.reset();
            return true;
        }).catch(e => {
            console.log(e);
            return false;
        });
    }

    runDelete() {
        let query = this.db.query;
        return this.executeRawQuery(query, null)
        .then((data: any) => {
            console.log(data)
            this.qb.reset();
            return true;
        }).catch(e => {
            console.log(e);
            return false;
        });
    }
}