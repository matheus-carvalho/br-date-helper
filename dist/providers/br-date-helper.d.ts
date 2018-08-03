export declare class BrDateHelper {
    constructor();
    add(days: number, months: number, years: number): any;
    yesterday(): any;
    today(): any;
    tomorrow(): any;
    dateDiff(greaterDate: string, lesserDate: string): any;
    private formatDate(date);
    private parseDate(date);
    private serializeNegativeDays(month);
}
