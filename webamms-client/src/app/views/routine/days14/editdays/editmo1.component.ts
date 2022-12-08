import { Component, OnInit } from '@angular/core';
;

import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConsumableserviceService } from '../../../../service/consumableservice.service';
import { ToolsserviceService } from '../../../../service/toolsservice.service';
import { GseserviceService } from '../../../../service/gseservice.service';
import { SpareserviceService } from '../../../../service/spareservice.service';
import { Mo1Service } from '../../mo1/mo1.service';
import { Mo1, Gse, Spare, Consumable, Tools } from '../../mo1/mo1.model';


@Component({
  selector: 'app-editmo1',
  templateUrl: './editmo1.component.html',
  styleUrls: ['./editmo1.component.css']
})
export class Editmo1Component implements OnInit {
  seldata: any;
  seldataspare: any;
  seldatatools: any;
  seldataconsumable: any;
  isselected = false;
  isgse = true;
  istools = false;
  isspare = false;
  isconsumable = false;
  myid: any;
  myidsp: any;
  myidtl: any;
  myidcl: any;
  userroll: any;
  enable: boolean = true;
  nam2: Array<any> = ['0'];
  nam3: Array<any> = ['0'];
  nam4: Array<any> = ['0'];
  nam5: Array<any> = ['0'];
  str1: any = '';
  str1sp: any = '';
  str1tl: any = '';
  str1cl: any = '';
  m1: any;
  msp: any;
  mtl: any;
  mcl: any;
  namestr: any;
  namespare: any;
  nametools: any;
  nameconsumable: any;
  name: string;
  nametl: string;
  namesp: string;
  namecl: string;
  copystr: any;
  copystrsp: any;
  copystrtl: any;
  copystrcl: any;
  datagse: any;
  dataspare: any;
  datatools: any;
  dataconsumable: any;
  name2: any;
  name2sp: any;
  name2tl: any;
  name2cl: any;
  namelen: number = 0;
  needcheck = false;
  gse = new Gse();
  mo1 = new Mo1();
  spare = new Spare();
  tools = new Tools();
  consumable = new Consumable();
  constructor(private _router: Router, private cservice: ConsumableserviceService, private tservice: ToolsserviceService, private _activatedroute: ActivatedRoute, private _service: Mo1Service, private _gseservice: GseserviceService, private _spareservice: SpareserviceService
    , private _http: HttpClient) { }

  ngOnInit(): void {
    this.userroll = localStorage.getItem('a');
    if (this.userroll == "viewer") {
      this.enable = true;
    }
    else {
      this.enable = false;
    }
    let id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
    this._service.fetchUserByIdFromRemotemo1(id).subscribe(
      data => {
        this.mo1 = data;
        this.nam2 = this.mo1.gsenos;
        this.name = this.mo1.gsenos;
        this.nam3 = this.mo1.sparenos;
        this.namesp = this.mo1.sparenos;
        this.nam4 = this.mo1.toolsnos;
        this.nametl = this.mo1.toolsnos;
        this.nam5 = this.mo1.consumablenos;
        this.namecl = this.mo1.consumablenos;
        this.copystr = this.nam2.toString();//if no editing happen the current ans remains for gse
        this.copystrsp = this.nam3.toString();//if no editing happen the current ans remains for spare
        this.copystrtl = this.nam4.toString();
        this.copystrcl = this.nam5.toString();
      },


    )
    /*for gse*/
    this._service.fetchUserListFromRemotegse().subscribe(data => {
      console.log(data);
      this.datagse = data;
    })
    this._service.fetchUserListFromRemotetools().subscribe(data => {
      console.log(data);
      this.datatools = data;
    })
    this._service.fetchUserListFromRemotespare().subscribe(data => {
      console.log(data);
      this.dataspare = data;
    })
    this._service.fetchUserListFromRemoteconsumable().subscribe(data => {
      console.log(data);
      this.dataconsumable = data;
    })
  }

