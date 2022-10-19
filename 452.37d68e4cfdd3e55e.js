"use strict";(self.webpackChunkassignment_frontend=self.webpackChunkassignment_frontend||[]).push([[452],{7452:(N,u,d)=>{d.r(u),d.d(u,{TodosModule:()=>w});var a=d(6895),s=d(433),m=d(1240),f=d(9739),r=(()=>{return(o=r||(r={}))[o.LOW=0]="LOW",o[o.NORMAL=1]="NORMAL",o[o.HIGH=2]="HIGH",r;var o})(),t=d(8256),h=d(1135);const y=[{title:"Setup Foo module for testing",date:Date.now(),priority:r.LOW,done:!1},{title:"Do something random here",date:Date.now(),priority:r.NORMAL,done:!1},{title:"Remove Bar module from app module",date:Date.now(),priority:r.NORMAL,done:!0},{title:"Write unit-tests for XYZ app",date:Date.now(),priority:r.HIGH,done:!1},{title:"Delete ABC module completely",date:Date.now(),priority:r.NORMAL,done:!1}];let g=(()=>{class o{constructor(){this.todosKey="todos",this.todos=new h.X([]),console.debug("AppService initiated."),console.debug("Loading todos from localStorage.");let e=localStorage.getItem(this.todosKey);e||(console.debug("Loading fake todos since localStorage is empty."),e=JSON.stringify(y)),this.todos.next(JSON.parse(e)),this.todos.subscribe({next:n=>{console.debug("Saving todos to localStorage."),localStorage.setItem(this.todosKey,JSON.stringify(n))}})}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var v=d(1443);function T(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"option",18),t._uU(2),t.qZA(),t.BQk()),2&o){const e=i.$implicit,n=i.index;t.xp6(1),t.Q6J("value",n),t.xp6(1),t.Oqu(e)}}let b=(()=>{class o{constructor(e,n){this.appService=e,this.toastService=n,this.today=new Date,this.todos=[],this.subs=[],this.todoForm=new s.cw({title:new s.NI(null,s.kI.required),priority:new s.NI(r.LOW,s.kI.required),date:new s.NI(null,s.kI.required)})}ngOnInit(){this.subs.push(this.appService.todos.subscribe(e=>{this.todos=e}))}ngOnDestroy(){this.subs.forEach(e=>e.unsubscribe())}onSubmit(){this.appService.todos.next(this.prepareData()),this.resetForm(),this.toastService.showToast(f.G.Success,"\u0410 new todo was created")}getPriorityList(){return Object.keys(r).filter(e=>isNaN(Number(e)))}resetForm(){this.todoForm.reset({priority:r.LOW})}prepareData(){const{title:e,priority:n,date:c}=this.todoForm.getRawValue();return[{title:e,date:new Date(c).getTime(),priority:Number(n),done:!1},...this.todos]}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g),t.Y36(v.k))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-todo"]],decls:27,vars:7,consts:[[1,"page-header"],[1,"fw-bold"],[1,"container-fluid"],[3,"formGroup","ngSubmit"],[1,"row","mb-3","g-2"],[1,"col-m-6","col-sm-12"],[1,"form-floating"],["formControlName","title","type","text","id","floatingInputGrid","placeholder","make smth awesome...",1,"form-control"],["for","floatingInputGrid"],[1,"col-m-3","col-sm-6"],["formControlName","date","type","date","id","floatingDateGrid",1,"form-control",3,"min"],["for","floatingDateGrid"],["formControlName","priority","id","floatingSelectGrid","aria-label","Priority",1,"form-select"],[4,"ngFor","ngForOf"],["for","floatingSelectGrid"],[1,"row","justify-content-end"],[1,"d-flex","justify-content-end","col","col-m-3"],["type","submit","title","Create new task",1,"btn","btn-primary",3,"disabled"],[3,"value"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"What do you need to be done?"),t.qZA()(),t.TgZ(3,"div",2)(4,"form",3),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(5,"div",4)(6,"div",5)(7,"div",6),t._UZ(8,"input",7),t.TgZ(9,"label",8),t._uU(10,"Task"),t.qZA()()(),t.TgZ(11,"div",9)(12,"div",6),t._UZ(13,"input",10),t.ALo(14,"date"),t.TgZ(15,"label",11),t._uU(16,"Date"),t.qZA()()(),t.TgZ(17,"div",9)(18,"div",6)(19,"select",12),t.YNc(20,T,3,2,"ng-container",13),t.qZA(),t.TgZ(21,"label",14),t._uU(22,"Priority"),t.qZA()()()(),t.TgZ(23,"div",15)(24,"div",16)(25,"button",17),t._uU(26," Add task "),t.qZA()()()()()),2&e&&(t.xp6(4),t.Q6J("formGroup",n.todoForm),t.xp6(9),t.Q6J("min",t.xi3(14,4,n.today,"yyyy-MM-dd")),t.xp6(7),t.Q6J("ngForOf",n.getPriorityList()),t.xp6(5),t.Q6J("disabled",n.todoForm.invalid))},dependencies:[a.sg,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.sg,s.u,a.uU]}),o})();var S=d(727);function C(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",5),t.NdJ("click",function(){const l=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.toggleTodo(l))}),t.TgZ(1,"div",6)(2,"div"),t._uU(3),t.qZA(),t.TgZ(4,"div",7),t._uU(5),t.ALo(6,"date"),t.qZA()()()}if(2&o){const e=i.$implicit,n=i.last;t.Gre("card priority-",e.priority,""),t.ekj("done",e.done)("mb-3",!n),t.xp6(3),t.Oqu(e.title),t.xp6(2),t.Oqu(t.lcZ(6,9,e.date))}}function A(o,i){1&o&&(t.TgZ(0,"div",8),t._uU(1,"You have no todos."),t.qZA())}const O=[{path:"",component:(()=>{class o{constructor(e,n){this.appService=e,this.toastService=n,this.subscription=new S.w0,this.todos=[],console.debug("TodosComponent initiated.")}ngOnInit(){this.subscription.add(this.appService.todos.subscribe({next:e=>{this.todos=e}}))}ngOnDestroy(){this.subscription.unsubscribe()}toggleTodo(e){e.done=!e.done,this.appService.todos.next(this.todos)}clean(){this.todos.filter(n=>n.done).length&&(this.appService.todos.next(this.todos.filter(n=>!n.done)),this.toastService.showToast(f.G.Success,"Completed tasks was removed"))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g),t.Y36(v.k))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-todos"]],decls:7,vars:2,consts:[[1,"page-header"],[1,"fw-bold"],["title","Delete completed tasks",1,"btn","btn-danger","btn-sm","ms-auto","text-light",3,"click"],[3,"done","mb-3","class","click",4,"ngFor","ngForOf"],["class","text-secondary",4,"ngIf"],[3,"click"],[1,"card-body","d-flex","align-items-center","justify-content-between"],[1,"small","text-secondary"],[1,"text-secondary"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"My Todos"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return n.clean()}),t._uU(4," Clean "),t.qZA()(),t.YNc(5,C,7,11,"div",3),t.YNc(6,A,2,0,"div",4)),2&e&&(t.xp6(5),t.Q6J("ngForOf",n.todos),t.xp6(1),t.Q6J("ngIf",!n.todos.length))},dependencies:[a.sg,a.O5,a.uU],styles:[".card[_ngcontent-%COMP%]{cursor:pointer;border-left-width:4px}.card[_ngcontent-%COMP%]:hover:not(.done){background:rgba(0,0,0,.01)}.card.done[_ngcontent-%COMP%]{opacity:.5;text-decoration:line-through}.card.priority-0[_ngcontent-%COMP%]{border-left-color:#0d6efd}.card.priority-1[_ngcontent-%COMP%]{border-left-color:#f1c40f}.card.priority-2[_ngcontent-%COMP%]{border-left-color:#e74c3c}"]}),o})()},{path:"new",component:b}];let Z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.Bz.forChild(O),m.Bz]}),o})(),w=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[a.ez,Z,s.u5]}),o})()}}]);