import React, { Component } from 'react';

class LoginInput extends React.Component {
	render(){
		return (
			<div className="form-group">
           		<input name="uxEmail"
           			 type={this.props.Type} 
           			 className="form-control" 
           			 placeholder={this.props.Placeholder} 
           			 maxLength={this.props.MaxLength} />
                <span id="ux-email-feed" className="form-control-feedback icon-cancel-circled" aria-hidden="true"></span>
            </div>
			)
	}
}

class LoginSample extends React.Component {
    render(){
        return (
        	<div>
        		<div className="col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
				   <div className="panel panel-default">
				      <div className="panel-heading">
				         <h4 className="panel-title">Log in</h4>
				      </div>
				      <div className="panel-body">
				         <div className="socials">
				            <div className="row">
				               <div className="col-xs-6 col-sm-6 col-md-6">
					               <button id="ux-google-login" className="btn btn-block btn-sm btn-danger" type="button" data-gid="xxxxxxxxxxxx-xxxxxxxxxxxx">
						               <span className="icon-google-custom"></span> 
						               <span className=" hidden-sm hidden-md hidden-lg">  Continue</span> 
						               <span className="hidden-xs"> Continue with Google</span>
					               </button>
				               </div>
				               <div className="col-xs-6 col-sm-6 col-md-6">
					               	<button id="ux-facebook-login" className="btn btn-block btn-sm btn-primary" type="button">
						               	<span className="icon-facebook-circled-1"></span>
						               	<span className=" hidden-sm hidden-md hidden-lg">  Continue</span>
						               	<span className="hidden-xs"> Continue with Facebook</span>
				               	  	</button>
			               	  	</div>
				            </div>
				            <div className="ux-hr-devider"><span>or</span></div>
				         </div>
				         <form id="ux-login-form" className="ux-form">
				         	<LoginInput Placeholder="Email" MaxLength="50" Type="text"/>
				         	<LoginInput Placeholder="Password" MaxLength="50" Type="password"/>
				            
				            <div className="checkbox">
				               <label className="">
				                  <div className="ux-checkbox checked">
				                  <input id="remember" data-role="ux-checkbox" type="checkbox" checked="" value="" />
				                  <ins className="iCheck-helper" ></ins></div>
				                  &nbsp;&nbsp;Stay logged in
				               </label>
				            </div>
				            <div className="ux-error-container hiddenNIU hidden">
				               <div className="alert alert-danger alert-dismissible" role="alert" >
					               <button type="button" className="close" aria-label="close">
					               		<span type="button" className="icon-cancel-circled" aria-hidden="true"></span>
					               </button>
					               <strong id="ux-email-error" className="error">Enter valid email address.</strong>
				               </div>
				            </div>
				            <div className="">
				               <div className="row">
				                  <div className="col-md-3 col-lg-3">
				                  	<button id="ux-login" type="button" className="btn btn-default btn-block ux-form-action-button" data-loading-text="Logging in...">Log in</button>
				                  </div>
				                  <div className="col-md-9 col-lg-9 text-right centerSm">
				                  	<a id="ux-forgot-pw" className="ux-sibling-pad inline-block ux-form-action-link" href="http://test.peddle.com/forgot-password">Forgot your password?</a>
				                  </div>
				               </div>
				            </div>
				         </form>
				      </div>
				   </div>
				</div>
        	</div>
        	);
    }
}

export default LoginSample;
