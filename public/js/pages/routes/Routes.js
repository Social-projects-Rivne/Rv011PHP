define([
	//libs
    'jquery',
    'bootstrap',
	'backbone',
    //deps
	'SignUpView',
    "pages/views/LoginView",
    'Users',
    'UserView',
    'HeaderView',
    "SessionModel",
    "CryOutView"
    ],

    function($,boot,Backbone, SignInView, LoginView, Users, UserView, HeaderView, SessionModel, CryOutView) {
        return Backbone.Router.extend({

            routes: {
                "": "index",
                "register": "register",
                "login":"login",
                "issue": "issue",
            },
            loadHeader: function(){
                var issues = null;
                if(!this.HeaderView){
                    this.HeaderView=new HeaderView({});
                    this.HeaderView.setElement($("header")).render();
                }
            },
            index: function(){
                this.loadHeader();
            },

            register: function() {
                this.loadHeader();
                console.log('Реєстрація');
                if(typeof userView === "undefined"){
                    signInView = new SignInView({collection :new Users});
                };
                signInView.render();
            },
            
            issue: function(){
                var oCryOutView = null;
                this.loadHeader();
                console.log('New issue');
                if(typeof CryOutView !== "undefined"){
                    if (CryOutView instanceof Backbone.View){
                        oCryOutView = CryOutView;
                    } else {
                        oCryOutView = new CryOutView();
                    }
                    console.log(oCryOutView);
                oCryOutView.render();
                }
            },
            
            login: function(){
                this.loadHeader();
                if(session.get("logged_in")===false){
                    console.log('Login');
                    if(typeof loginView==="undefined"){
                        loginView=new LoginView();
                    };
                    loginView.render();
                }
                else{
                    window.location.href="/public/index3.html";
                }
            }
        });
    });