"use strict";(self.webpackChunkuser_manager=self.webpackChunkuser_manager||[]).push([[813],{3813:(E,i,a)=>{a.r(i),a.d(i,{UserFormReactiveComponent:()=>g});var e=a(8274),s=a(6895),t=a(433),m=a(2956),l=a(2216),_=a(2687),c=a(3900),f=a(9646),d=a(1612),v=a(2316);function p(n,o){if(1&n){const r=e.EpF();e.TgZ(0,"div",1)(1,"h2",2),e._uU(2,"Create New User"),e.qZA(),e.TgZ(3,"form",3),e.NdJ("ngSubmit",function(){e.CHM(r);const h=e.oxw();return e.KtG(h.handleFormSubmit())}),e.TgZ(4,"div",4)(5,"label",5),e._uU(6,"Email address"),e.qZA(),e._UZ(7,"input",6),e.TgZ(8,"div",7),e._uU(9," The email must be a valid email address. "),e.qZA()(),e.TgZ(10,"div",4)(11,"label",8),e._uU(12,"First name"),e.qZA(),e._UZ(13,"input",9),e.TgZ(14,"div",7),e._uU(15," The first name of the user must be between 3 and 15 characters and must begin with a capital letter. "),e.qZA()(),e.TgZ(16,"div",4)(17,"label",10),e._uU(18,"Last name"),e.qZA(),e._UZ(19,"input",11),e.TgZ(20,"div",7),e._uU(21," The last name of the user must be between 3 and 25 characters and must begin with a capital letter. "),e.qZA()(),e.TgZ(22,"div",12)(23,"div",13)(24,"button",14),e._UZ(25,"fa-icon",15),e.qZA()()()()()}if(2&n){const r=e.oxw();e.xp6(3),e.Q6J("formGroup",r.userForm),e.xp6(5),e.Q6J("hidden",r.userForm.controls.emailAddress.pristine||r.userForm.controls.emailAddress.valid),e.xp6(6),e.Q6J("hidden",r.userForm.controls.firstName.pristine||r.userForm.controls.firstName.valid),e.xp6(6),e.Q6J("hidden",r.userForm.controls.lastName.pristine||r.userForm.controls.lastName.valid),e.xp6(4),e.Q6J("disabled",r.userForm.invalid),e.xp6(1),e.Q6J("icon",r.saveIcon)}}let g=(()=>{class n{constructor(){this.userService=(0,e.f3M)(v.K),this.activatedRoute=(0,e.f3M)(m.gz),this.router=(0,e.f3M)(m.F0),this.formBuilder=(0,e.f3M)(t.qu),this.userForm=new t.cw({id:new t.NI(0,{nonNullable:!0,validators:[t.kI.required]}),emailAddress:new t.NI("",{nonNullable:!0,validators:[t.kI.required,t.kI.pattern("[a-z0-9]+@[a-z]+.[a-z]{2,3}")]}),firstName:new t.NI("",{nonNullable:!0,validators:[t.kI.required,t.kI.pattern("^[A-Z][a-z]{2,14}")]}),lastName:new t.NI("",{nonNullable:!0,validators:[t.kI.required,t.kI.pattern("^[A-Z].{2,24}")]})}),this.user=new d.n,this.user$=this.activatedRoute.params.pipe((0,c.w)(r=>"0"!=r.id?this.userService.get(r.id):(0,f.of)(new d.n))),this.saveIcon=_.EdJ}handleFormSubmit(){this.userService.add(this.userForm.value).then(()=>this.router.navigate([""]))}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-user-form-reactive"]],standalone:!0,features:[e.jDz],decls:2,vars:3,consts:[["class","d-flex flex-column align-items-center",4,"ngIf"],[1,"d-flex","flex-column","align-items-center"],[1,"text-dark","pt-4","pb-3"],[3,"formGroup","ngSubmit"],[1,"mb-3","form-group"],["for","emailAddress"],["id","emailAddress","name","emailAddress","formControlName","emailAddress","type","email",1,"form-control"],[1,"error-message",3,"hidden"],["for","firstName"],["id","firstName","name","firstName","formControlName","firstName","type","text",1,"form-control"],["for","lastName"],["id","lastName","name","lastName","formControlName","lastName","type","text",1,"form-control"],[1,"mb-3","text-center","py-3"],[1,"d-grid","gap-2"],["type","submit",1,"btn","btn-lg","btn-primary",3,"disabled"],[3,"icon"]],template:function(r,u){1&r&&(e.YNc(0,p,26,6,"div",0),e.ALo(1,"async")),2&r&&e.Q6J("ngIf",e.lcZ(1,1,u.user$))},dependencies:[s.ez,s.O5,s.Ov,l.uH,l.BN,t.u5,t._Y,t.Fj,t.JJ,t.JL,t.UX,t.sg,t.u],styles:["form[_ngcontent-%COMP%]{width:100%}.error-message[_ngcontent-%COMP%]{color:red;font-size:.8em;font-style:italic;margin-top:.5rem;animation:_ngcontent-%COMP%_fadeIn ease 2s}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@media (min-width: 992px){form[_ngcontent-%COMP%]{width:50%}}"]}),n})()}}]);