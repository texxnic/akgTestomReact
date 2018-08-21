    import React, { Component } from 'react';

    class TestomList extends Component {
        constructor() {
            super();
            this.state = {

                dataComments: [],
            };
        }

        componentWillMount() {
            // let preData;
            // fetch('http://api.balan.pw/akg')
            // .then(response => response.json())
            // .then(data => {
            //     this.setState({ dataComments: data });
            //     this.preData = data;
            // });
            // console.log(preData);

            var myRequest = new Request('http://api.balan.pw/akg');


            fetch(myRequest)
            .then(response => response.json())
            .then(data => {
             this.setState({ dataComments: data });
         });
        }

        render() {
            const dataCom = this.state.dataComments;
            return (

                
                dataCom.map(function(name, index){
                    return <div className="testomWrap" key={ index }><h5 className="testomh5">{name.comment}</h5><p className="testomName">{name.name}</p></div>;
                })
                

                );
        }
    }

    export default TestomList;