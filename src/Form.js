    import React, { Component } from 'react';
    import axios from 'axios';

    import querystring from 'querystring';



    import  Recaptcha from 'react-google-invisible-recaptcha';

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
        this.onSubmit = this.onSubmit.bind(this);
        this.textInput = React.createRef();
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
        this.recaptcha.execute()
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
          let form = document.querySelector("form");
          
          form.classList.add("formSended");
          
        })
        .catch(function(error){
          console.log(error);
        });
        
      }

      render() {
        const { name, email, comment } = this.state;
        return (
          <form className={(this.state.sended ? 'testomSended ' : '')  + (this.state.formActive ? 'testomShow ' : 'hidden ')} onSubmit={this.onSubmit}>
          <div className={"row testomInfoRow "}>
          <div className="col-md-6">
          <p>Имя и Фамилия</p>
          <input type="text" maxLength="25" name="name" value={name} onChange={this.onChange} />
          </div>
          <div className="col-md-6">
          <p>E-mail<span className="selectedText">*</span></p>
          <input type="email" required name="email" value={email} onChange={this.onChange} />
          </div>
          </div>
          <textarea ref={this.textInput} pattern=".{3,}"   required title="Введите пожалуйста отзыв" maxLength="500" placeholder="Оставить отзыв" className="testomTextArea" spellCheck="true"  type="text" name="comment" value={comment} onChange={this.onChange} />
          
          <Recaptcha
          ref={ ref => this.recaptcha = ref }
          sitekey={ "6LcVtmsUAAAAAEHXl-jwvJbWqhQqfpiA63yl7bCP" }
          onResolved={ () => console.log( 'Human detected.' ) } />
          <button className={"testomBut "} type="submit">Отправить отзыв</button>
          </form>
          );
      }
    }


    export default Form;