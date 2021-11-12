import React, {Component} from 'react';
import axios from 'axios';
export default class CreateUsers extends Component{
     constructor(props){
        super(props);
        this.onChangeFullname= this.onChangeFullname.bind(this);
        this.onChangeAge= this.onChangeAge.bind(this);
        this.onChangeGender= this.onChangeGender.bind(this);
        this.onChangeWeight= this.onChangeWeight.bind(this);
        this.onChangeEmail= this.onChangeEmail.bind(this);
        this.onChangePassword= this.onChangePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);


        this.state={
            fullname:'',
            age:'',
            gender:'',
            weight:'',
            email:'',
            password:''
        }

    }
     onChangeFullname(e){
        this.setState({
            fullname:e.target.value
        });
    }
    onChangeAge(e){
        this.setState({
            age:e.target.value
        });
    }
    onChangeGender(e){
        this.setState({
            gender:e.target.value
        });
    }
    onChangeWeight(e){
        this.setState({
            weight:e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email:e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password:e.target.value
        });
    }
 onSubmit(e){
     e.preventDefault();

     const member={
         fullname:this.state.fullname,
         age:this.state.age,
         gender:this.state.gender,
         weight:this.state.weight,
         email:this.state.email,
         password:this.state.password

     }
     console.log(member);
     axios.post('http://localhost:8080/members/add', member)
      .then(res=>console.log(res.data))
      .catch(error=>{
       console.log(error.response)
      })
     this.setState({
            fullname:'',
            age:'',
            gender:'',
            weight:'',
            email:'',
            password:''
     })
 }
    render(){
        return(
             <div>
            <h3>Create New Member</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
            <label>Fullname:</label>
            <input type="text"
            required
            className="form-control"
            value={this.state.fullname}
            onChange={this.onChangeFullname}
            />
            <label>Age:</label>
            <input type="text"
            required
            className="form-control"
            value={this.state.age}
            onChange={this.onChangeAge}
            />
            <label>Gender:</label>
            <input type="text"
            required
            className="form-control"
            value={this.state.gender}
            onChange={this.onChangeGender}
            />
            <label>Weight:</label>
            <input type="text"
            required
            className="form-control"
            value={this.state.weight}
            onChange={this.onChangeWeight}
            />
              <label>email:</label>
            <input type="text"
            required
            className="form-control"
            value={this.state.email}
            onChange={this.onChangeEmail}
            />
            
              <label>password:</label>
            <input type="text"
            required
            className="form-control"
            value={this.state.password}
            onChange={this.onChangePassword}
            />
            
            
            </div>
            <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary"/>
            </div>
            </form>
            </div>
        )
    }
}