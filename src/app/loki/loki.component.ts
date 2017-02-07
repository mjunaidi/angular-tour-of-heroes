import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { LokiService } from './loki.service';

@Component({
  moduleId: module.id,
  selector: 'data',
  template: `
    <div id="loki-component">
      <h4>Data</h4>
      <p></p>
    </div>
  `,
  styleUrls: ['./../app.component.css']
})
export class LokiComponent implements OnInit {
  constructor(
    private lokiService: LokiService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    console.log('lokiService');

    let db = lokiService.init('mydb.json');
    /*let users = db.addCollection('users');
    users.insert({
        name: 'Odins',
        age: 50,
        address: 'Asgard'
    });*/

    let entries = db.getCollection('entries');
    console.log(entries);
    //console.log(entries.get(1));

    //console.log(users.findOne({ name: 'Odin' }));
    //console.log(users.get(1));
    //console.log(users.data());
    //var results = users.chain().find({ age: {'$gte': 35} }).simplesort('name').data();
    //console.log(results);

    //db.loadDatabase({}, function(result) {
      //console.log('done');
    //});
  }
  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }
}