  function1(e: any, id: any) {
    this.myid = id;
    if (e.target.checked) {
      if (this.name == undefined || this.name == null) {
        this.name = id;
        this.nam2[0] = id;
      }
      else {
        this.name = this.name + "," + id;
        this.name2 = this.nam2;
        this.name2 = this.name2.split(",");
        this.name2.push(id);
        this.nam2 = this.name2.toString();
      }
      this.copystr = this.nam2.toString();
    }
    else {
      this.myid = JSON.stringify(id);
      this.name2 = this.nam2;
      this.name2 = this.name2.split(",");
      var index = this.name2.indexOf(this.myid);
      if (index > -1) {
        this.name2.splice(index, 1);
        this.nam2 = this.name2.toString();
      }
      this.name = this.str1;
      this.copystr = this.nam2.toString();
    }
  }

  function2(e: any, id: any) {
    this.myidsp = id;
    if (e.target.checked) {
      if (this.namesp == undefined || this.namesp == null) {
        this.namesp = id;
        this.nam3[0] = id;
      }
      else {
        this.namesp = this.namesp + "," + id;
        this.name2sp = this.nam3;
        this.name2sp = this.name2sp.split(",");
        this.name2sp.push(id);
        this.nam3 = this.name2sp.toString();
      }

      this.copystrsp = this.nam3.toString();

    }/*checked*/
    else {
      this.myid = JSON.stringify(id);
      this.name2sp = this.nam3;
      this.name2sp = this.name2sp.split(",");
      var index1 = this.name2sp.indexOf(this.myid);
      if (index1 > -1) {
        this.name2sp.splice(index1, 1);
        this.nam3 = this.name2sp.toString();
      }
      this.namesp = this.str1sp;
      this.copystrsp = this.nam3.toString();
    }
  }
  function3(e: any, id: any) {
    this.myidtl = id;
    if (e.target.checked) {
      if (this.nametl == undefined || this.nametl == null) {
        this.nametl = id;
        this.nam4[0] = id;
      }
      else {
        this.nametl = this.nametl + "," + id;
        this.name2tl = this.nam4;
        this.name2tl = this.name2tl.split(",");
        this.name2tl.push(id);
        this.nam4 = this.name2tl.toString();
      }
      this.copystrtl = this.nam4.toString();

    }
    else {
      this.myid = JSON.stringify(id);
      this.name2tl = this.nam4;
      this.name2tl = this.name2tl.split(",");
      var index2 = this.name2tl.indexOf(this.myid);
      if (index2 > -1) {
        this.name2tl.splice(index2, 1);
        this.nam4 = this.name2tl.toString();
      }
      this.nametl = this.str1tl;
      this.copystrtl = this.nam4.toString();
    }
  }

  function4(e: any, id: any) {
    this.myidcl = id;
    if (e.target.checked) {
      if (this.namecl == undefined || this.namecl == null) {
        this.namecl = id;
        this.nam5[0] = id;
      }
      else {
        this.namecl = this.namecl + "," + id;
        this.name2cl = this.nam5;
        this.name2cl = this.name2cl.split(",");
        this.name2cl.push(id);
        this.nam5 = this.name2cl.toString();
      }
      this.copystrcl = this.nam5.toString();

    }
    else {
      this.myid = JSON.stringify(id);
      this.name2cl = this.nam5;
      this.name2cl = this.name2cl.split(",");
      var index3 = this.name2cl.indexOf(this.myid);
      if (index3 > -1) {
        this.name2cl.splice(index3, 1);
        this.nam5 = this.name2cl.toString();
      }
      this.namecl = this.str1cl;
      this.copystrcl = this.nam5.toString();
    }
  }
  updateeditformsubmit() {
    this.mo1.gsenos = this.copystr;
    this.mo1.sparenos = this.copystrsp;
    this.mo1.toolsnos = this.copystrtl;
    this.mo1.consumablenos = this.copystrcl;
    this._service.addUsertoRemotemo1(this.mo1).subscribe(
      data => {
        this._router.navigate(['/routine/mo1']);
      },
      error => console.log("error")
    )
  }

  gseselected() {
    this.isgse = true;
    this.isspare = false;
    this.istools = false;
    this.isconsumable = false;
    this.needcheck = false;
  }
  spareselected() {
    this.isspare = true;
    this.isgse = false;
    this.istools = false;
    this.isconsumable = false;
    this.needcheck = false;
  }

  toolsselected() {
    this.isspare = false;
    this.isgse = false;
    this.istools = true;
    this.isconsumable = false;
    this.needcheck = false;
  }

  consumableselected() {
    this.isspare = false;
    this.isgse = false;
    this.istools = false;
    this.isconsumable = true;
    this.needcheck = false;
  }
}
