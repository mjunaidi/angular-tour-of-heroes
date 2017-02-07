import { Injectable } from '@angular/core';
import * as Loki from 'lokijs';
import * as LokiIndexedAdapter from 'loki-indexed-adapter';
import { LocalforageAdapter } from './localforage-adapter';

@Injectable()
export class LokiService {
  public db: any;

  init(filename: string, opt?: any) {
    opt = opt || {};
    //opt.adapter = new LocalforageAdapter(filename);
    opt.adapter = new LokiIndexedAdapter('loki');
    this.db = new Loki(filename, opt);
    if (opt) {
      //this.db = new Loki(filename, opt);

      //var idbAdapter = new LokiIndexedAdapter();
      //var db = new Loki(filename, { adapter: idbAdapter });

      //var idbAdapter = new LokiIndexedAdapter();
      //var pa = new Loki.LokiPartitioningAdapter(idbAdapter, { paging: true });
      //var db = new Loki(filename, { adapter: pa });

      var idbAdapter = new LokiIndexedAdapter('loki');

      var _this = this;
      var loadHandler = function() {
        // if database did not exist it will be empty so I will intitialize here
        var coll = _this.db.getCollection('entries');
        if (coll === null) {
          coll = _this.db.addCollection('entries');
        }
      };

      this.db = new Loki(filename,
        {
          autoload: true,
          autoloadCallback : loadHandler,
          autosave: true,
          autosaveInterval: 10000, // 10 seconds
          adapter: idbAdapter
        });

      /*function loadHandler() {
        // if database did not exist it will be empty so I will intitialize here
        var coll = _this.db.getCollection('entries');
        if (coll === null) {
          coll = _this.db.addCollection('entries');
        }
      }*/

      //db.saveDatabase();
      //db.loadDatabase({}, function(result) {
        //console.log('done');
      //});
    }
    return this.db;
  }
}
