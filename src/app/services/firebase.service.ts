import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";

import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";


export interface Water {
  droneId?: string,
  dronemean: string,
  dronemean1: string,
  dronemean2: string
}

@Injectable({
  providedIn : 'root'
})

export class FirebaseService {
  

  private droneCol: AngularFirestoreCollection<Water>;
  // private droneDoc: AngularFirestoreDocument<Water>;
  private drones: Observable<Water[]>;
  // private drone: Observable<Water>;
  // private drone$: any;

  constructor(private afs: AngularFirestore) {
    this.droneCol = this.afs.collection<Water>('drones');
    this.drones = this.droneCol.snapshotChanges().pipe(
      map(action => {
        return action.map(a => {
          const data = a.payload.doc.data();
          const droneId = a.payload.doc.id;
          // data.droneId = a.payload.doc.id;
          // return data;
          return {droneId, ...data};
        });
      })
    );
  }

  getDrones(): Observable<Water[]>  {
    return this.drones;
  }

  // getDrone(droneId : string): Observable<Water> {
  //   this.droneDoc = this.afs.doc<Data>("drone/${droneId}");
  //   return (this.drone = this.droneDoc.valueChanges());
  // }
  getDrone(id : string): Observable<Water>{
    return this.droneCol.doc<Water>(id).valueChanges().pipe(
      take(1),
      map(drone =>{
        drone.droneId = id;
        return drone;
      })
    )
  }
}
