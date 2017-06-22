import React, { Component } from 'react';
import {Button,Row,Col} from 'react-bootstrap';
import './sample.css'

class LoginInput extends React.Component {
	render(){
		return (
			<div className="form-group has-feedback">
           		<input name="uxEmail"
           			 type={this.props.Type} 
           			 className="form-control input-box" 
           			 placeholder={this.props.Placeholder} 
           			 maxLength={this.props.MaxLength} />
                <span id="ux-email-feed" className="form-control-feedback icon-cancel-circled"> X </span>
            </div>
			)
	}
}

class UxButton extends React.Component{
    render(){
        return(
                <Button
					style={{fontSize : this.props.ButtonSize + 'px' ,
					backgroundColor: this.props.ButtonColor,
					color:this.props.TextColor, 
					borderRadius:"6px",
					width: "100%" ,
					padding: "12px 12px"}} >
                    {this.props.ButtonText}
                </Button>
        )
    }
}

class LoginSample extends React.Component {
    render(){
        return (
        	<div>
				<br/>
        		<div className="col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
				   <div className="panel panel-default">
				      <div className="panel-heading">
				         <h4 className="panel-title">Log in</h4>
				      </div>
				      <div className="panel-body">
				         <div className="socials">
				            <div className="row">
				              <div className="col-xs-6 col-sm-6 col-md-6">
								   <UxButton ButtonSize="14" ButtonColor="#FF585D" TextColor="#fff" ButtonText=" Continue with Google"/>
				               </div>
				               <div className="col-xs-6 col-sm-6 col-md-6">
									<UxButton ButtonSize="14" ButtonColor="#3a68bd" TextColor="#fff" ButtonText=" Continue with Facebook"/>
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
				            <div className="">
				               <div className="row">
				                  <div className="col-md-3 col-lg-3">
									<UxButton ButtonSize="18" ButtonColor="#cdcdcd" TextColor="#000" ButtonText=" Log in"/>
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
