    import React, { Component } from 'react';
    import axios from 'axios';

    import querystring from 'querystring';

    class Form extends Component {
      constructor() {
        super();
        this.state = {
          name: '',
          email: '',
          comment: '',
          formActive: false,
          
          
        };
      }


      


      onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const resp = this.state;
        let respDATA = querystring.stringify(resp);
        
        var authOptions = {
          method: 'POST',
          url: 'http://api.balan.pw/akg',
          data: respDATA,
          
        };

        axios(authOptions)
        .then(function(response){
          console.log(response.data);
          console.log(response.status);


        })
        .catch(function(error){
          console.log(error);
        });
      }

      render() {
        const { fname, lname, email } = this.state;
        return (
          <form onSubmit={this.onSubmit}>
          <input type="text" name="name" value={fname} onChange={this.onChange} />
          <input type="text" name="email" value={email} onChange={this.onChange} />
          <textarea placeholder="Оставить отзыв" className="testomTextArea" spellCheck="true"  type="text" name="comment" value={lname} onChange={this.onChange} />
          
          <button type="submit">Submit</button>
          </form>
          );
      }
    }


    export default Form;