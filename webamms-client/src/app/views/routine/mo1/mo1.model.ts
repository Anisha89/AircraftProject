export class Mo1 {
    idservice:number;
     seqno:any;
     smrdno:any;
     ammtcno:any;
     type:any;
     cat:any;
     effectivity:any;
     description:any;
     trade:any;
     date_created:any;
     type2:any;
     gsenos:any;
     sparenos:any;
     toolsnos:any;
     consumablenos:any;
     gse:Gse[]=[];
     tools:Tools[]=[];
     consumable:Consumable[]=[];
     spare:Spare[]=[];
     aircraft:Aircraft[]=[];

    constructor(){}
}
export class Consumable {
    id:number;
    imgname:string;
    sno:string;
    consumableno:string;
    partno:string;
    oem:string;
    description:string;
    date_created:any;
    
  }
   export class Spare {
    idspare:number;
    imgname:string;
    seqno:string;
    partno:string;
    oem:string;
    description:string;
    date_created:any;
  
  }
    
  
    export class Gse 
     {
     
      id:number;
      imgname:string;
      sno:string;
      gseno:string;
      portno:string;
      odm:string;
      description:string;
      date_created:any;
  
       }
  
  
       export class Tools {
  
        id:number;
        imgname:string;
        sno:string;
        toolsno:string;
        partno:string;
        gdm:string;
        description:string;
        date_created:any;
    
    }




    export class Aircraft {
        id:number;
        aircraft:string;
        tail:string;
        model:string;
        first_flight_date:any;
        last_flown_date:any;
        sortie_no:string;
        airflame_hours:string;
        engine_part_hrs:string;
        engine_STBD_hrs:string;
        aarc:string;
        flight_cycle:any;
        aircraft_status:string;
        apu_hrs:string;
        apu_c_hrs:string;
        apu_cycle:string;
        apu_c_cycle:string;
    }