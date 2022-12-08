export class Concession {
    idconcession:number;
    aircraft:string;
    s_no:string;
    concession_no:string;
    str_approval_date:string;
    approval_date:number;
    approval_date_text:string;
    details:string;
    str_valid_upto:string;
    valid_upto:number;
    str_extended_till:string;
    extended_till:number;
    str_removed_on:string;
    removed_on:number;
    remarks:string;
    file:string;

    getApprovalDate() {
        return "24-Feb-2021"
    }
}
