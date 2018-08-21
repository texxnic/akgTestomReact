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
          sended:false,
          
          
        };
      }


      


      onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        this.setState({ [e.target.name]: e.target.value });


        
        
        if (e.target.value.length > 0){
          this.setState({ formActive: true });
        } else {
          this.setState({ formActive: false });
        }
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
        this.setState({ sended: true });
      }

      render() {
        const { name, email, comment } = this.state;
        return (
          <form className={this.state.sended ? 'testomSended' : ''} onSubmit={this.onSubmit}>
          <div className={"row testomInfoRow " + (this.state.formActive ? 'testomShow' : 'hidden')}>
            <div className="col-md-6">
            <p>Имя и Фамилия</p>
              <input type="text" name="name" value={name} onChange={this.onChange} />
            </div>
            <div className="col-md-6">
            <p>E-mail</p>
              <input type="text" name="email" value={email} onChange={this.onChange} />
            </div>
          </div>
          <textarea placeholder="Оставить отзыв" className="testomTextArea" spellCheck="true"  type="text" name="comment" value={comment} onChange={this.onChange} />
          
          <button className={"testomBut " + (this.state.formActive ? 'testomButShow' : 'hidden')} type="submit">Отправить отзыв</button>
          </form>
          );
      }
    }


    export default Form;