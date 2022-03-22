import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, tap, combineLatest, Subject } from 'rxjs';
import { map, Observable } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuditComponent implements OnInit {

  user={role:"tafe",name:"Rahul"}
  theme = new Subject<string>();
  theme$:Observable<string> = this.theme.asObservable()

  selectedHeaderBS$ = new BehaviorSubject<string>("all");
  selectedHeaderObs$: Observable<any> = this.selectedHeaderBS$.asObservable()

  selectedContentBS$ = new BehaviorSubject<string>("all");
  selectedContentObs$: Observable<any> = this.selectedContentBS$.asObservable()


  // code for respoding to dropdown actions

  selectedHeaders$ = combineLatest([this.http.get("../assets/data/audittrail.json"),
  this.selectedHeaderObs$])
    .pipe(
      tap((data: any) => {
        const [_data, action] = data;
        console.log(_data.body)
        console.log(action)
      }),
      map((data: any) => {
        const [_data, action] = data;

        if (action == "all") {
          return Object.keys(_data.body)
        } else {
          return Object.keys(_data.body)
            .filter(x => x == action)
        }
      })
    )

  selectedContent$ = combineLatest([this.http.get("../assets/data/audittrail.json"), this.selectedContentObs$])
    .pipe(
      map((data: any) => {
        let [_data, action] = data
        let values: any[] = []
        Object.keys(_data.body).map(k => {
          values.push(_data.body[k])
        })
     if(action!="all"){
       values = []
          Object.keys(_data.body).map(k=>{
            if(k==action){
              
              values.push(_data.body[k])
            }
          })
        }
        
        return values
      })
    )





  header$: Observable<string[]> = this.http.get("../assets/data/audittrail.json")
    .pipe(
      tap((response: any) => {

        //        console.log(Object.keys(response.body))
      }),
      map((response: any) => {
        // const [body] = Object.keys(data)

        return Object.keys(response.body)
      })
    )


  contents$: Observable<any[]> = this.http.get("../assets/data/audittrail.json")
    .pipe(
      tap((response: any) => {

        //  console.log(Object.keys(response.body))
      }),
      map((response: any) => {

        let values: any[] = []
        Object.keys(response.body).map(k => {
          values.push(response.body[k])
        })


        return values
      })
    )

  constructor(private http: HttpClient,private themeservice:ThemeService) { }

  ngOnInit(): void {
    this.user.role=="tafe"?this.themeservice.enableTafeTheme():this.themeservice.enableTmtlTheme()
  }

  onSelectHeader(e: any) {
    this.selectedHeaderBS$.next(e.value)
    this.selectedContentBS$.next(e.value)
  }

  settheme(option:string):void{
    // this.theme.next("darktheme")
    // this.theme.next("lighttheme")
    option=='dark'?this.themeservice.enableDark():this.themeservice.enableLight()
    
  }

}



/*

Typescript 


var a =10;

// Java   var a = 10;

a:int = 10

username:string = "karthick"


var usersarray = ["A","B"];

userarray:string[] = ["A"]

variable declaration



*/



