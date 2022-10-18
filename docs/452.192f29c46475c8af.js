"use strict";(self.webpackChunkassignment_frontend=self.webpackChunkassignment_frontend||[]).push([[452],{7452:(N,p,d)=>{d.r(p),d.d(p,{TodosModule:()=>w});var a=d(6895),s=d(433),u=d(1240),m=d(9739),r=(()=>{return(t=r||(r={}))[t.LOW=0]="LOW",t[t.NORMAL=1]="NORMAL",t[t.HIGH=2]="HIGH",r;var t})(),o=d(8256),h=d(1135);const y=[{title:"Setup Foo module for testing",date:Date.now(),priority:r.LOW,done:!1},{title:"Do something random here",date:Date.now(),priority:r.NORMAL,done:!1},{title:"Remove Bar module from app module",date:Date.now(),priority:r.NORMAL,done:!0},{title:"Write unit-tests for XYZ app",date:Date.now(),priority:r.HIGH,done:!1},{title:"Delete ABC module completely",date:Date.now(),priority:r.NORMAL,done:!1}];let f=(()=>{class t{constructor(){this.todosKey="todos",this.todos=new h.X([]),console.debug("AppService initiated."),console.debug("Loading todos from localStorage.");let e=localStorage.getItem(this.todosKey);e||(console.debug("Loading fake todos since localStorage is empty."),e=JSON.stringify(y)),this.todos.next(JSON.parse(e)),this.todos.subscribe({next:n=>{console.debug("Saving todos to localStorage."),localStorage.setItem(this.todosKey,JSON.stringify(n))}})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=d(1443);function T(t,i){if(1&t&&(o.ynx(0),o.TgZ(1,"option",18),o._uU(2),o.qZA(),o.BQk()),2&t){const e=i.$implicit,n=i.index;o.xp6(1),o.Q6J("value",n),o.xp6(1),o.Oqu(e)}}let b=(()=>{class t{constructor(e,n){this.appService=e,this.toastService=n,this.today=new Date,this.todos=[],this.subs=[],this.todoForm=new s.cw({title:new s.NI(null,s.kI.required),priority:new s.NI(r.LOW,s.kI.required),date:new s.NI(null,s.kI.required)})}ngOnInit(){this.subs.push(this.appService.todos.subscribe(e=>{this.todos=e}))}ngOnDestroy(){this.subs.forEach(e=>e.unsubscribe())}onSubmit(){this.appService.todos.next(this.prepareData()),this.resetForm(),this.toastService.showToast(m.G.Success,"\u0410 new todo was created")}getPriorityList(){return Object.keys(r).filter(e=>isNaN(Number(e)))}resetForm(){this.todoForm.reset({priority:r.LOW})}prepareData(){const{title:e,priority:n,date:c}=this.todoForm.getRawValue();return[{title:e,date:new Date(c).getTime(),priority:Number(n),done:!1},...this.todos]}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(f),o.Y36(g.k))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-add-todo"]],decls:27,vars:7,consts:[[1,"page-header"],[1,"fw-bold"],[1,"container-fluid"],[3,"formGroup","ngSubmit"],[1,"row","mb-3","g-2"],[1,"col-m-6","col-sm-12"],[1,"form-floating"],["formControlName","title","type","text","id","floatingInputGrid","placeholder","make smth awesome...",1,"form-control"],["for","floatingInputGrid"],[1,"col-m-3","col-sm-6"],["formControlName","date","type","date","id","floatingDateGrid",1,"form-control",3,"min"],["for","floatingDateGrid"],["formControlName","priority","id","floatingSelectGrid","aria-label","Priority",1,"form-select"],[4,"ngFor","ngForOf"],["for","floatingSelectGrid"],[1,"row","justify-content-end"],[1,"d-flex","justify-content-end","col","col-m-3"],["type","submit","title","Create new task",1,"btn","btn-primary",3,"disabled"],[3,"value"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0)(1,"div",1),o._uU(2,"What do you need to be done?"),o.qZA()(),o.TgZ(3,"div",2)(4,"form",3),o.NdJ("ngSubmit",function(){return n.onSubmit()}),o.TgZ(5,"div",4)(6,"div",5)(7,"div",6),o._UZ(8,"input",7),o.TgZ(9,"label",8),o._uU(10,"Task"),o.qZA()()(),o.TgZ(11,"div",9)(12,"div",6),o._UZ(13,"input",10),o.ALo(14,"date"),o.TgZ(15,"label",11),o._uU(16,"Date"),o.qZA()()(),o.TgZ(17,"div",9)(18,"div",6)(19,"select",12),o.YNc(20,T,3,2,"ng-container",13),o.qZA(),o.TgZ(21,"label",14),o._uU(22,"Priority"),o.qZA()()()(),o.TgZ(23,"div",15)(24,"div",16)(25,"button",17),o._uU(26," Add task "),o.qZA()()()()()),2&e&&(o.xp6(4),o.Q6J("formGroup",n.todoForm),o.xp6(9),o.Q6J("min",o.xi3(14,4,n.today,"yyyy-MM-dd")),o.xp6(7),o.Q6J("ngForOf",n.getPriorityList()),o.xp6(5),o.Q6J("disabled",n.todoForm.invalid))},dependencies:[a.sg,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.sg,s.u,a.uU]}),t})();var S=d(727);function C(t,i){if(1&t){const e=o.EpF();o.TgZ(0,"div",5),o.NdJ("click",function(){const l=o.CHM(e).$implicit,v=o.oxw();return o.KtG(v.toggleTodo(l))}),o.TgZ(1,"div",6)(2,"div"),o._uU(3),o.qZA(),o.TgZ(4,"div",7),o._uU(5),o.ALo(6,"date"),o.qZA()()()}if(2&t){const e=i.$implicit,n=i.last;o.Gre("card priority-",e.priority,""),o.ekj("done",e.done)("mb-3",!n),o.xp6(3),o.Oqu(e.title),o.xp6(2),o.Oqu(o.lcZ(6,9,e.date))}}function A(t,i){1&t&&(o.TgZ(0,"div",8),o._uU(1,"You have no todos."),o.qZA())}const O=[{path:"",component:(()=>{class t{constructor(e,n){this.appService=e,this.toastService=n,this.subscription=new S.w0,this.todos=[],console.debug("TodosComponent initiated.")}ngOnInit(){this.subscription.add(this.appService.todos.subscribe({next:e=>{this.todos=e}}))}ngOnDestroy(){this.subscription.unsubscribe()}toggleTodo(e){e.done=!e.done,this.appService.todos.next(this.todos)}clean(){this.appService.todos.next(this.todos.filter(e=>!e.done)),this.toastService.showToast(m.G.Success,"Completed tasks was removed")}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(f),o.Y36(g.k))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-todos"]],decls:7,vars:2,consts:[[1,"page-header"],[1,"fw-bold"],["title","Delete completed tasks",1,"btn","btn-danger","btn-sm","ms-auto","text-light",3,"click"],[3,"done","mb-3","class","click",4,"ngFor","ngForOf"],["class","text-secondary",4,"ngIf"],[3,"click"],[1,"card-body","d-flex","align-items-center","justify-content-between"],[1,"small","text-secondary"],[1,"text-secondary"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0)(1,"div",1),o._uU(2,"My Todos"),o.qZA(),o.TgZ(3,"button",2),o.NdJ("click",function(){return n.clean()}),o._uU(4," Clean "),o.qZA()(),o.YNc(5,C,7,11,"div",3),o.YNc(6,A,2,0,"div",4)),2&e&&(o.xp6(5),o.Q6J("ngForOf",n.todos),o.xp6(1),o.Q6J("ngIf",!n.todos.length))},dependencies:[a.sg,a.O5,a.uU],styles:[".card[_ngcontent-%COMP%]{cursor:pointer;border-left-width:4px}.card[_ngcontent-%COMP%]:hover:not(.done){background:rgba(0,0,0,.01)}.card.done[_ngcontent-%COMP%]{opacity:.5;text-decoration:line-through}.card.priority-0[_ngcontent-%COMP%]{border-left-color:#0d6efd}.card.priority-1[_ngcontent-%COMP%]{border-left-color:#f1c40f}.card.priority-2[_ngcontent-%COMP%]{border-left-color:#e74c3c}"]}),t})()},{path:"new",component:b}];let Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[u.Bz.forChild(O),u.Bz]}),t})(),w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[a.ez,Z,s.u5]}),t})()}}]);