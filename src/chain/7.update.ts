import FakerLayer from "./6.faker";
import { handleReject } from "../error/handleReject";

/**
 * this class for implementing update layer in CRUD procedure
 */
export default class UpdateLayer extends FakerLayer {
    /**
     * use this function to force update.
     * this field is not guarded with attribute filter.
     * @param data data to be updated
     */
    public async update(data: any): Promise<boolean> {
        
        let self = this;
        if (this.timestamp) {
            data[this.timestamp_field.updated_at] = this.markValue;
        }
        // @ts-ignore
        if (!(await this.constructor.updating(data))) {
            throw new Error("creating permission denied.");
        }
        // @ts-ignore
        return this.executeRawQuery(`UPDATE ${this.constructor.getTableName()} SET ? WHERE ${this.constructor.primary_key} = ${this[this.constructor.primary_key]}`, data)
        .then((result : any) => {
            this.isExist = true;
            // @ts-ignore
            this.constructor.updated(this[this.constructor.primary_key], this.toObject());
            this.fill(data);
            return true;
        }).catch(handleReject)
    }
    /**
     * shortcut for update data
     * @param id id of row
     * @param data data to be updated
     */
    static async updateData(id : string|number, data: any): Promise<any> {
        let temp = await this.find(id); 
        if (!temp) {
            throw new Error(`row with id ${id} does not exists`);
        }
        temp.fill(data);
        return temp.save();
    }

}