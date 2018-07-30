class App extends React.Component {
    constructor() {
        super();
        this.state = {items:[1,2,3,4,5], value:''}
        }

        addItem(event){
        this.state.items.push(this.state.value);
        this.setState({items:this.state.items});
        event.preventDefault();
        }

        handleChange(event){
        this.setState({value:event.target.value})
        }

    render() {
    const item  = this.state.items.map((item,index) =>{
        return <li key={index}>{item}</li>
    });
        return <div>
            <ul>{item}</ul>
            <form onSubmit={this.addItem.bind(this)}>
                <input value={this.state.value}
                onChange={this.handleChange.bind(this)}
                />
                <input type="submit"/>
            </form>
         </div>
    }
}
